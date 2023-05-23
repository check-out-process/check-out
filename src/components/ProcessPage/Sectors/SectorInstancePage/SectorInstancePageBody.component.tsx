import React, { ReactNode, useEffect, useState } from 'react';
import { DropdownKeyPair } from '../../../Common/Select/Dropdown.component';
import { Role } from '../../../../services/models/User';
import { User } from '@checkout/types';

import { getSectorById } from '../../../../services/Sector.service';
import EditResponsibleTeamUser from './DropDownOptions/EditResponsibleTeamUser.component';
import { Status } from "../../../../services/models/Status";
import EditResponsibleUser from './DropDownOptions/EditResponsibleUser.component';
import EditSectorStatus from './DropDownOptions/EditSectorStatus.component';
import { CircularProgress } from '@material-ui/core';
import { updateSectorInstance } from '../../../../services/SectorInstance.service';
import { enqueueSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import { UpdateSectorInstanceParams, SectorInstance } from '@checkout/types';
import { Sector } from '../../../../services/models/Sector';

interface ISectorInstancePageBodyProps {
    sectorInstance: SectorInstance,
    processId: string,
    isViewMode: boolean,
    isSaveMode: boolean
}

const SectorInstancePageBody: React.FC<ISectorInstancePageBodyProps> = ({ sectorInstance, processId, isViewMode, isSaveMode }: ISectorInstancePageBodyProps) => {
    const [resposibleTeamUserOptions, setResposibleTeamUserOptions] = useState<DropdownKeyPair[]>([]);
    const [resposibleTeamUser, setResposibleTeamUser] = useState<User>();
    const [resposibleUserOptions, setResposibleUserOptions] = useState<DropdownKeyPair[]>([]);
    const [resposibleUser, setResposibleUser] = useState<User>(null);
    const [sectorStatusOptions, setSectorStatusOptions] = useState<DropdownKeyPair[]>([]);
    const [sectorStatus, setSectorStatus] = useState<Status>(sectorInstance.status);

    const [loadingTeamUser, setLoadingTeamUser] = useState<boolean>(true);
    const [loadingUser, setLoadingUser] = useState<boolean>(true);

    const navigate = useNavigate();


    const getUserKeyPairs = (sectorId: string) => {
        getSectorById(sectorId).then(((sector: Sector) => {
            changeResposibleTeamUserKeyPair(sector.responsibleUsers)
            changeResposibleUserKeyPair(sector.committingUsers);
        }))
    }

    const changeResposibleTeamUserKeyPair = (responsibleTeamUsers: User[]) => {
        const data: DropdownKeyPair[] = responsibleTeamUsers.map((user: User) =>
            ({ value: user, displayName: user.fullname }));

        setResposibleTeamUserOptions(data);
        setResposibleTeamUser(responsibleTeamUsers.find(user => user.id === sectorInstance.responsiblePerson?.id));
        setLoadingTeamUser(false);

    }

    const changeResposibleUserKeyPair = (responsibleUsers: User[]) => {
        const data: DropdownKeyPair[] = responsibleUsers.map((user: User) =>
            ({ value: user, displayName: user.fullname }));

        setResposibleUserOptions(data);
        setResposibleUser(responsibleUsers.find(user => user.id === sectorInstance.commitingWorker?.id));
        setLoadingUser(false);

    }

    const getStatusKeyPair = () => {
        const data: DropdownKeyPair[] = (Object.values(Status)).map((status) =>
            ({ value: status, displayName: status }));
        setSectorStatusOptions(data);
    }

    const getEditUserComponent = (): ReactNode => {
        return resposibleUser ?
            <EditResponsibleUser resposibleUserOptions={resposibleUserOptions} resposibleUser={resposibleUser} setResposibleUser={setResposibleUser} disabled={isViewMode} />
            : resposibleTeamUserOptions && <EditResponsibleTeamUser resposibleTeamUserOptions={resposibleTeamUserOptions} resposibleTeamUser={resposibleTeamUser} setResposibleTeamUser={setResposibleTeamUser} disabled={isViewMode} />
    }

    const editSectorInstanceByRole = {
        [Role.Process_Executer]: {
            components: (): ReactNode => {
                return (
                    <div>
                        {getEditUserComponent()}
                        <EditSectorStatus sectorStatusOptions={sectorStatusOptions} sectorStatus={sectorStatus} setSectorStatus={setSectorStatus} disabled={isViewMode} />
                    </div>

                )
            },
            fetchData: (sectorId: string) => {
                getUserKeyPairs(sectorId);
                getStatusKeyPair();
            },
        },
        [Role.Admin]: {
            components: (): ReactNode => {
                return (
                    <div>
                        {getEditUserComponent()}
                        <EditSectorStatus sectorStatusOptions={sectorStatusOptions} sectorStatus={sectorStatus} setSectorStatus={setSectorStatus} disabled={isViewMode} />
                    </div>

                )
            },
            fetchData: (sectorId: string) => {
                getUserKeyPairs(sectorId);
                getStatusKeyPair();
            },
        },
        [Role.Worker]: {
            components: (): ReactNode => {
                return (
                    <div>
                        <EditSectorStatus sectorStatusOptions={sectorStatusOptions} sectorStatus={sectorStatus} setSectorStatus={setSectorStatus} disabled={isViewMode} />
                    </div>
                )
            },
            fetchData: () => {
                getStatusKeyPair();
            },
        }
    }

    useEffect(() => {
        setLoadingTeamUser(true);
        setLoadingUser(true);
        editSectorInstanceByRole[Role.Process_Executer].fetchData(sectorInstance.sectorId); //get from user context

    }, [])

    useEffect(() => {
        if (isSaveMode === true) {
            const body: UpdateSectorInstanceParams = {
                commitingWorkerId: resposibleUser?.id,
                responsiblePersonId: resposibleTeamUser?.id,
                status: sectorStatus
            }

            updateSectorInstance(processId, sectorInstance.instanceId, body).then(() => {
                enqueueSnackbar('הסקטור עודכן בהצלחה', { variant: 'success' })
                navigate(-1);
            }).catch(() => {
                enqueueSnackbar('כישלון בעדכון הסקטור', { variant: 'error' })
                navigate(-1);
            })
        }
    }, [isSaveMode])

    return (
        <>
            {loadingTeamUser && loadingUser ?
                <CircularProgress /> :
                editSectorInstanceByRole[Role.Process_Executer].components()
            }
        </>
    )
}

export default SectorInstancePageBody