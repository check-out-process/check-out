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
import { Status } from "../../services/models/Status";
import { formatDistance } from 'date-fns'
import { he } from 'date-fns/locale';

export type ProcessCardProps = {
    process: ProcessInstance
}

const ProcessCard: React.FC<ProcessCardProps> = ({ process }) => {
    const classes = useStyles();
    const navigate = useNavigate();

    //change by status and fix to string when fix status bug
    const getColor = () => {
        switch (process.status.toString()) {
            case Status.In_Progress:
                return '#87CEFA'
            case Status.Done:
                return '#90EE90'
        }
    }

    const navigateTo = () => navigate(`/processes/${process.instanceId}/sectors`, {
        state: {
            processId: process.instanceId,
        }
    });

    return (
        <div className={classes.root}>
            <Card className={classes.card} style={{ backgroundColor: getColor() }} onClick={navigateTo} >
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
                            מצב: {process.status}
                        </Typography>
                    </div>
                </CardContent>
                <div className={classes.devider}>
                    <Divider />
                </div>
                <CardActions className={classes.cardActions}>
                    <Typography align='right' variant="subtitle1" component="div">
                        נוצר על ידי: {process.creator.fullname}
                    </Typography>
                    <Typography align='right' variant="subtitle1" component="div">
                        {formatDistance(new Date(process.createdAt), new Date(), { addSuffix: true, locale: he })}
                    </Typography>
                </CardActions>
            </Card>
        </div>
    );

}

export default ProcessCard