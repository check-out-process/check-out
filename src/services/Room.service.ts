import { Config } from "../config";
import instance from "./Api.service";
import { Room } from "./models/Room";



export async function getRooms(departmentUuid: string): Promise<Room[]>{
    return instance.get(`${Config.serverUrl}/departments/${departmentUuid}/rooms`).then(res => res.data)

    return new Promise(async (resolve) => {
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