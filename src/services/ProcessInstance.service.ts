import { Config } from "../config";
import { CreateProcessInstanceFromDataParams } from "./models/ProcessInstance";
import instance from "./Api.service";

export function createProcessInstance(body: CreateProcessInstanceFromDataParams) {
    const url = `${Config.serverUrl}/process-instances`;
    return instance.post(url, body).then(res => res.data);
}

