import { Sector } from "./models/Sector";
import { v4 as uuidv4 } from 'uuid';
import { Role, User } from "./models/User";
import axios from 'axios'
import { Config } from "../config";

export function getDefaultSectors(processTypeId: string): Promise<Sector[]> {
    // const url = `${Config.serverUrl}/process-templates`;
    // return axios.get(url, {
    //     params: {
    //         processId: processTypeId,
    //     }
    // }).then(res => res.data);

    return Promise.resolve([{
        id: uuidv4(),
        name: "נקיון בומים",
        defaultResponsibleUser: {
            id: 1,
            fullname: "string",
            username: "string",
            role: Role.Process_Executer
        },
        responsibleUsers: [{
            id: 1,
            fullname: "string",
            username: "string",
            role: Role.Process_Executer
        }],
        committingUsers: [{
            id: 1,
            fullname: "string",
            username: "string",
            role: Role.Worker
        }]
    },
    {
        id: uuidv4(),
        name: "נקיון 2",
        defaultResponsibleUser: {
            id: 1,
            fullname: "string",
            username: "string",
            role: Role.Process_Executer
        },
        responsibleUsers: [{
            id: 1,
            fullname: "string",
            username: "string",
            role: Role.Process_Executer
        }],
        committingUsers: [{
            id: 1,
            fullname: "string",
            username: "string",
            role: Role.Worker
        }]
    }
    ])
}

export function getNotDefaultSectors(processtype: number): Promise<Sector[]> {
    // const url = `${Config.serverUrl}/sectors/filters`;

    // return axios.get(url, {
    //     params: {
    //         processtype,
    //     }
    // }).then(res => res.data);

    return Promise.resolve([{
        id: uuidv4(),
        name: "תחזוקה",
        defaultResponsibleUser: {
            id: 1,
            fullname: "string",
            username: "string",
            role: Role.Process_Executer
        },
        responsibleUsers: [{
            id: 1,
            fullname: "string",
            username: "string",
            role: Role.Process_Executer
        }],
        committingUsers: [{
            id: 1,
            fullname: "string",
            username: "string",
            role: Role.Worker
        }]
    }
    ])
}