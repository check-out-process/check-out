import axios from "axios";
import { Config } from "../config";
import { Job, RoleDTO, User, UserCreationParams } from '@checkout/types';
import instance from "./Api.service";


export function getRoles(): Promise<RoleDTO[]>{
    return instance.get(`${Config.serverUrl}/roles`).then(res => res.data)
}

