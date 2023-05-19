import { Sector } from "./models/Sector";
import { v4 as uuidv4 } from 'uuid';
import { Role } from "./models/User";
import { Config } from "../config";
import instance from "./Api.service";

export function getDefaultSectors(processId: string): Promise<Sector[]> {
    const url = `${Config.serverUrl}/process-templates/${processId}`;
    return instance.get(url).then(res => res.data.relatedSectors);
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
