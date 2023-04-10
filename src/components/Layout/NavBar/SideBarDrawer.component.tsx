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
import ListIcon from '@mui/icons-material/List';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import { useNavigate } from 'react-router-dom';
import { List } from '@material-ui/core';

export type SizeBarDrawerProps = {
    open: boolean,
    setOpen: (open: boolean) => void
}
type MenuOptionType = { title: string, route: string, icon: any }  


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
        route: '/home',
        icon: <HomeIcon/>

    },
    {
        title: 'יצירת תהליך',
        route: '/processcreation',
        icon: <AccountTreeIcon/>

    },
    {
        title: 'תהליכים',
        route: '/processes',
        icon: <ListIcon/>

    },
    {
        title: 'עמוד מנהלים',
        route: '/managment',
        icon: <AdminPanelSettingsIcon/>

    }
]

const SideBarDrawer: React.FC<SizeBarDrawerProps> = ({ open, setOpen }) => {
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
                    {menuOptions.map((option: MenuOptionType) => (
                        <ListItem button key={option.title} onClick={() => { onOptionClick(option.route) }}>
                            <ListItemText className={classes.title} primary={option.title} />
                            <ListItemIcon className={classes.iconTitle}>{option.icon}</ListItemIcon>
                        </ListItem>
                    ))}
                </List>
                <Divider />
            </Drawer>
        </div>
    );
}

export default SideBarDrawer; 