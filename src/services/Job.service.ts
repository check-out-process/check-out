import axios from "axios";
import { Config } from "../config";
import { Job, User, UserCreationParams } from '@checkout/types';
import instance from "./Api.service";


export function getJobs(): Promise<Job[]>{
    return instance.get(`${Config.serverUrl}/jobs`).then(res => res.data)
}

