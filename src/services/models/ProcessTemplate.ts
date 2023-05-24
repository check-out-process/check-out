import { Sector } from "@checkout/types";

export class ProcessType {
    uuid: string;
    id: number;
    name: string;
    relatedSectors: Sector[];
}

export type ProcessTemplate = {
    id: string;
    name: string;
    description: string;
    processType: ProcessType;
    relatedSectors: Sector[];
    relatedSectorsOrder: string[]
}