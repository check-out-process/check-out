import { Bed } from "./models/Bed";
import { ProcssPropertiesSchema } from "./models/Process";

export function getProcessPropertiesSchema(): Promise<ProcssPropertiesSchema[]> {
    return Promise.resolve([{
        id: 1,
    uuid: 'sddsds',
    propertyKind: 'string',
    propertyName: 'האם בבידוד',
    processKind: 1,
    required: true
    }
])
}
