import { Config } from "../config";
import { Bed } from "./models/Bed";
import instance from './Api.service'



export function getBeds(roomUuid: string): Promise<Bed[]> {
    return instance.get(`${Config.serverUrl}/beds`).then(res => res.data)

    // return new Promise(async (resolve) => {
    //     await delay(2000);
    //     resolve(
    //         [{
                
    //             id: "dfdsfdsfsdds",
    //             name: 'מיטה מספר 1',
    //             roomId: 'ssds'
    //         },
    //         {
                
    //             id: "dsfdsgdgfgfdhgfhghgf",
    //             name: 'מיטה מספר 2',
    //             roomId: 'ssds'
    //         }
    //     ]
    //     )
    // })
}
