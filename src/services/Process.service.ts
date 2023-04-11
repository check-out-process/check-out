import { Bed } from "./models/Bed";
import { Process, ProcssPropertiesSchema } from "./models/Process";

export function getProcessPropertiesSchema(): Promise<ProcssPropertiesSchema[]> {
    return Promise.resolve([{
        id: 1,
        uuid: 'sddsds',
        propertyKind: 'string',
        propertyDisplayName: 'האם בבידוד',
        propertyName: 'ljlj',
        processKind: 1,
        required: true,
        value: null
    },
    {
        id: 2,
        uuid: 'lkkljlkjlk',
        propertyKind: 'string',
        propertyDisplayName: 'האם מלוכלך',
        propertyName: 'dirty',
        processKind: 1,
        required: true,
        value: null
    },
    {
        id: 3,
        uuid: 'huyttt',
        propertyKind: 'checkbox',
        propertyDisplayName: 'האם ישן',
        propertyName: 'isSleep',
        processKind: 1,
        required: true,
        value: true
    },
    {
        id: 4,
        uuid: 'יחעיחעחיעחיע',
        propertyKind: 'checkbox',
        propertyDisplayName: 'האם נקי',
        propertyName: 'isClean',
        processKind: 1,
        required: false,
        value: false
    }
    ])
}

const delay = (ms: any) => new Promise(
    resolve => setTimeout(resolve, ms)
  );

export function getProcesses(userId: string): Promise<Process[]> {
    return new Promise(async (resolve) => {
        await delay(2000);

        resolve(
            [{
                uuid: 'df-df-dsf-sd-fds-fsd-',
                departmentName: '1',
                roomName: '1',
                bedName: '3',
                createdBy: 'ליאור בכר',
                createdAt: 'שעתיים',
                status: 'בתהליך'
            },
            {
                uuid: 'df-df-dsעיעחיעf-sd-fds-fsd-',
                departmentName: '2',
                roomName: '3',
                bedName: '4',
                createdBy: 'אפק לב',
                createdAt: 'שבוע',
                status: 'סיום'
            },
            {
                uuid: 'df-df-dsf-sd-fds-fsd-',
                departmentName: '3',
                roomName: '1',
                bedName: '3',
                createdBy: 'ליאור בכר',
                createdAt: 'שעתיים',
                status: 'בתהליך'
            },
            {
                uuid: 'df-df-dsעיעחיעf-sd-fds-fsd-',
                departmentName: '4',
                roomName: '3',
                bedName: '4',
                createdBy: 'אפק לב',
                createdAt: 'שבוע',
                status: 'בתהליך'
            },
            {
                uuid: 'df-df-dsf-sd-fds-fsd-',
                departmentName: '5',
                roomName: '1',
                bedName: '3',
                createdBy: 'ליאור בכר',
                createdAt: 'שעתיים',
                status: 'בתהליך'
            },
            {
                uuid: 'df-df-dsעיעחיעf-sd-fds-fsd-',
                departmentName: '6',
                roomName: '3',
                bedName: '4',
                createdBy: 'אפק לב',
                createdAt: 'שבוע',
                status: 'סיום'
            },
            {
                uuid: 'df-df-dsf-sd-fds-fsd-',
                departmentName: '7',
                roomName: '1',
                bedName: '3',
                createdBy: 'ליאור בכר',
                createdAt: 'שעתיים',
                status: 'בתהליך'
            },
            {
                uuid: 'df-df-dsעיעחיעf-sd-fds-fsd-',
                departmentName: '8',
                roomName: '3',
                bedName: '4',
                createdBy: 'אפק לב',
                createdAt: 'שבוע',
                status: 'סיום'
            },
            {
                uuid: 'df-df-dsf-sd-fds-fsd-',
                departmentName: '1',
                roomName: '1',
                bedName: '3',
                createdBy: 'ליאור בכר',
                createdAt: 'שעתיים',
                status: 'בתהליך'
            },
            {
                uuid: 'df-df-dsעיעחיעf-sd-fds-fsd-',
                departmentName: '2',
                roomName: '3',
                bedName: '4',
                createdBy: 'אפק לב',
                createdAt: 'שבוע',
                status: 'סיום'
            },
            {
                uuid: 'df-df-dsf-sd-fds-fsd-',
                departmentName: '3',
                roomName: '1',
                bedName: '3',
                createdBy: 'ליאור בכר',
                createdAt: 'שעתיים',
                status: 'בתהליך'
            },
            {
                uuid: 'df-df-dsעיעחיעf-sd-fds-fsd-',
                departmentName: '4',
                roomName: '3',
                bedName: '4',
                createdBy: 'אפק לב',
                createdAt: 'שבוע',
                status: 'בתהליך'
            },
            {
                uuid: 'df-df-dsf-sd-fds-fsd-',
                departmentName: '5',
                roomName: '1',
                bedName: '3',
                createdBy: 'ליאור בכר',
                createdAt: 'שעתיים',
                status: 'בתהליך'
            },
            {
                uuid: 'df-df-dsעיעחיעf-sd-fds-fsd-',
                departmentName: '6',
                roomName: '3',
                bedName: '4',
                createdBy: 'אפק לב',
                createdAt: 'שבוע',
                status: 'סיום'
            },
            {
                uuid: 'df-df-dsf-sd-fds-fsd-',
                departmentName: '7',
                roomName: '1',
                bedName: '3',
                createdBy: 'ליאור בכר',
                createdAt: 'שעתיים',
                status: 'בתהליך'
            },
            {
                uuid: 'df-df-dsעיעחיעf-sd-fds-fsd-',
                departmentName: '8',
                roomName: '3',
                bedName: '4',
                createdBy: 'אפק לב',
                createdAt: 'שבוע',
                status: 'סיום'
            }
            ]
        )
    })

}   

