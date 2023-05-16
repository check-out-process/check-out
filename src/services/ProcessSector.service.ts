import { SectorInstane } from "./models/ProcessSector";
import { v4 as uuidv4 } from 'uuid';
import { Status } from "./models/Status";

export function getProcessSectors(processId: string): Promise<SectorInstane[]> {
    
    return Promise.resolve([{
        sectorId: uuidv4(),
        instanceId: uuidv4(),
        name: "נקיון בומים",
        resposibleTeamUserId: 1,
        resposibleUserId: 2,
        status: Status.In_Progress
    },
    {
        sectorId: uuidv4(),
        instanceId: uuidv4(),
        name: "טקסטיל",
        resposibleTeamUserId: 1,
        resposibleUserId: 2,
        status: Status.Waiting
    },
    ])
}

