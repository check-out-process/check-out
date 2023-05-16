import React from 'react';
import { SectorInstane } from "../../../services/models/ProcessSector";
import BaseSectorCard from "../../Common/Sector/BaseSectorCard.component";
import {
    useNavigate
} from "react-router-dom";
interface IProcessSectorCardProps {
    sector: SectorInstane,
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