import { Sector } from "./models/Sector";
import { v4 as uuidv4 } from 'uuid';
import { Role, User } from "./models/User";
import axios from 'axios'
import { Config } from "../config";
import { CreateProcessInstanceFromDataParams } from "./models/ProcessInstance";

export function createProcessInstance(body: CreateProcessInstanceFromDataParams) {
    // const url = `${Config.serverUrl}/process-instances`;
    // return axios.post(url, body).then(res => res.data);
    return new Promise(async (resolve) => {
        resolve([]) ;
    })
        
}

