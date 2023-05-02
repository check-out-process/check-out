import React from 'react';
import { ProcessSector } from "../../../../services/models/ProcessSector";
import { useLocation } from 'react-router-dom';
import PageHeader from '../../Header/header.component';

const SectorInstancePage: React.FC = () => {
    const location = useLocation();
    const sector: ProcessSector = location.state.sector;

    return (
        <div>
            <PageHeader name={sector.name} isFirstPage={false} />
        </div>
    )
}

export default SectorInstancePage