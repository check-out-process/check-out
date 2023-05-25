import axios from "axios";
import { Config } from "../config";
import { getLocalRefreshToken, removeUser, setUser } from "./Token.service";
import { UserCreationParams } from '@checkout/types';

export function login(phoneNumber: string, password: string) {
  return axios.post(`${Config.serverUrl}/${Config.baseUrls.auth}/login`, { phoneNumber, password })
    .then(response => {
      if (response.data.accessToken) {
        setUser(response.data);
      }

      return response.data;
    })
}

export function logout() {
  const token = getLocalRefreshToken();

  axios.delete(`${Config.serverUrl}/${Config.baseUrls.auth}/logout`, { headers: { 'x-access-token': token } })
    .finally(() => {
      removeUser();
    });
}

export function register(user: UserCreationParams) {
  return axios.post(`${Config.serverUrl}/${Config.baseUrls.auth}/register`, user)
    .then(response => {
      if (response.data.accessToken) {
        setUser(response.data);
      }

      return response.data;
    });
}


