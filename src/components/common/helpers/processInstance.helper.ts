import { getUser } from "src/services/Token.service"
import { NewSectorInstanceData } from '@checkout/types';
import { Config } from "../../../config";
import { Bed } from '../../../services/models/Bed';
import { Department } from '../../../services/models/Department';
import { Room } from '../../../services/models/Room';
import { Sector } from '../../../services/models/Sector';

export const buildProcessInstanceBody = (bed: Bed, room: Room, department: Department, properties: any, processSectors: Sector[]) => {
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