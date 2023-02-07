const apiUrl = '/api/UserProfile/';

export const GetUserProfiles = () => {
  return fetch(apiUrl)
    .then(resp => resp.json());
};

export const GetUserProfile= (id) => {
  return fetch(apiUrl + id).then(resp => resp.json());
};

export const UpdateUserProfile = (userProfile) => {
  return fetch(apiUrl + userProfile.id, {
    method: 'PUT',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userProfile)
  });
};
export const DeactivateUserProfile = (userProfile) => {
  return fetch(`${apiUrl}/Deactivate/${userProfile.id}`, {
    method: 'PUT',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userProfile)
  });
};
export const AddUserProfile = (userProfile) => {
  return fetch(apiUrl + userProfile.id, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userProfile)
  });
};

