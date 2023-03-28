import { Room } from "./models/Room";

const delay = (ms: any) => new Promise(
    resolve => setTimeout(resolve, ms)
  );

export async function getRooms(departmentUuid: string): Promise<Room[]>{
    return new Promise(async (resolve) => {
        await delay(2000);
        resolve([{
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
    }) 
        
    
 }