import { Bed } from "./models/Bed";
import { ProcssPropertiesSchema } from "./models/Process";

export function getProcessPropertiesSchema(): Promise<ProcssPropertiesSchema[]> {
    return Promise.resolve([{
        id: 1,
    uuid: 'sddsds',
    propertyKind: 'string',
    propertyDisplayName: 'האם בבידוד',
    propertyName: 'ljlj',
    processKind: 1,
    required: true,
    value:null
    },
    {
        id: 2,
    uuid: 'lkkljlkjlk',
    propertyKind: 'string',
    propertyDisplayName: 'האם מלוכלך',
    propertyName: 'dirty',
    processKind: 1,
    required: true,
    value:null
    },
    {
        id: 3,
    uuid: 'huyttt',
    propertyKind: 'checkbox',
    propertyDisplayName: 'האם ישן',
    propertyName: 'isSleep',
    processKind: 1,
    required: true,
    value:true
    },
    {
        id: 4,
    uuid: 'יחעיחעחיעחיע',
    propertyKind: 'checkbox',
    propertyDisplayName: 'האם נקי',
    propertyName: 'isClean',
    processKind: 1,
    required: false,
    value:false
    }
])
}
