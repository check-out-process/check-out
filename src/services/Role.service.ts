import axios from "axios";
import { Config } from "../config";
import { Job, Role, User, UserCreationParams } from '@checkout/types';
import instance from "./Api.service";


export function getRoles(): Promise<Role[]>{
    return instance.get(`${Config.serverUrl}/roles`).then(res => res.data)
}

