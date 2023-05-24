import { Sector } from "@checkout/types";
import { Config } from "../config";
import instance from "./Api.service";
import { ProcessTemplate } from "./models/ProcessTemplate";

export function getDefaultSectors(processId: string): Promise<ProcessTemplate> {
    const url = `${Config.serverUrl}/process-templates/${processId}`;
    return instance.get(url).then(res => res.data);
}

export function getNotDefaultSectors(processTypeId: string): Promise<Sector[]> {
    const url = `${Config.serverUrl}/sectors/filters`;

    return instance.get(url, {
        params: {
            processtype: processTypeId,
        }
    }).then(
        res =>
            res.data);

}

export function getSectorById(sectorId: string): Promise<Sector> {
    const url = `${Config.serverUrl}/sectors/${sectorId}`;

    return instance.get(url).then(res => res.data);

}
