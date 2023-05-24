import React from 'react';
import { Card, CardContent, IconButton, Typography, createStyles, makeStyles, Theme } from "@material-ui/core";
import { SectorInstance, Sector } from '@checkout/types';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import './BaseSectorCard.component.css';
import { getColorByStatus } from '../../Common/helpers/helper';
interface IBaseSectorCardProps {
    sector: SectorInstance | Sector,
    withModal: Boolean,
    handleOpen?: () => void
}

export interface StyleProps {
    status: string;
}

const useStyles = makeStyles<Theme, StyleProps>(() =>
    createStyles({
        cardContainer: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            height: '48px'
        },
        CardContent: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            padding: '4px',
        },
        sectorName: {
            fontSize: '16px',
            marginRight: '15px'
        },
        ownerTitle: {
            fontSize: '12px',
            marginRight: '15px'
        },
        iconOfModal: {
            marginRight: 'auto',
            padding: '0px',
            marginLeft: '12px'
        },
        statusContainer: {
            backgroundColor: ({ status }) => getColorByStatus(status),
            height: '25px',
            borderRadius: '3px',
            marginLeft: '5px',
            display: 'flex',
            alignItems: 'center'
        },
        statusText: {
            margin: '5px',
            fontSize: '15px',
            fontFamily: 'Roboto, Helvetica, Arial, sans - serif'
        }
    }),
);

const BaseSectorCard: React.FC<IBaseSectorCardProps> = ({ sector, withModal, handleOpen }: IBaseSectorCardProps) => {
    const userTitle = 'responsiblePerson' in sector ? sector.responsiblePerson ?
        `אחראי: ${sector.responsiblePerson.fullname}` : `מטפל: ${sector.commitingWorker.fullname}` : ''
    const sectorstatus = 'status' in sector ? sector.status : '';
    const classes = useStyles({ status: sectorstatus });

    return (
        <Card className="cardSector" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin: '10px 20px 15px 10px' }}>
            <div className={classes.cardContainer}>
                <CardContent className={classes.CardContent}>
                    <Typography component="div" variant="h5" className={classes.sectorName} >
                        {sector.name}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary" component="div" className={classes.ownerTitle}>
                        {userTitle}
                    </Typography>
                </CardContent>
                {withModal &&
                    <IconButton className={classes.iconOfModal} aria-label="previous" onClick={handleOpen}>
                        <MoreHorizIcon />
                    </IconButton>}
                {sectorstatus &&
                    <div className={classes.statusContainer}>
                        <div className={classes.statusText}>
                            {`סטטוס:${sectorstatus}`}
                        </div>
                    </div>}
            </div>
        </Card>
    )
}

export default BaseSectorCard
