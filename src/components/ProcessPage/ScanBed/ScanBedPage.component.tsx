import React, { useEffect, useState } from 'react';
import ScanData from '../ScanBarcode/ScanData.component';
import { useNavigate } from 'react-router-dom';
import { getProcessStatusByBedId } from '../../../services/ProcessInstance.service';
import { enqueueSnackbar } from 'notistack';
import EditSectorStatus from './EditSectorStatus.component';

const ScanBedPage: React.FC = () => {
    const [isScanMode, setIsScanMode] = useState(true);
    const [isEditStatusMode, setIsEditStatusMode] = useState(false);
    const [processInstanceStatusRes, setProcessInstanceStatusRes] = useState();
    const [bedId, setBedId] = useState<string>('');
    const navigate = useNavigate();

    useEffect(() => {
        if (isScanMode === false) {
            navigate(-1)
        }
    }, [isScanMode])

    useEffect(() => {
        if (bedId !== '') {
            getProcessStatusByBedId(bedId).then((res) => {
                setProcessInstanceStatusRes(res);
            }).catch((err) => {
                enqueueSnackbar('סריקת המיטה נכשלה', { variant: 'error' })
            });
        }
    }, [bedId])

    return (
        <div style={{height:'100%'}}>
            {processInstanceStatusRes ? <EditSectorStatus processInstanceStatusRes={processInstanceStatusRes} /> : <ScanData setIsScanMode={setIsScanMode} setData={setBedId} />}
        </div>
    )
}

export default ScanBedPage