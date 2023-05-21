import { Config } from "../config";
import instance from "./Api.service";
import { ProcessInstance, SectorInstance, UpdateSectorStatusParams } from '@checkout/types';
import { CreateProcessInstanceFromDataParams } from '@checkout/types';

export function getUserProcessInstance() : Promise<ProcessInstance[]>{
    const url = `${Config.serverUrl}/process-instances`;
    return instance.get(url).then(res => res.data);
}

export function createProcessInstance(body: CreateProcessInstanceFromDataParams) {
    const url = `${Config.serverUrl}/process-instances`;
    return instance.post(url, body).then(res => res.data);
}

export function getProcessStatusByBedId(bedId: string) {
    const url = `${Config.serverUrl}/process-instances/${bedId}/update-status`;
    return instance.get(url).then(res => res.data);
}


export function updateProcessStatus(bedId: string, body:any ) {
    const url = `${Config.serverUrl}/process-instances/${bedId}/update-status`;
    return instance.patch(url, body).then(res => res.data);
}

export function getProcessSectorInstances(processId: string): Promise<SectorInstance[]> {
    const url = `${Config.serverUrl}/process-instances/${processId}`;
    return instance.get(url).then(res => res.data.sectorInstances);
}
