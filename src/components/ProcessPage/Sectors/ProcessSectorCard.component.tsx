import React from 'react';
import BaseSectorCard from "../../Common1/Sector/BaseSectorCard.component";
import { SectorInstance } from '@checkout/types';
import {
    useNavigate
} from "react-router-dom";
interface IProcessSectorCardProps {
    sector: SectorInstance,
    processId: string
}

const ProcessSectorCard: React.FC<IProcessSectorCardProps> = ({ sector, processId }: IProcessSectorCardProps) => {
    const navigate = useNavigate();

    const navigateTo = () => navigate(`/processes/${processId}/sectors/${sector.sectorId}`, {
        state: {
            sector,
            processId,
            isViewMode: true
        }
    });
    
    return (
        <div onClick={navigateTo}>
            <BaseSectorCard sector={sector} withModal={false}/>
        </div>
    )
}

export default ProcessSectorCard