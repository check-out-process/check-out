import axios from "axios";
import { Config } from "../config";
import { getLocalRefreshToken, removeUser, setUser } from "./Token.service";

const baseUrl = 'auth';

export declare class UserCreationParams {
  id: number;
  fullname: string;
  username: string;
  password: string;
  jobId: string;
  roleId: string;
  phoneNumber: string;
} //change to library

export function login(phoneNumber: string, password: string) {
  return axios.post(`${Config.serverUrl}/${baseUrl}/login`, { phoneNumber, password })
    .then(response => {
      if (response.data.accessToken) {
        setUser(response.data);
      }

      return response.data;
    })
}

export function logout() {
  const token = getLocalRefreshToken();

  axios.delete(`${Config.serverUrl}/${baseUrl}/logout`, { headers: { 'x-access-token': token } })
    .finally(() => {
      removeUser();
      // window.location.reload();
    });
}

export function register(user: UserCreationParams) {
  return axios.post(`${Config.serverUrl}/${baseUrl}/register`, user)
    .then(response => {
      if (response.data.accessToken) {
        setUser(response.data);
      }

      return response.data;
    });
}


