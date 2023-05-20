import { Sector } from "./Sector";

export declare class CreateProcessInstanceFromDataParams {
    name: string;
    description: string;
    processType: number;
    orderedSectors: Sector[];
    creatorId: number;
    departmentId: string;
    roomId: string;
    bedId: string;
    isIsolation: boolean
}