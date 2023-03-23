import { Sector } from "./models/Sector";

export function getSectors(): Promise<Sector[]> {
    return Promise.resolve([{
        id: 1,
        name: "נקיון בומים",
        owner: "אפק לב"
    },
    {
        id: 2,
        name: "טקסטיל",
        owner: "ליאור בכר"
    }
    ])
}