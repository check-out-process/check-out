import React, { useState, useEffect } from 'react';
import { ProcessSector } from "../../../../services/models/ProcessSector";
import { useLocation } from 'react-router-dom';
import PageHeader from '../../Header/header.component';
import SectorInstancePageBody from './SectorInstancePageBody.component';
import { Button, createStyles, makeStyles } from '@material-ui/core';
import { enqueueSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import { updateSectorInstance } from '../../../../services/SectorInstance.service';

const useStyles = makeStyles(() =>
    createStyles({
        button: {
            marginTop: '20px'
        },
    }),
);

const SectorInstancePage: React.FC = () => {
    const classes = useStyles();
    const location = useLocation();
    const navigate = useNavigate();
    const [isViewMode, setIsViewMode] = useState<boolean>();

    const sector: ProcessSector = location.state.sector;
    const buttonText = isViewMode ? 'עריכה' : 'שמירה';

    useEffect(() => {
        setIsViewMode(location.state.isViewMode)
    }, [])

    const onClick = () => {
        if (isViewMode) {
            setIsViewMode(false);
        } else {
            //send correct put api req 
            updateSectorInstance().then(() => {
                enqueueSnackbar('הסקטור עודכן בהצלחה', { variant: 'success' })
                navigate(-1);
            }).catch(err => {
                enqueueSnackbar('כישלון בעדכון הסקטור', { variant: 'error' })
                navigate(-1);
            })
        }
    }

    return (
        <div>
            <PageHeader name={sector.name} isFirstPage={false} />
            <SectorInstancePageBody sector={sector} isViewMode={isViewMode} />
            <Button className={classes.button} variant="contained" color="primary" onClick={() => { onClick() }}>{buttonText}</Button>
        </div>
    )
}

export default SectorInstancePage