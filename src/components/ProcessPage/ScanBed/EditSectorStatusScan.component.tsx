import React, { useState } from 'react';
import PageHeader from '../Header/header.component';
import { Button, CircularProgress, IconButton } from '@material-ui/core';
import { ProcessInstanceStatusReturnedParamsUI, SectorInstance, UpdateSectorStatusParams } from '@checkout/types';
import { useNavigate } from 'react-router-dom';
import { updateProcessStatus } from '../../../services/ProcessInstance.service';
import { enqueueSnackbar } from 'notistack';
import { Status } from "@checkout/types/dist/lib/enums/status.enum"
import BaseModal from '../../Common/Modal/BaseModal.component';
import { createStyles, makeStyles } from "@material-ui/core";
import ListAltIcon from '@mui/icons-material/ListAlt';
import { Colors } from '../../../style/colors/color';
import tapHereIcon from '../../../style/images/taphere.png'
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
            height: '90%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
        },
        endSectorButton: {
            width: '42%',
            height: '58px',
            backgroundColor: Colors.buttonPrimaryBackgroundColor,
            fontSize: '16px',
            borderRadius: '31px'
        },
        editSectorStatusContainer: {
            height: '100%'
        },
        noSectorsTextContainer: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            flexDirection: 'column'
        },
        noSectorsIcon: {
            padding: '0',
        },
        noSectorsTitle: {
            fontSize: '22px',
            margin: '0'
        },
        noSectorsSubTitle: {
            margin: '0',
            marginTop: '5px'

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
        const body: UpdateSectorStatusParams = {
            processInstanceId: processInstanceStatusRes.processInstanceId,
            sectorInstanceId: currentSectorInstance.instanceId,
            status: Status.Done
        };
        setIsLoading(true);
        updateProcessStatus(bedId, body).then(() => {
            if (processInstanceStatusRes.sectorInstances.length > 0) {
                setIsAnotherSectorEdit(true);
            } else {
                enqueueSnackbar('עדכון סיום הסקטור הצליח', { variant: 'success' })
                navigate('/');
            }
            setIsLoading(false);
        }).catch((err) => {
            enqueueSnackbar('עדכון סיום הסקטור נכשל', { variant: 'error' })
            navigate('/');
        })
    }



    const onAnswerAnotherSectorEdit = (confirm: boolean) => {
        if (confirm) {
            const sectorInstance = processInstanceStatusRes.sectorInstances[0];
            processInstanceStatusRes.sectorInstances = processInstanceStatusRes.sectorInstances.slice(1);

            setCurrentSectorInstance(sectorInstance);
            setIsAnotherSectorEdit(false);
        } else {
            enqueueSnackbar('עדכון סיום הסקטור הצליח', { variant: 'success' })
            navigate('/');
        }
    }

    return (
        <>
            {isLoading ? <CircularProgress className={classes.circularProgress} /> :

                currentSectorInstance ? <div className={classes.editSectorStatusContainer}>
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
                        <img src={tapHereIcon} alt="Logo" style={{height: '55px',width: '55px',marginLeft: '148px',marginTop: '-23px',zIndex: 1}}/>
                    </div>
                    {isAnotherSectorEdit ? <BaseModal open={isAnotherSectorEdit} setOpen={onAnswerAnotherSectorEdit} title='יש עוד סקטור בתהליך באחריותך האם תרצה לסמן סיום גם עליו?' /> : null}
                </div> :
                    <div className={classes.noSectorsTextContainer}>
                        <IconButton className={classes.noSectorsIcon}>
                            <ListAltIcon style={{
                                height: '100px',
                                width: '100px'
                            }} />
                        </IconButton>
                        <p className={classes.noSectorsTitle}>
                            אין סקטורים להצגה
                        </p>
                        <p className={classes.noSectorsSubTitle}>
                            אין באחריותך סקטורים לטיפול או שכל הסקטורים טופלו
                        </p>
                    </div>
            }
        </> 
    )
}

export default EditSectorStatusScan