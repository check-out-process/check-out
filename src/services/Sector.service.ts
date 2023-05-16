import { Sector } from "./models/Sector";
import { v4 as uuidv4 } from 'uuid';
import { Role, User } from "./models/User";
import axios from 'axios'
import { Config } from "../config";
import instance from "./Api.service";

export function getDefaultSectors(processId: string): Promise<Sector[]> {
    const url = `${Config.serverUrl}/process-templates/${processId}`;
    return instance.get(url).then(res => res.data.relatedSectors);


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
        }, {
            id: 2,
            fullname: "string2",
            username: "string2",
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

export function getNotDefaultSectors(processTypeId: string): Promise<Sector[]> {
    const url = `${Config.serverUrl}/sectors/filters`;

    return instance.get(url, {
        params: {
            processtype: 'e30a9c01-7423-44b7-9946-3eadff77bc25',
        }
    }).then(
        res =>
            res.data);

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

export function getSectorResposibleTeamUserById(sectorId: string): Promise<User[]> {
    return Promise.resolve([{
        id: 1,
        fullname: "string",
        username: "string",
        role: Role.Worker
    },
    {
        id: 2,
        fullname: "string2",
        username: "string2",
        role: Role.Worker
    }
    ])
}

export function getSectorresposibleUserById(sectorId: string): Promise<User[]> {
    return Promise.resolve([{
        id: 1,
        fullname: "string",
        username: "string",
        role: Role.Worker
    },
    {
        id: 2,
        fullname: "string2",
        username: "string2",
        role: Role.Worker
    }
    ])
}