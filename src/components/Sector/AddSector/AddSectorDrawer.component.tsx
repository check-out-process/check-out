import React, { useState, useContext } from 'react';
import { Drawer, List, Divider, Typography, IconButton, Button, styled } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import './AddSectorDrawer.component.css';
import AddSectorCard from './AddSectorCard.component';
import { Sector } from '@checkout/types';
import { ProcessSectorsContext } from '../../../context/ProcessSectorsContext';

interface IAddSectorDrawerProps {
    open: boolean,
    handleDrawerClose: any,
}

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'flex-start',
}));

const AddSectorDrawer: React.FC<IAddSectorDrawerProps> = ({ open, handleDrawerClose }: IAddSectorDrawerProps) => {
    const { drawerSectors, addProcessSectors } = useContext(ProcessSectorsContext);
    const [choosenSectors, setChoosenSectors] = useState<Sector[]>([]);

    const handleAddSectorsToProcessSectors = () => {
        addProcessSectors(choosenSectors);
        setChoosenSectors([]);
        handleDrawerClose();
    };

    const addChoosenSector = (sector: Sector) => {
        setChoosenSectors(current => [...current, sector]);
    };

    const removeChoosenSector = (sector: Sector) => {
        setChoosenSectors((current) =>
            current.filter((currentSector) => currentSector.id !== sector.id)
        );
    };

    return (
        <Drawer
            className='addSectorDrawer'
            variant="persistent"
            anchor="right"
            open={open}
        >
            <DrawerHeader className='drawerHeader'>
                <IconButton onClick={handleDrawerClose}>
                    <ChevronRightIcon />
                </IconButton>
                <Typography component="div" variant="h5" style={{ fontSize: '17px' }}>
                    הוספת סקטורים
                </Typography>
            </DrawerHeader>
            <Divider />
            {drawerSectors.length > 0 &&
                <div>

                    <List className="sectorsList" style={{
                        width: '100%', counterReset: 'gradient-counter',
                    }}>
                        {drawerSectors.map((sector: Sector) => (
                            <AddSectorCard key ={sector.id} sector={sector} addChoosenSector={addChoosenSector} removeChoosenSector={removeChoosenSector}/>
                        ))}
                    </List>
                    <Button variant="outlined" style={{ color: 'black', width: '80px', alignSelf: 'center', backgroundColor: 'rgb(189 212 232)', borderColor: 'rgb(189 212 232)' }} onClick={handleAddSectorsToProcessSectors}>הוספה</Button>
                </div>}
        </Drawer >
    );
}

export default AddSectorDrawer