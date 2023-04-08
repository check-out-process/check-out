import { Sector } from "./models/Sector";
import { v4 as uuidv4 } from 'uuid';
import { User } from "./models/User";

export function getDefaultSectors(): Promise<Sector[]> {
    return Promise.resolve([{
        id: uuidv4(),
        name: "נקיון בומים",
        defaultResposibleUserId: 1
    },
    {
        id: uuidv4(),
        name: "טקסטיל",
        defaultResposibleUserId: 2
    },
    {
        id: uuidv4(),
        name: "כוח עזר",
        defaultResposibleUserId: 2
    },
    {
        id: uuidv4(),
        name: "נקיון כללי",
        defaultResposibleUserId: 1
    },
    ])
}

export function getNotDefaultSectors(): Promise<Sector[]> {
    return Promise.resolve([{
        id: uuidv4(),
        name: "תחזוקה",
        defaultResposibleUserId: 1
    },
    {
        id: uuidv4(),
        name: "אינסטלטור",
        defaultResposibleUserId: 2
    },
    ])
}

export function getSectorResposibleUsers(sectorId: string): Promise<User[]> {
    return Promise.resolve([
        {
            id: 1,
            name: "אפק לב"
        },
        {
            id: 2,
            name: "ליאור בכר"
        },
    ])
}