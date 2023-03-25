import * as React from 'react';
import { styled } from '@material-ui/core/styles';
import Drawer from '@mui/material/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import './AddSectorDrawer.component.css';

interface IAddSectorDrawerProps {
    open: boolean,
    handleDrawerClose: any
}

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'flex-start',
}));

const AddSectorDrawer: React.FC<IAddSectorDrawerProps> = ({ open, handleDrawerClose }: IAddSectorDrawerProps) => {
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
            </DrawerHeader>
            <Divider />
        </Drawer>
    );
}

export default AddSectorDrawer