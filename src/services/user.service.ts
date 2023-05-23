import axios from "axios";
import { Config } from "../config";
import { User, UserCreationParams } from '@checkout/types';
import instance from "./Api.service";


export function getUsers(): Promise<User[]>{
    return instance.get(`${Config.serverUrl}/users`).then(res => res.data)
}


export function getUser(userId: string): Promise<User>{
    return instance.get(`${Config.serverUrl}/users/${userId}`).then(res => res.data)
}

export function deleteUser(userId: number): Promise<User>{
    return instance.delete(`${Config.serverUrl}/users/${userId}`).then(res => res.data)
}

export function createUser(user: UserCreationParams): Promise<User>{
    return instance.post(`${Config.serverUrl}/auth/register`,user,{headers:{'Content-Type':'application/json'}}).then(res => res.data)
}

export function editUser(user: UserCreationParams): Promise<User>{
    return instance.patch(`${Config.serverUrl}/users`,user,{headers:{'Content-Type':'application/json'}}).then(res => res.data)
}

