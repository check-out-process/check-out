import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Process } from '../../../services/models/Process';
import { Divider } from '@material-ui/core';
import { useStyles } from './ProcessCard.component.styles';
import {
    useNavigate
} from "react-router-dom";

export type ProcessCardProps = {
    process: Process
}

const ProcessCard: React.FC<ProcessCardProps> = ({ process }) => {
    const classes = useStyles();
    const navigate = useNavigate();

    const getColor = () => {
        switch (process.status) {
            case 'בתהליך':
                return '#87CEFA'
            case 'סיום':
                return '#90EE90'
        }
    }

    const navigateTo = () => navigate('/processes/sectors', {
        state: {
            processId: process.uuid,
        }
    });

    return (
        <div className={classes.root}>
            <Card className={classes.card} style={{ backgroundColor: getColor() }} onClick={navigateTo} >
                <CardContent className={classes.cardContent}>
                    <div className={classes.rightDescription}>
                        <Typography align='right' variant="subtitle1" component="div">
                            מחלקה: {process.departmentName}
                        </Typography>
                        <Typography align='right' variant="subtitle1" component="div">
                            חדר: {process.roomName}
                        </Typography>
                        <Typography align='right' variant="subtitle1" component="div">
                            מיטה: {process.bedName}
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
                        נוצר על ידי: {process.createdBy}
                    </Typography>
                    <Typography align='right' variant="subtitle1" component="div">
                        {process.createdAt}
                    </Typography>
                </CardActions>
            </Card>
        </div>
    );

}

export default ProcessCard