export type ProcssPropertiesSchema = {
    id: number;
    uuid: string;
    propertyDisplayName: string;
    propertyName: string;
    propertyKind: string; // string, checkbox, number
    processKind: number;
    required: boolean;
    value: any;
}

export type Process = {
    uuid: string;
    createdBy: string,
    createdAt: string;
    departmentName: string;
    roomName: string;
    bedName: string;
    status: string;
}