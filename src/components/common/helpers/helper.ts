import { Status } from "../../../services/models/Status"

export const getColorByStatus = (status: string) => {
    switch (status) {
        case Status.In_Progress:
            return '#87CEFA'
        case Status.Done:
            return '#90EE90'
    }
}