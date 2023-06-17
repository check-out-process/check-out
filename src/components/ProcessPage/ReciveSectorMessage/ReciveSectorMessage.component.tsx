import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProcessSectorInstances, getUserProcessInstance } from '../../../services/ProcessInstance.service';
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
            width: '180px',
            height: '180px'
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
            enqueueSnackbar('קרתת שגיאה במהלך שליפת התהליך', { variant: 'error' })
            setHasError(true)
            setIsLoading(false);
        })
    }

    const fetchSectorInstance = () => {
        getProcessSectorInstances(processId).then((sectorInstances: SectorInstance[]) => {
            const currentSector: SectorInstance = sectorInstances.find(sector => sector.instanceId === sectorId)
            setSector(currentSector)
        }).catch((err: any) => {
            enqueueSnackbar('קרתה שגיאה במהלך שליפת הסקטור', { variant: 'error' })
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
                    {!isLoading && !hasError ?
                        <>
                            {sector && process &&
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height:'100%', justifyContent: 'center'}}>
                                        <img className={classes.systemLogo} src={check} alt='' />
                                        <div style={{ width: '80%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '6px' }}>
                                                <Typography align='right' variant="h5" component="h2" style={{fontWeight:'600'}}>ההודעה התקבלה בהצלחה</Typography>
                                                <Typography align='right' variant="h5" component="h2" style={{fontSize: '20px'}}>נשלחה הודעה לסיום הסקטור</Typography>
                                        </div>
                                    </div>}
                        </> :
                        <div style={{ marginTop: '8%' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <img className={classes.systemLogo} src={uncheck} alt='' />
                            </div>
                            <Typography align='center' variant="h5" component="h2">קרתה תקלה , אנא נסה שוב לרענן את העמוד</Typography>
                        </div>
                    }
                </>}
        </>
    )
}

export default ReciveSectorMessage