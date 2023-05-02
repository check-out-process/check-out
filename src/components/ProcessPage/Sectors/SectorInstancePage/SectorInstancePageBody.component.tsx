import React, { ReactNode, useEffect, useState } from 'react';
import { ProcessSector } from "../../../../services/models/ProcessSector";
import { DropdownKeyPair } from '../../../Common/Select/Dropdown.component';
import { Role, User } from '../../../../services/models/User';
import { getSectorResposibleTeamUserById } from '../../../../services/Sector.service';
import EditResponsibleTeamUser from './DropDownOptions/EditResponsibleTeamUser.component';
import { Status } from '../../../../services/models/Status';
import EditResponsibleUser from './DropDownOptions/EditResponsibleUser.component';
import EditSectorStatus from './DropDownOptions/EditSectorStatus.component';
import { CircularProgress } from '@material-ui/core';

interface ISectorInstancePageBodyProps {
    sector: ProcessSector,
}

const SectorInstancePageBody: React.FC<ISectorInstancePageBodyProps> = ({ sector }: ISectorInstancePageBodyProps) => {
    const [resposibleTeamUserOptions, setResposibleTeamUserOptions] = useState<DropdownKeyPair[]>([]);
    const [resposibleTeamUser, setResposibleTeamUser] = useState<User>();
    const [resposibleUserOptions, setResposibleUserOptions] = useState<DropdownKeyPair[]>([]);
    const [resposibleUser, setResposibleUserr] = useState<User>(null);
    const [sectorStatusOptions, setSectorStatusOptions] = useState<DropdownKeyPair[]>([]);
    const [sectorStatus, setSectorStatus] = useState<Status>(sector.status);

    const [loadingTeamUser, setLoadingTeamUser] = useState<boolean>(false);
    const [loadingUser, setLoadingUser] = useState<boolean>(false);

    const getResposibleTeamUserKeyPair = (sectorId: string) => {
        getSectorResposibleTeamUserById(sectorId).then(((responsibleTeamUsers: User[]) => {
            const data: DropdownKeyPair[] = responsibleTeamUsers.map((user: User) =>
                ({ value: user, displayName: user.fullname }));

            setResposibleTeamUserOptions(data);
            setResposibleTeamUser(responsibleTeamUsers.find(user => user.id === sector.resposibleTeamUserId))
            setLoadingTeamUser(true);
        }))
    }

    const getResposibleUserKeyPair = (sectorId: string) => {
        getSectorResposibleTeamUserById(sectorId).then(((responsibleUsers: User[]) => {
            const data: DropdownKeyPair[] = responsibleUsers.map((user: User) =>
                ({ value: user, displayName: user.fullname }));

            setResposibleUserOptions(data);
            setResposibleUserr(responsibleUsers.find(user => user.id === sector.resposibleTeamUserId))
            setLoadingTeamUser(true);
        }))
    }

    const getStatusKeyPair = () => {
        const data: DropdownKeyPair[] = (Object.keys(Status) as Array<keyof typeof Status>).map((status) =>
            ({ value: status, displayName: status }));
        setSectorStatusOptions(data);
    }

    const editSectorInstanceByRole = {
        [Role.Process_Executer]: {
            components: (): ReactNode => {
                return (
                    <div>
                        <EditResponsibleTeamUser resposibleTeamUserOptions={resposibleTeamUserOptions} resposibleTeamUser={resposibleTeamUser} setResposibleTeamUser={setResposibleTeamUser} />
                        <EditResponsibleUser resposibleUserOptions={resposibleUserOptions} resposibleUser={resposibleUser} setResposibleUser={setResposibleUserr} />
                        <EditSectorStatus sectorStatusOptions={sectorStatusOptions} sectorStatus={sectorStatus} setSectorStatus={setSectorStatus} />
                    </div>

                )
            },
            fetchData: (sectorId: string) => {
                getResposibleTeamUserKeyPair(sectorId);
                getResposibleUserKeyPair(sectorId);
                getStatusKeyPair();
            },
        }
    }

    useEffect(() => {
        setLoadingTeamUser(false);
        setLoadingUser(false);
        editSectorInstanceByRole[Role.Process_Executer].fetchData(sector.id); //get from user context

    }, [])

    return (
        <>
            {loadingTeamUser && loadingUser ? <CircularProgress disableShrink /> : editSectorInstanceByRole[Role.Process_Executer].components()
            }
        </>
    )
}

export default SectorInstancePageBody