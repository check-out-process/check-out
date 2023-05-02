import { CircularProgress, IconButton, List, Typography } from "@material-ui/core";
import React, { useEffect, useState } from 'react';
import { ProcessSector } from "../../../../services/models/ProcessSector";
import { getProcessSectors } from "../../../../services/ProcessSector.service";
import { useLocation, useNavigate } from "react-router-dom";
import ProcessSectorCard from "./ProcessSectorCard.component";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() =>
    createStyles({
        headerContainer: {
            display: 'flex',
            justifyContent: 'center',
            marginTop: '12px'
        },
        headerText: {
            flex: 1
        },
        headerIcon: {
            padding: '0px',
            marginLeft: '12px'
        }
    }),
);

const ProcessSectorsList: React.FC = () => {
    const [processSectors, setProcessSectors] = useState<ProcessSector[]>();
    const [loading, setLoading] = useState<boolean>(false);

    const classes = useStyles();
    const navigate = useNavigate();
    const location = useLocation();
    const processId = location.state.processId;

    useEffect(() => {
        fetchDefaultSectors();
    }, [])

    const fetchDefaultSectors = () => {
        setLoading(true);
        getProcessSectors(processId).then((sectors: ProcessSector[]) => {
            setProcessSectors(sectors);
            setLoading(false);
        })
    }

    return (
        <div>
            <div className={classes.headerContainer}>
                <Typography align='center' variant="h5" component="h2" className={classes.headerText}>רשימת הסקטורים</Typography>
                <IconButton edge="start" onClick={() => navigate(-1)} color="inherit" className={classes.headerIcon}>
                    <ArrowBackIcon />
                </IconButton>
            </div>
            {loading ? <CircularProgress disableShrink /> : null}
            {processSectors?.length > 0 && <List style={{
                width: '100%',
            }}>
                {processSectors.map((sector: ProcessSector) => (
                    <ProcessSectorCard key={sector.id} sector={sector} />
                ))}
            </List>}
            {processSectors?.length == 0 && !loading ?
                <Typography align='center' variant="h5" component="h2">לא נמצאו סקטורים</Typography> : null}

        </div>
    )
}

export default ProcessSectorsList