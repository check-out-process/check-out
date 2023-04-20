import axios from "axios";
import { Config } from "../config";
import { User } from "./models/User";


export function getUsers(): Promise<User[]>{
    return axios.get(`${Config.serverUrl}/users`).then(res => res.data)
    // return Promise.resolve([
    //     {
    //         id: 1,
    //         name: "אפק לב",
    //         isAdmin: false,
    //     },
    //     {
    //         id: 2,
    //         name: "ליאור בכר",
    //         isAdmin: true
    //     }
    // ])
}


export function getUser(userId: string): Promise<User>{
    return axios.get(`${Config.serverUrl}/users/${userId}`).then(res => res.data)
}

export function deleteUser(userId: number): Promise<User>{
    return axios.delete(`${Config.serverUrl}/users/${userId}`).then(res => res.data)
}

export function createUser(user: User): Promise<User>{
    return axios.post(`${Config.serverUrl}/users`,user,{headers:{'Content-Type':'application/json'}}).then(res => res.data)
}

