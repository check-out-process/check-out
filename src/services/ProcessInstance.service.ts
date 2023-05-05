import axios from 'axios'
import { Config } from "../config";
import { CreateProcessInstanceFromDataParams } from "./models/ProcessInstance";

export function createProcessInstance(body: CreateProcessInstanceFromDataParams) {
    const url = `${Config.serverUrl}/process-instances`;

    return axios.post(url, body).then(res => res.data);   
}

export function getUserProcessInstance(userId: number) { //add return type
    const url = `${Config.serverUrl}/process-instances`;
    
    return axios.get(url).then(res => res.data);   
}

