import { Card, CardContent, Typography } from "@material-ui/core";
import React from 'react';
import { Sector } from "../../../services/models/Sector";


interface IAddSectorCardProps {
    sector: Sector, 
    addProcessSector: any
}
const AddSectorCard: React.FC<IAddSectorCardProps> = ({ sector, addProcessSector }: IAddSectorCardProps) => {

    const addSectorToProcessSectors = () => {
        addProcessSector(sector);
    };
    return (
        <div>
            <Card className="addCardSector" onClick={addSectorToProcessSectors} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin: '10px 15px 20px 15px', height: '45px' }}>
                <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '0px' }}>
                    <Typography component="div" variant="h5" style={{ fontSize: '16px', marginRight: '15px' }}>
                        {sector.name}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default AddSectorCard