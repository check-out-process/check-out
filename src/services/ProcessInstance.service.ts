import { Config } from "../config";
import { CreateProcessInstanceFromDataParams } from "./models/ProcessInstance";
import instance from "./Api.service";

export function createProcessInstance(body: CreateProcessInstanceFromDataParams) {
    const url = `${Config.serverUrl}/process-instances`;
    return instance.post(url, body).then(res => res.data);
}

export function getProcessStatusByBedId(bedId: string) {
    const url = `${Config.serverUrl}/process-instances/${bedId}/update-status`;
    return instance.get(url).then(res => res.data);
}

