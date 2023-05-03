import { Sector, NewSectorInstanceData } from "./Sector";

export declare class CreateProcessInstanceFromDataParams {
    name: string;
    description: string;
    processType: number;
    orderedSectors: NewSectorInstanceData[];
    creatorId: number;
    departmentId: string;
    roomId: string;
    bedId: string;
}