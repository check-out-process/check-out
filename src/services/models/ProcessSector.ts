import { Status } from "./Status";

export type SectorInstane = {
    instanceId: string;
    sectorId: string;
    name: string;
    resposibleTeamUserId: number;
    resposibleUserId: number;
    status: Status;
}