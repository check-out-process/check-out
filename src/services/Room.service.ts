import { Room } from "./models/Room";


export function getRooms(departmentUuid: string): Promise<Room[]>{
    console.log(departmentUuid)
    return Promise.resolve([{
        id: 1,
        uuid: "dfdsfdsfsdds",
        name: "חדר מספר 1",
        departmentUuid: "sdfdsfdsfds"
    },
    {
        id: 2,
        departmentUuid: "dskfljdkslfjkldsfj",
        uuid: "dsfdsgdgfgfdhgfhghgf",
        name: "חדר מספר 2"
        }
])
}