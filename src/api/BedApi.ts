import { Bed } from "./models/Bed";

export function getBeds(roomUuid: string): Promise<Bed[]> {
    return Promise.resolve([{
        id: 1,
        uuid: "dfdsfdsfsdds",
        name: 'מיטה מספר 1',
        departmentUuid: 'dffd',
        roomUuid: 'ssds'
    },
    {
        id: 2,
        uuid: "dsfdsgdgfgfdhgfhghgf",
        name: 'מיטה מספר 2',
        departmentUuid: 'dffd',
        roomUuid: 'ssds'
    }
])
}
