import React from 'react';
import { ProcessSector } from "../../../../services/models/ProcessSector";
import { useLocation } from 'react-router-dom';
import PageHeader from '../../Header/header.component';
import SectorInstancePageBody from './SectorInstancePageBody.component';
import { Button } from '@material-ui/core';

const SectorInstancePage: React.FC = () => {
    const location = useLocation();
    const sector: ProcessSector = location.state.sector;

    const onSave =  () => {
    }
    
    return (
        <div>
            <PageHeader name={sector.name} isFirstPage={false} />
            <SectorInstancePageBody sector={sector}/>
            <Button variant="contained" color="primary" onClick={() => { onSave() }}>שמור</Button>
        </div>
    )
}

export default SectorInstancePage