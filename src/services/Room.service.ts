import { Config } from "../config";
import { Room } from "./models/Room";
import axios from 'axios'


const delay = (ms: any) => new Promise(
    resolve => setTimeout(resolve, ms)
);

export async function getRooms(departmentUuid: string): Promise<Room[]> {
    return axios.get(`${Config.serverUrl}/departments/${departmentUuid}/rooms`).then(res => res.data)

    return new Promise(async (resolve) => {
        await delay(2000);
        resolve([{
            id: "dfdsfdsfsdds",
            name: "חדר מספר 1",
            departmentId: "sdfdsfdsfds"
        },
        {
            departmentId: "dskfljdkslfjkldsfj",
            id: "dsfdsgdgfgfdhgfhghgf",
            name: "חדר מספר 2"
            }
    ])
    }) 
}