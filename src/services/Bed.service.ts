import { Bed } from "./models/Bed";

const delay = (ms: any) => new Promise(
    resolve => setTimeout(resolve, ms)
  );


export function getBeds(roomUuid: string): Promise<Bed[]> {
    return new Promise(async (resolve) => {
        await delay(2000);
        resolve(
            [{
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
        ]
        )
    })
}
