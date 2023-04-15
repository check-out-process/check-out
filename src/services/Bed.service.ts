import { Config } from "../config";
import { Bed } from "./models/Bed";
import axios from 'axios'



const delay = (ms: any) => new Promise(
    resolve => setTimeout(resolve, ms)
  );


export function getBeds(departmentId: string,roomUuid: string): Promise<Bed[]> {
    return axios.get(`${Config.serverUrl}/${departmentId}/rooms/${roomUuid}/beds`).then(res => res.data)

    // return new Promise(async (resolve) => {
    //     await delay(2000);
    //     resolve(
    //         [{
    //             id: 1,
    //             uuid: "dfdsfdsfsdds",
    //             name: 'מיטה מספר 1',
    //             departmentUuid: 'dffd',
    //             roomUuid: 'ssds'
    //         },
    //         {
    //             id: 2,
    //             uuid: "dsfdsgdgfgfdhgfhghgf",
    //             name: 'מיטה מספר 2',
    //             departmentUuid: 'dffd',
    //             roomUuid: 'ssds'
    //         }
    //     ]
    //     )
    // })
}
