import { getUser } from "../../../services/Token.service"
import { Config } from "../../../config";
import { BedDTO, RoomDTO, DepartmentDTO, NewSectorInstanceData, Sector } from '@checkout/types';

export const buildProcessInstanceBody = (bed: BedDTO, room: RoomDTO, department: DepartmentDTO, properties: any, processSectors: Sector[]) => {
    const newSectors: NewSectorInstanceData[] = processSectors.map(sector => {
        return {
            id: sector.id,
            workerId: sector.defaultCommittingUser?.id,
            responsibleUserId: sector.defaultResponsibleUser?.id
        }
    });

    return {
        name: `${bed.name}/${room.name}/${department.name}`,
        description: properties.description ?? "",
        isIsolation: properties.isIsolation ?? false,
        processTypeId: Config.processTypeRegularBedId,
        orderedSectors: newSectors,
        creatorId: getUser().id,
        departmentId: department.id,
        roomId: room.id,
        bedId: bed.id
    }
}