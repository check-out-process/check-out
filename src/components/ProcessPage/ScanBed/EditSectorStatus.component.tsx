import React from 'react';
import PageHeader from '../Header/header.component';
import { Button } from '@material-ui/core';
import { ProcessInstanceStatusReturnedParams } from '@checkout/types';
import { useNavigate } from 'react-router-dom';

interface IEditSectorStatusProps {
    processInstanceStatusRes: ProcessInstanceStatusReturnedParams
}

const EditSectorStatus: React.FC<IEditSectorStatusProps> = ({ processInstanceStatusRes }: IEditSectorStatusProps) => {
    const navigate = useNavigate();

    const onEndSector = () => {
        //edit and when have more change sector
        navigate(-1);
    }

    return (
        <div style={{height:'100%'}}>
            <PageHeader name={processInstanceStatusRes.currentSectorInstance.name} isFirstPage={false} />
            <div style={{height:'100%', display:'flex', justifyContent:'center', alignItems: 'ceneter'}}>
            <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={onEndSector}
                style={{width: '40%',height: '11%'}}
            >
                סיום סקטור
            </Button>
            </div>
        </div>
    )
}

export default EditSectorStatus