import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './ProcessCard.component.styles';
import { ProcessInstance } from '@checkout/types';
import {
    useNavigate
} from "react-router-dom";
import { Divider } from '@material-ui/core';
import { formatDistance } from 'date-fns'
import { he } from 'date-fns/locale';
import { getColorByStatus } from '../Common/helpers/helper';
import CircularProgressSectorsBar from './CircularProgressbar/CircularProgressbar.component';

export type ProcessCardProps = {
    process: ProcessInstance
}

const ProcessCard: React.FC<ProcessCardProps> = ({ process }) => {
    const classes = useStyles();
    const navigate = useNavigate();

    const navigateTo = () => navigate(`/processes/${process.instanceId}`);

    return (
        <div className={classes.root}>
            <Card className={classes.card} style={{ backgroundColor: getColorByStatus(process.status) }} onClick={navigateTo} >
                <CardContent className={classes.cardContent}>
                    <div className={classes.rightDescription}>
                        <Typography align='right' variant="subtitle1" component="div">
                            מחלקה: {process.department.name}
                        </Typography>
                        <Typography align='right' variant="subtitle1" component="div">
                            חדר: {process.room.name}
                        </Typography>
                        <Typography align='right' variant="subtitle1" component="div">
                            מיטה: {process.bed.name}
                        </Typography>
                    </div>
                    <div className={classes.leftDescription}>
                        <Typography align='left' variant="subtitle1" component="div">
                            {formatDistance(new Date(process.createdAt), new Date(), { addSuffix: true, locale: he })}
                        </Typography>
                    </div>
                </CardContent>
                <div className={classes.devider}>
                    <Divider />
                </div>
                <CircularProgressSectorsBar sectorInstances={process.sectorInstances} />
            </Card>
        </div>
    );

}

export default ProcessCard