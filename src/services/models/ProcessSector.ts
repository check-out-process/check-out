import { Status } from "./Status";

export type ProcessSector = {
    id: string;
    name: string;
    resposibleTeamUserId: number;
    resposibleUserId: number;
    status: Status;
}