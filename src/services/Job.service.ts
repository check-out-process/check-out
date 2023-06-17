import { Config } from "../config";
import { Job } from '@checkout/types';
import instance from "./Api.service";


export function getJobs(): Promise<Job[]>{
    return instance.get(`${Config.serverUrl}/jobs`).then(res => res.data)
}

