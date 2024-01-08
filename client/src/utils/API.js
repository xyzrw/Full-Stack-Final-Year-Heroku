const backendUrl = window.location.origin;

export const workoutDetails = (token) => {
  return fetch(`${backendUrl}/workout/details`, {
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  });
};

export const deleteWorkout = (workoutData, token) => {
  return fetch(`${backendUrl}/workout/delete`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(workoutData),
  });
};

export const userWorkoutDetails = (token, uid) => {
  return fetch(`${backendUrl}/workout/user-workouts`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(uid)
  });
};

export const register = (userData) => {
  return fetch(`${backendUrl}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
};

export const getUsers = (token) => {
  return fetch(`${backendUrl}/admin/users/get`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'Accept': 'application/json',
      authorization: `Bearer ${token}`
    },
  });
};

export const login = (userData) => {
  return fetch(`${backendUrl}/auth/login`, {
    method: "POST",
    credentials: 'include',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
};

export const setCardio = (cardioData, token) => {
  return fetch(`${backendUrl}/workout/cardio/set`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(cardioData)
  })
}

export const setTrack = (cardioData, token) => {
  return fetch(`${backendUrl}/workout/track/set`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(cardioData)
  })
}

export const setAbs = (cardioData, token) => {
  return fetch(`${backendUrl}/workout/abs/set`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(cardioData)
  })
}

export const setStrength = (workoutData, token) => {
  return fetch(`${backendUrl}/workout/strength/set`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(workoutData)
  })
}

export const addStaff = (token, data) => {
  return fetch(`${backendUrl}/admin/add-staff`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data)
  });
};

export const updatePassword = (token, data) => {
  return fetch(`${backendUrl}/user/update-password`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data)
  });
};

export const getProfileDetails = (token) => {
  return fetch(`${backendUrl}/user/details`, {
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  });
};

export const updateProfile = (token, data) => {
  return fetch(`${backendUrl}/user/update-details`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data)
  });
};