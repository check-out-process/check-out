import * as React from 'react';
import { Drawer, List, Divider, Typography, IconButton, Button, styled } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import './AddSectorDrawer.component.css';
import AddSectorCard from './AddSectorCard.component';
import { Sector } from '../../../services/models/Sector';

interface IAddSectorDrawerProps {
    open: boolean,
    handleDrawerClose: any,
    sectorsData: Sector[],
    addProcessSector: any,
}

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'flex-start',
}));

const AddSectorDrawer: React.FC<IAddSectorDrawerProps> = ({ open, handleDrawerClose, sectorsData, addProcessSector }: IAddSectorDrawerProps) => {

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
            <List className="sectorsList" style={{
                width: '100%', counterReset: 'gradient-counter',
            }}>
                {sectorsData.map((sector: Sector) => (
                    <AddSectorCard sector={sector} addProcessSector={addProcessSector} />
                ))}
            </List>
            <Button variant="outlined" style={{ alignSelf: 'center' }}>הוסף</Button>
        </Drawer>
    );
}

export default AddSectorDrawer