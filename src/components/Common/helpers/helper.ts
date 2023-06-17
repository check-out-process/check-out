import { Status } from "@checkout/types/dist/lib/enums/status.enum"

export const getColorByStatus = (status: string) => {
    switch (status) {
        case Status.Waiting_Confirm:
            return 'lightgray'
        case Status.In_Progress:
            return 'rgb(186 228 253)'
        case Status.Done:
            return 'rgb(164 245 164)'
    }
}