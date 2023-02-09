import { getToken } from "./authManager";
const apiUrl = '/api/Contract/';

export const GetContracts = () => {
  return fetch(apiUrl)
    .then(resp => resp.json());
};

export const GetContract= (id) => {
  return fetch(apiUrl + id).then(resp => resp.json());
};

export const UpdateContract = (contract) => {
  return fetch(apiUrl + contract.id, {
    method: 'PUT',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(contract)
  });
};
export const AddContract = (contract) => {
  return fetch(apiUrl + contract.id, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(contract)
  });
};

export const DeleteContract = (contract) => {
  return fetch(apiUrl + contract.id, {
    method: 'DELETE',
  });
};
