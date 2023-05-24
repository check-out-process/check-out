import { Config } from "../config";
import { BedDTO } from '@checkout/types';
import instance from './Api.service'

export function getBeds(roomId: string): Promise<BedDTO[]> {
    return instance.get(`${Config.serverUrl}/beds/room/${roomId}`).then(res => res.data)
}
