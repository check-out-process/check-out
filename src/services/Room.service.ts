import { Config } from "../config";
import instance from "./Api.service";
import { RoomDTO } from '@checkout/types';

export async function getRooms(departmentUuid: string): Promise<RoomDTO[]> {
    return instance.get(`${Config.serverUrl}/departments/${departmentUuid}/rooms`).then(res => res.data)
}

export function addRoom(departmentId: string, roomName: string): Promise<RoomDTO> {
    const data = {
        roomName: roomName
    }
    return instance.post(`${Config.serverUrl}/${departmentId}/rooms`, data, { headers: { 'Content-Type': 'application/json' } }).then(res => res.data)
}
