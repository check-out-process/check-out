import React, { useState } from 'react';
import PageHeader from '../Header/header.component';
import { Button, CircularProgress } from '@material-ui/core';
import { ProcessInstanceStatusReturnedParamsUI, SectorInstance } from '@checkout/types';
//import { UpdateSectorStatusParams, Status } from '@checkout/types';
import { useNavigate } from 'react-router-dom';
import { updateProcessStatus } from '../../../services/ProcessInstance.service';
import { enqueueSnackbar } from 'notistack';
import { Status } from '../../../services/models/Status';
import BaseModal from '../../Common/Modal/BaseModal.component';

interface IEditSectorStatusProps {
    processInstanceStatusRes: ProcessInstanceStatusReturnedParamsUI,
    bedId: string
}

const EditSectorStatus: React.FC<IEditSectorStatusProps> = ({ processInstanceStatusRes, bedId }: IEditSectorStatusProps) => {
    const navigate = useNavigate();
    const [isAnotherSectorEdit, setIsAnotherSectorEdit] = useState<boolean>(false);
    const [currentSectorInstance, setCurrentSectorInstance] = useState<SectorInstance>(processInstanceStatusRes.currentSectorInstance);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const onEndSector = () => {
        const body = {
            processInstanceId: processInstanceStatusRes.processInstanceId,
            sectorInstanceId: currentSectorInstance.instanceId,
            status: 'done'
        };
        setIsLoading(true);
        updateProcessStatus(bedId, body).then(() => {
            if (processInstanceStatusRes.sectorInstances.length > 0) {
                setIsAnotherSectorEdit(true);
            } else {
                navigate(-1);
            }
            setIsLoading(false);
        }).catch((err) => {
            enqueueSnackbar('עדכון סיום הסקטור נכשל', { variant: 'error' })
        })
    }



    const onAnswerAnotherSectorEdit = (confirm: boolean) => {
        if (confirm) {
            const sectorInstance = processInstanceStatusRes.sectorInstances[0];
            processInstanceStatusRes.sectorInstances = processInstanceStatusRes.sectorInstances.slice(1);

            setCurrentSectorInstance(sectorInstance);
            setIsAnotherSectorEdit(false);
        } else {
            navigate(-1);
        }
    }

    return (
        <>
            {isLoading ? <CircularProgress style={{ height: '100%'}}/> :
                <div style={{ height: '100%'}}>
                    <PageHeader name={currentSectorInstance.name} isFirstPage={false} />
                    <div style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            onClick={onEndSector}
                            style={{ width: '40%', height: '52px' }}
                        >
                            סיום סקטור
                        </Button>
                    </div>
                    {isAnotherSectorEdit ? <BaseModal open={isAnotherSectorEdit} setOpen={onAnswerAnotherSectorEdit} title='יש עוד סקטור בתהליך באחריותך האם תרצה לסמן סיום גם עליו?' /> : null}
                </div>
            }
        </>
    )
}

export default EditSectorStatus