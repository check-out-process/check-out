import { Department } from "./models/Department";
import axios from 'axios'


export function getDepartments(): Promise<Department[]> {
    return axios.get('http://localhost:2222/departments').then(res => res.data)
}
