import { Config } from "../config";
import instance from "./Api.service";
import { UpdateSectorInstanceParams } from '@checkout/types';

export function updateSectorInstance(processId: string, sectorId: string, body: UpdateSectorInstanceParams) {
    return instance.patch(`${Config.serverUrl}/process-instances/${processId}/sector-instances/${sectorId}`, body).then(res => res.data)
}

