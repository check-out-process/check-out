import React, { useEffect, useState } from 'react';
import ScanData from '../ScanBarcode/ScanData.component';
import { useNavigate } from 'react-router-dom';
import { getProcessStatusByBedId } from '../../../services/ProcessInstance.service';
import { enqueueSnackbar } from 'notistack';
import EditSectorStatusScan from './EditSectorStatusScan.component';
import { CircularProgress } from '@material-ui/core';
import { createStyles, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() =>
    createStyles({
        scanBedPageContainer: {
            height: '100%'
        }
    }),
);

const ScanBedPage: React.FC = () => {
    const [isScanMode, setIsScanMode] = useState(true);
    const [processInstanceStatusRes, setProcessInstanceStatusRes] = useState();
    const [bedId, setBedId] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const navigate = useNavigate();
    const classes = useStyles();

    useEffect(() => {
        if (isScanMode === false) {
            navigate(-1)
        }
    }, [isScanMode]);

    useEffect(() => {
        if (bedId !== '') {
            setIsLoading(true)
            getProcessStatusByBedId(bedId).then(async (res) => {
                setIsLoading(false)
                setProcessInstanceStatusRes(res);
                setBedId(bedId);
            }).catch(() => {
                enqueueSnackbar('סריקת המיטה נכשלה', { variant: 'error' })
            });
        }
    }, [bedId])

    return (
        <>
            {isLoading ? <CircularProgress /> :
                <div className={classes.scanBedPageContainer}>
                    {processInstanceStatusRes ? <EditSectorStatusScan processInstanceStatusRes={processInstanceStatusRes} bedId={bedId} /> :
                        <ScanData setIsScanMode={setIsScanMode} setData={setBedId} />}
                </div>
            }
        </>
    )
}

export default ScanBedPage