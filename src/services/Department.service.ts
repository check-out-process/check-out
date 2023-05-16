import { Config } from "../config";
import instance from "./Api.service";
import { Department } from "./models/Department";


export function getDepartments(): Promise<Department[]> {
    return instance.get(`${Config.serverUrl}/departments`).then(res => res.data)
    return Promise.resolve([{

        id: "dfdsfdsfsdds",
        name: "מחלקה מספר 1"
    },
    {

        id: "dsfdsgdgfgfdhgfhghgf",
        name: "מחלקה מספר 2"
    }
    ])
}
