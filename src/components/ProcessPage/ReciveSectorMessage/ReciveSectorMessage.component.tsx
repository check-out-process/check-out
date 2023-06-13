import React, { useEffect, useState } from 'react';
import ScanData from '../ScanBarcode/ScanData.component';
import { useNavigate, useParams } from 'react-router-dom';
import { getProcessSectorInstances, getProcessStatusByBedId, getUserProcessInstance } from '../../../services/ProcessInstance.service';
import { enqueueSnackbar } from 'notistack';
import { CircularProgress, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from "@material-ui/core";
import { updateSectorInstanceReciveMessage } from '../../../services/SectorInstance.service';
import check from '../../../style/images/check.png';
import uncheck from '../../../style/images/uncheck.png';
import { ProcessInstance, SectorInstance } from '@checkout/types';

const useStyles = makeStyles(() =>
    createStyles({
        systemLogo: {
            width: '200px',
            height: '200px'
        }
    }),
);

const ReciveSectorMessage: React.FC = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [hasError, setHasError] = useState<boolean>(false);
    const [sector, setSector] = useState<SectorInstance>();
    const [process, setProcess] = useState<ProcessInstance>();
    const classes = useStyles();
    const { processId, sectorId } = useParams();

    useEffect(() => {
        setIsLoading(true);
        fetchProcess()
        fetchSectorInstance()
        notifySectorReciveMessage()
    }, [])

    const fetchProcess = () => {
        getUserProcessInstance(processId).then((process: ProcessInstance) => {
            setProcess(process)
        }).catch((err: any) => {
            enqueueSnackbar('קיים תהליך פתוח למיטה שנבחרה', { variant: 'error' })
            setHasError(true)
            setIsLoading(false);
        })
    }

    const fetchSectorInstance = () => {
        getProcessSectorInstances(processId).then((sectorInstances: SectorInstance[]) => {
            const currentSector: SectorInstance = sectorInstances.find(sector => sector.instanceId === sectorId)
            setSector(currentSector)
        }).catch((err: any) => {
            enqueueSnackbar('קיים תהליך פתוח למיטה שנבחרה', { variant: 'error' })
            setHasError(true)
            setIsLoading(false);
        })
    }

    const notifySectorReciveMessage = () => {

        updateSectorInstanceReciveMessage(sectorId, processId).then(res => {
            setIsLoading(false);
        }).catch((err: any) => {
            if (err.response.status !== 409) {
                enqueueSnackbar('קיים תהליך פתוח למיטה שנבחרה', { variant: 'error' })
                setHasError(true)
            } else {
                setHasError(false)
            }
            setIsLoading(false);
        })
    }

    return (
        <>
            {isLoading ? <CircularProgress style={{ marginTop: '20%' }} disableShrink /> :
                <>
                    {sector && <Typography style={{ marginTop: '10px' }} align='center' variant="h5" component="h2">סקטור {sector!.name}</Typography>}
                    {!isLoading && !hasError ?
                        <>
                            {sector && process && <div style={{ marginTop: '8%' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <img className={classes.systemLogo} src={check} alt='' />
                                    <div style={{ width:'80%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '6px' }}>
                                    <div>
                                        <Typography align='right' variant="h5" component="h2">הודעה התקבלה בהצלחה</Typography>
                                        <Typography align='right' variant="h5" component="h2">מבצע: {sector.commitingWorker?.fullname}</Typography>
                                        <Typography align='right' variant="h5" component="h2">מחלקה: {process.department.name}</Typography>
                                        <Typography align='right' variant="h5" component="h2">חדר: {process.room.name}</Typography>
                                        <Typography align='right' variant="h5" component="h2">מיטה: {process.bed.name}</Typography>
                                    </div>
                                </div>
                                </div>
                                
                            </div>}
                        </> :
                        <div style={{ marginTop: '25%' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <img className={classes.systemLogo} src={uncheck} alt='' />
                            </div>
                            <Typography align='center' variant="h5" component="h2">קרתה תקלה , אנא נסה שוב</Typography>
                        </div>
                    }
                </>}
        </>
    )
}

export default ReciveSectorMessage