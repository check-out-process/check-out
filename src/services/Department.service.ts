import { Department } from "./models/Department";


export function getDepartments(): Promise<Department[]> {
    return Promise.resolve([{
        id: 1,
        uuid: "dfdsfdsfsdds",
        name: "מחלקה מספר 1"
    },
    {
        id: 2,
        uuid: "dsfdsgdgfgfdhgfhghgf",
        name: "מחלקה מספר 2"
    }
])
}
