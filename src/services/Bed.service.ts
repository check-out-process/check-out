import { Config } from "../config";
import { Bed } from "./models/Bed";
import axios from 'axios'



const delay = (ms: any) => new Promise(
    resolve => setTimeout(resolve, ms)
  );


export function getBeds(departmentId: string,roomUuid: string): Promise<Bed[]> {
    const url = `${Config.serverUrl}/beds`;

    return axios.get(url, {
        params: {
            roomId: roomUuid,
        }
    }).then(res => res.data);

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
