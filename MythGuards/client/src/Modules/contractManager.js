import { getToken } from "./authManager";
const apiUrl = '/api/Contract/';


export const GetContractsList = () => {
  return getToken().then((token) => {
    return fetch(apiUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(res => res.json())
    })
}

export const GetUserContractsList = (userId) => {
  return getToken().then((token) => {
    return fetch(apiUrl + userId, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(res => res.json())
  })
}

     


export const GetContractById = (id) => {
  return getToken().then((token) => {
    return fetch(`${apiUrl}details/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(res => res.json())
  })
}


export const UpdateContract = (id, contract) => {
  return getToken().then((token) => {
    return fetch(apiUrl + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`

      },
      body: JSON.stringify(contract),
    })
  })
}

export const AddContract = (contract) => {
  return getToken().then((token) => {
    return fetch(`${apiUrl}create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(contract),
    })
  });
}


export const DeleteContract = (id) => {
  return getToken().then((token) => {
      return fetch(apiUrl + id, {
          method: "DELETE",
          headers: {
              Authorization: `Bearer ${token}`,
          },
      })
  })
};
