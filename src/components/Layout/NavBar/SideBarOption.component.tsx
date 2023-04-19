import React, { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { useNavigate } from 'react-router-dom';
import Collapse from "@material-ui/core/Collapse";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { MenuOptionType } from './SideBarDrawer.component';

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

export type SideBarOptionProps = {
    option: MenuOptionType,
    setOpen: (open: boolean) => void
}


const SideBarOption: React.FC<SideBarOptionProps> = ({ option , setOpen}) => {
    const classes = useStyles();
    const navigate = useNavigate();
    const [collapseOpen, setCollapseOpen] = useState(false);

    const onOptionClick = (option: MenuOptionType) => {
        if (option.route) {
            navigate(option.route);
        }
        if (option.items.length > 0) {
            setCollapseOpen((prev) => !prev);
        }else{
            setOpen(false)
        }
    }

    return (
        <div>
            <ListItem button key={option.title} onClick={() => {onOptionClick(option)}}>
                <ListItemText className={classes.title} primary={option.title} />
                <ListItemIcon className={classes.iconTitle}>{option.icon}</ListItemIcon>
                {option.items.length > 0 ?
                    collapseOpen ? <ExpandLessIcon /> : <ExpandMoreIcon /> : null}
            </ListItem>

            {option.items.map((children) => {
                return (
                    <div>
                        <Collapse in={collapseOpen} timeout="auto" unmountOnExit>
                            <ListItem button key={children.title} onClick={() => {onOptionClick(children)}}>
                                <ListItemText className={classes.title} primary={children.title} />
                                <ListItemIcon className={classes.iconTitle}>{children.icon}</ListItemIcon>
                            </ListItem>
                        </Collapse>
                    </div>
                )
            })}


        </div>
    );
}

export default SideBarOption; 