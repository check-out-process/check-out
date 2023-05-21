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
import { logout } from '../../../services/Auth.service';
import { User } from '../../../services/models/User';
import { Role } from '../../../services/models/User';

export type SizeBarDrawerProps = {
    open: boolean,
    setOpen: (open: boolean) => void,
    user: User
}
type MenuOptionType = { title: string, route?: string, icon: any, isLogOut?: boolean, premmitedUserRole?: string[] }


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

    },
    {
        title: 'יצירת תהליך',
        route: '/processcreation',
        icon: <AccountTreeIcon />,
        premmitedUserRole: [Role.Admin, Role.Process_Executer]

    },
    {
        title: 'עמוד מנהלים',
        route: '/managment',
        icon: <AdminPanelSettingsIcon />,
        premmitedUserRole: [Role.Admin]

    },
    {
        title: 'התנתקות',
        route: '/',
        isLogOut: true,
        icon: <LogoutIcon />

    }
]

const SideBarDrawer: React.FC<SizeBarDrawerProps> = ({ open, setOpen, user }) => {
    const classes = useStyles();
    const navigate = useNavigate();

    const onOptionClick = (route: string) => {
        navigate(route);
        setOpen(false)
    }

    const onLogOut = (route: string) => {
        logout()
        onOptionClick(route);
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
                    {menuOptions.map((option: MenuOptionType) => (
                        !option.premmitedUserRole || option.premmitedUserRole && option.premmitedUserRole.includes(user.role.name) ?
                            < ListItem button key={option.title} 
                            onClick={ option.isLogOut ? 
                            () => { onLogOut(option.route) } : 
                            () => { onOptionClick(option.route) }} >
                                <ListItemText className={classes.title} primary={option.title} />
                                <ListItemIcon className={classes.iconTitle}>{option.icon}</ListItemIcon>
                            </ListItem> : <></>
                    ))}
                </List>
                <Divider />
            </Drawer >
        </div >
    );
}

export default SideBarDrawer; 