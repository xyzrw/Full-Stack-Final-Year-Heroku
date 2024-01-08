require('dotenv').config();
const express = require('express');
const cors = require('cors');
const WebSocket = require('ws');
const jwt = require('jsonwebtoken');
const path = require('path');

const DBConnect = require('./config/database');
const { isAuthenticated, checkAdminAuth } = require('./middleware/user_auth.js');

const app = express();

const bodyParser = require('body-parser');
const corsOptions = {
    origin: 'https://gympro-11a4c48ea502.herokuapp.com/',
    credentials: true,
};

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/build')));

const server = require('http').createServer(app);
const wss = new WebSocket.Server({ server });

DBConnect();

wss.on('connection', function connection(ws, request) {
    console.log('A new client Connected!');
    const token = request.url.substr(1);

    jwt.verify(token, "adaiohjdahdhqawdu280q09eadoao", (err, user) => {
        if (err) {
            ws.close();
        }
    });

    ws.on('message', function incoming(message) {
        wss.clients.forEach(function each(client) {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                const userMessage = JSON.parse(message);
                client.send(JSON.stringify({ text: userMessage.text, name: userMessage.name }));
            }
        });
    });
});

// Serve React app for any route
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
    console.log('Running on port: ' + PORT);
});

// app.use((req, res, next) => {
//     res.setHeader('Backend-URL', `https://gympro-11a4c48ea502.herokuapp.com/:${PORT}`);
//     next();
// });

//Routes
app.use('/auth', require('./routes/auth.js'));
app.use('/workout', require('./routes/workout_route.js'));
app.use('/admin', require('./routes/admin.js'));
app.use('/user', require('./routes/user_route.js'));
