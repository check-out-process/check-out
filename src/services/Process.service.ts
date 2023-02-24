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
    required: true
    },
    {
        id: 1,
    uuid: 'sddsds',
    propertyKind: 'string',
    propertyDisplayName: 'האם מלוכלך',
    propertyName: 'dirty',
    processKind: 1,
    required: true
    }
])
}
