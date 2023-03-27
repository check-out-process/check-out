import { Sector } from "./models/Sector";

export function getSectors(): Promise<Sector[]> {
    return Promise.resolve([{
        id: "1",
        name: "נקיון בומים",
        owner: "אפק לב"
    },
    {
        id: "2",
        name: "טקסטיל",
        owner: "ליאור בכר"
    },
    {
        id: "3",
        name: "כוח עזר",
        owner: "ליאור בכר"
    },
    {
        id: "4",
        name: "נקיון כללי",
        owner: "ליאור בכר"
    },
    {
        id: "5",
        name: "נקיון hhכללי",
        owner: "ליאור בכר"
    }
    ])
}