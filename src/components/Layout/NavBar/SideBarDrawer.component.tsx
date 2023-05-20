import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import { List } from '@material-ui/core';
import ListIcon from '@mui/icons-material/List';


import Collapse from "@material-ui/core/Collapse";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SideBarOption from './SideBarOption.component';

import { logout } from '../../../services/Auth.service';
import { User } from '../../../services/models/User';
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
    onClick?: () => void, 
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
    }
]

const SideBarDrawer: React.FC<SizeBarDrawerProps> = ({ open, setOpen, user }) => {
    const classes = useStyles();
    const navigate = useNavigate();

    const onOptionClick = (route: string) => {
        navigate(route);
        setOpen(false)
    }

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
                        <SideBarOption key={index} option={option} setOpen={setOpen}/>
                    ))}
{/* 
{menuOptions.map((option: MenuOptionType) => (
                        !option.premmitedUserRole || option.premmitedUserRole && option.premmitedUserRole.includes(user.role.name) ?
                            < ListItem button key={option.title} onClick={option.route ? () => { onOptionClick(option.route) } : () => { option.onClick() }} >
                                <ListItemText className={classes.title} primary={option.title} />
                                <ListItemIcon className={classes.iconTitle}>{option.icon}</ListItemIcon>
                            </ListItem> : <></>
                    ))} */}

                </List>
                <Divider />
            </Drawer >
        </div >
    );
}

export default SideBarDrawer; 