import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import HomeIcon from '@mui/icons-material/Home';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import { List } from '@material-ui/core';
import ListIcon from '@mui/icons-material/List';
import SideBarOption from './SideBarOption.component';
import { User } from '@checkout/types';
import { Role } from '../../../services/models/User';

export type SizeBarDrawerProps = {
    open: boolean,
    setOpen: (open: boolean) => void,
    user: User
}

export type MenuOptionType = {
    title: string;
    route?: string;
    icon: any;
    items: MenuOptionType[],
    isLogOut?: boolean,
    premmitedUserRole?: string[]
}


const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        title: {
            flexGrow: 1,
            textAlign: 'right'
        },
        iconTitle: {
            justifyContent: 'flex-end'
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            width: drawerWidth,
            backgroundColor: '#ECF0F1'
        },
        drawerHeader: {
            display: 'flex',
            alignItems: 'center',
            padding: theme.spacing(0, 1),
            // necessary for content to be below app bar
            ...theme.mixins.toolbar,
            justifyContent: 'flex-start',
        }
    }),
);

const menuOptions: MenuOptionType[] = [
    {
        title: 'עמוד ראשי',
        route: '/',
        icon: <HomeIcon />,
        items: []

    },
    {
        title: 'יצירת תהליך',
        route: '/processcreation',
        icon: <AccountTreeIcon />,
        items: [],
        premmitedUserRole: [Role.Admin, Role.Process_Executer]
    },
    {
        title: 'עמוד מנהלים',
        icon: <AdminPanelSettingsIcon />,
        premmitedUserRole: [Role.Admin],
        items: [
            {
                title: 'הוספת מחלקה',
                route: '/managment/department-creation',
                icon: <ListIcon />,
                items: []
            },
            {
                title: 'הוספת חדר',
                route: '/managment/room-creation',
                icon: <ListIcon />,
                items: []
            },
            {
                title: 'ניהול יוזרים',
                route: '/managment/users',
                icon: <ListIcon />,
                items: []
            }
        ]
    },
    {
        title: 'התנתקות',
        route: '/',
        isLogOut: true,
         items: [],
        icon: <LogoutIcon />
    }
]

const SideBarDrawer: React.FC<SizeBarDrawerProps> = ({ open, setOpen, user }) => {
    const classes = useStyles();

    return (
        <div>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="right"
                open={open}
                classes={{ paper: classes.drawerPaper }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={() => setOpen(false)}>
                        <ChevronRightIcon />
                    </IconButton>
                </div>
                <Divider />
                <List>
                    {menuOptions.map((option: MenuOptionType, index: number) => (
                        !option.premmitedUserRole || option.premmitedUserRole && option.premmitedUserRole.includes(user.role.name) ?
                        <SideBarOption key={index} option={option} setOpen={setOpen} /> : <></>
                    ))}

                </List>
                <Divider />
            </Drawer >
        </div >
    );
}

export default SideBarDrawer; 