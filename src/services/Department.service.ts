import { Config } from "../config";
import instance from "./Api.service";
import { Department } from "./models/Department";


export function getDepartments(): Promise<Department[]> {
    return instance.get(`${Config.serverUrl}/departments`).then(res => res.data)
}

export function addDepartment(departmentName: string): Promise<Department[]> {
    const data = {
        Name: departmentName
    }
    return instance.post(`${Config.serverUrl}/departments`,data,{headers:{'Content-Type':'application/json'}}).then(res => res.data)
}