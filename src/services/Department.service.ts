import { Config } from "../config";
import { Department } from "./models/Department";
import axios from 'axios'


export function getDepartments(): Promise<Department[]> {
    // return axios.get(`${Config.serverUrl}/departments`).then(res => res.data)
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
