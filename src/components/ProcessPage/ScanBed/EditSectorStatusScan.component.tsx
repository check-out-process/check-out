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
import { createStyles, makeStyles } from "@material-ui/core";

interface IEditSectorStatusProps {
    processInstanceStatusRes: ProcessInstanceStatusReturnedParamsUI,
    bedId: string
}

const useStyles = makeStyles(() =>
    createStyles({
        circularProgress: {
            height: '100%'
        },
        endSectorButtonContainer: {
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        endSectorButton: {
            width: '40%', 
            height: '52px'
        },
        editSectorStatusContainer: {
            height: '100%'
        }
    }),
);

const EditSectorStatusScan: React.FC<IEditSectorStatusProps> = ({ processInstanceStatusRes, bedId }: IEditSectorStatusProps) => {
    const navigate = useNavigate();
    const [isAnotherSectorEdit, setIsAnotherSectorEdit] = useState<boolean>(false);
    const [currentSectorInstance, setCurrentSectorInstance] = useState<SectorInstance>(processInstanceStatusRes.currentSectorInstance);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const classes = useStyles();

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
            {isLoading ? <CircularProgress className={classes.circularProgress}/> :
                <div className={classes.editSectorStatusContainer}>
                    <PageHeader name={currentSectorInstance.name} isFirstPage={false} />
                    <div className={classes.endSectorButtonContainer}>
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            onClick={onEndSector}
                            className={classes.endSectorButton}
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

export default EditSectorStatusScan