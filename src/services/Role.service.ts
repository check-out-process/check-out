import { Config } from "../config";
import { RoleDTO } from '@checkout/types';
import instance from "./Api.service";


export function getRoles(): Promise<RoleDTO[]>{
    return instance.get(`${Config.serverUrl}/roles`).then(res => res.data)
}

