import { Status } from "@checkout/types/dist/lib/enums/status.enum"

export const getColorByStatus = (status: string) => {
    switch (status) {
        case Status.Waiting_Confirm:
            return 'lightgray'
        case Status.In_Progress:
            return '#87CEFA'
        case Status.Done:
            return '#90EE90'
    }
}