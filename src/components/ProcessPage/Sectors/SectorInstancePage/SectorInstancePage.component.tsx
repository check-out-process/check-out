import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PageHeader from '../../Header/header.component';
import SectorInstancePageBody from './SectorInstancePageBody.component';
import { Button, createStyles, makeStyles } from '@material-ui/core';
import { SectorInstance } from '@checkout/types';
import { Status } from "@checkout/types/dist/lib/enums/status.enum"
import { Colors } from '../../../../style/colors/color';

const useStyles = makeStyles(() =>
    createStyles({
        button: {
            marginTop: '20px',
            backgroundColor: Colors.buttonPrimaryBackgroundColor
        },
    }),
);

const SectorInstancePage: React.FC = () => {
    const classes = useStyles();
    const location = useLocation();
    const [isViewMode, setIsViewMode] = useState<boolean>();
    const [isSaveMode, setIsSaveMode] = useState<boolean>(false);
    const [iLoading, setIsLoading] = useState<boolean>(true);

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

    const isDisabled = () => {
        return sectorInstance.status === Status.Done;
    }

    return (
        <>
            <PageHeader name={sectorInstance.name} isFirstPage={false} />
            <SectorInstancePageBody sectorInstance={sectorInstance} processId={processId} isViewMode={isViewMode} isSaveMode={isSaveMode} iLoading={iLoading} setIsLoading={setIsLoading} />
            {!iLoading &&
                <Button disabled={isDisabled()} className={classes.button} variant="contained" color="primary" onClick={() => { onClick() }}>{buttonText}</Button>
            }
        </>
    )
}

export default SectorInstancePage