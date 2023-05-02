import { IconButton, Typography } from "@material-ui/core";
import React from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useStyles } from './header.component.styles';
import { useNavigate } from "react-router-dom";

interface IPageHeaderProps {
    name: string,
    isFirstPage: boolean
}

const PageHeader: React.FC<IPageHeaderProps> = ({ name, isFirstPage }: IPageHeaderProps) => {
    const classes = useStyles();
    const navigate = useNavigate();

    return (
        <div className={classes.headerContainer}>
            <Typography align='center' variant="h5" component="h2" className={classes.headerText}>{name}</Typography>
            {!isFirstPage && <IconButton edge="start" onClick={() => navigate(-1)} color="inherit" className={classes.headerIcon}>
                <ArrowBackIcon />
            </IconButton>}
        </div>

    )
}

export default PageHeader