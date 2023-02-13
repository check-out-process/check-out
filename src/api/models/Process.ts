export type ProcssPropertiesSchema = {
    id: number;
    uuid: string;
    propertyName: string;
    propertyKind: string; // string, checkbox, number
    processKind: number;
    required: boolean
}