import { Config } from "../config";
import instance from "./Api.service";
import { DepartmentDTO } from '@checkout/types';


export function getDepartments(): Promise<DepartmentDTO[]> {
    return instance.get(`${Config.serverUrl}/departments`).then(res => res.data)
}

export function addDepartment(departmentName: string): Promise<DepartmentDTO[]> {
    const data = {
        Name: departmentName
    }
    return instance.post(`${Config.serverUrl}/departments`,data,{headers:{'Content-Type':'application/json'}}).then(res => res.data)
}