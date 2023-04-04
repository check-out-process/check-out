import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Process } from '../../../services/models/Process';
import { Divider } from '@material-ui/core';

export type ProcessCardProps = {
    process: Process
}

const ProcessCard: React.FC<ProcessCardProps> = ({ process }) => {
    const getColor = () => {
        switch (process.status) {
            case 'בתהליך':
                return '#87CEFA'
            case 'סיום':
                return '#90EE90'
        }
    }

    return (
        <div>
            <Card style={{ backgroundColor: getColor() }}>
                <CardContent style={{ height: '65px', display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ width: '50%', marginTop: '-10px' }}>
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
                    <Divider orientation="vertical" flexItem />
                    <div style={{ width: '50%', marginRight: '15px', marginTop: '-10px' }}>
                        <Typography align='right' variant="subtitle1" component="div">
                            מצב: {process.status}
                        </Typography>
                    </div>

                </CardContent>
                <div style={{ marginTop: '1px' }}>
                    <Divider />
                </div>
                <CardActions style={{ justifyContent: 'space-between' }}>

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