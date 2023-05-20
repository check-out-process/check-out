import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PageHeader from '../../Header/header.component';
import SectorInstancePageBody from './SectorInstancePageBody.component';
import { Button, createStyles, makeStyles } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { SectorInstance } from '@checkout/types';

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
    const [isSaveMode, setIsSaveMode] = useState<boolean>(false);

    const sectorInstance: SectorInstance = location.state.sector;
    const processId: string = location.state.processId;
    const buttonText = isViewMode ? 'עריכה' : 'שמירה';

    useEffect(() => {
        setIsViewMode(location.state.isViewMode)
    }, [])

    const onClick = () => {
        if (isViewMode) {
            setIsViewMode(false);
        } else {
            setIsSaveMode(true);
        }
    }

    return (
        <div>
            <PageHeader name={sectorInstance.name} isFirstPage={false} />
            <SectorInstancePageBody sectorInstance={sectorInstance} processId={processId} isViewMode={isViewMode} isSaveMode={isSaveMode}/>
            <Button className={classes.button} variant="contained" color="primary" onClick={() => { onClick() }}>{buttonText}</Button>
        </div>
    )
}

export default SectorInstancePage