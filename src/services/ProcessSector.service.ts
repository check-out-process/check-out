import { ProcessSector } from "./models/ProcessSector";
import { v4 as uuidv4 } from 'uuid';

export function getProcessSectors(processId: string): Promise<ProcessSector[]> {
    return Promise.resolve([{
        id: uuidv4(),
        name: "נקיון בומים",
        resposibleTeamUserId: 1,
        resposibleUserId: 2
    },
    {
        id: uuidv4(),
        name: "טקסטיל",
        resposibleTeamUserId: 1,
        resposibleUserId: 2
    },
    ])
}

