import React from 'react';
import { ProcessSector } from "../../../services/models/ProcessSector";
import BaseSectorCard from "../../Common/Sector/BaseSectorCard.component";
import {
    useNavigate
} from "react-router-dom";
interface IProcessSectorCardProps {
    sector: ProcessSector,
    processId: string
}

const ProcessSectorCard: React.FC<IProcessSectorCardProps> = ({ sector, processId }: IProcessSectorCardProps) => {
    const navigate = useNavigate();

    const navigateTo = () => navigate(`/processes/${processId}/sectors/${sector.id}`, {
        state: {
            sector,
        }
    });
    
    return (
        <div onClick={navigateTo}>
            <BaseSectorCard sector={sector} withModal={false}/>
        </div>
    )
}

export default ProcessSectorCard