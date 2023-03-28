import { Sector } from "./models/Sector";
import {v4 as uuidv4} from 'uuid';

export function getDefaultSectors(): Promise<Sector[]> {
    return Promise.resolve([{
        id:  uuidv4(),
        name: "נקיון בומים",
        owner: "אפק לב"
    },
    {
        id: uuidv4(),
        name: "טקסטיל",
        owner: "ליאור בכר"
    },
    {
        id:  uuidv4(),
        name: "כוח עזר",
        owner: "ליאור בכר"
    },
    {
        id:  uuidv4(),
        name: "נקיון כללי",
        owner: "ליאור בכר"
    },
    {
        id:  uuidv4(),
        name: "נקיון hhכללי",
        owner: "ליאור בכר"
    }
    ])
}

export function getNotDefaultSectors(): Promise<Sector[]> {
    return Promise.resolve([{
        id:  uuidv4(),
        name: "תחזוקה",
        owner: "אפק לב"
    },
    {
        id:  uuidv4(),
        name: "אינסטלטור",
        owner: "ליאור בכר"
    },
    ])
}