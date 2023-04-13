import React from 'react';
import { ProcessSector } from "../../../../services/models/ProcessSector";
import BaseSectorCard from "../../../Common/Sector/BaseSectorCard.component";

interface IProcessSectorCardProps {
    sector: ProcessSector,
}

const ProcessSectorCard: React.FC<IProcessSectorCardProps> = ({ sector }: IProcessSectorCardProps) => {
    return (
        <div>
            <BaseSectorCard sector={sector} withModal={false} handleOpen={() => {}} />
        </div>
    )
}

export default ProcessSectorCard