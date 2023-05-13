import axios from "axios";
import { Config } from "../config";
import { removeUser, setUser } from "./Token.service";

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

export function login(phoneNumber: string, password: string){
    return axios.post(`${Config.serverUrl}/${baseUrl}/login`, {phoneNumber, password})
    .then(response => {
        if (response.data.accessToken) {
          setUser(response.data);
        }

        return response.data;
      })
      .catch(err => {
        console.log(err)
      });
}

export function logout() {
    removeUser();
}

export function register(user: UserCreationParams){
    return axios.post(`${Config.serverUrl}/${baseUrl}/register`, user)
    .then(response => {
        if (response.data.accessToken) {
          setUser(response.data);
        }

        return response.data;
      });
}


