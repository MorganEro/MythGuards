import { getToken } from "./authManager";
const apiUrl = '/api/UserProfile/';

export const GetUserProfilesList = () => {
  return getToken().then((token) => {
    return fetch(`${apiUrl}/all`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(res => res.json())
    })
}
   
export const GetGuardsList = () => {
  return getToken().then((token) => {
    return fetch(`${apiUrl}/guard`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(res => res.json())
    })
}
export const GetClientsList = () => {
  return getToken().then((token) => {
    return fetch(`${apiUrl}/client`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(res => res.json())
    })
}
   
   

export const GetUserProfileById= (id) => {
  return getToken().then((token) => {
    return fetch(`${apiUrl}details/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(res => res.json())
    })
}

export const UpdateUserProfile = ( id, userProfile ) => {
  return getToken().then((token) => {
    return fetch(apiUrl + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`

      },
      body: JSON.stringify(userProfile),
    })
  });
};


export const AddUserProfile = (userProfile) => {
  return getToken().then((token) => {
    return fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`

      },
      body: JSON.stringify(userProfile),
    })
  });
};

