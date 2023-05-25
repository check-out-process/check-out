import React, { useEffect, useState } from 'react';
import { Button, CircularProgress, Divider, IconButton, Paper, Theme, Typography, createStyles, makeStyles } from '@material-ui/core';
import { getUserProcessInstance } from '../../services/ProcessInstance.service';
import { ProcessInstance } from '@checkout/types';
import { useNavigate, useParams } from 'react-router-dom';
import UserLogo from '../../style/images/hospital-bed.png';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { he } from 'date-fns/locale';
import { formatDistance } from 'date-fns'


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        systemLogo: {
            width: '170px',
            height: '120px'
        }
    }),
);
const marginTop: string = '5px'

const ProcessPage = () => {
    const { processId } = useParams();
    const classes = useStyles();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState<boolean>(false)


    const [process, setProcess] = useState<ProcessInstance>();

    useEffect(() => {
        setIsLoading(true)
        getUserProcessInstance(processId).then((process: ProcessInstance) => {
            setProcess(process)
            setIsLoading(false)
        })
    }, [])

    const onBackClick = () => {
        navigate(-1)
    }

    const onSectorsPageClick = () => navigate(`/processes/${process.instanceId}/sectors`, {
        state: {
            processId: process.instanceId,
        }
    });

    return (
        <div>
            {isLoading ?
                <CircularProgress style={{ marginTop: '50%' }} disableShrink /> :
                <div>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <IconButton onClick={onBackClick}>
                            <ArrowForwardIcon />
                        </IconButton>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img className={classes.systemLogo} src={UserLogo} alt='' />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
                        <Paper elevation={3} style={{ width: '95%', borderRadius: '20px' }}>
                            <Typography style={{ marginRight: '15px', marginTop: marginTop }} align='right' variant="subtitle1" component="div">
                                מחלקה: {process?.department.name}
                            </Typography>
                            <Divider variant="middle" style={{ marginTop: marginTop }} />

                            <Typography style={{ marginRight: '15px', marginTop: marginTop }} align='right' variant="subtitle1" component="div">
                                חדר: {process?.room.name}
                            </Typography>
                            <Divider variant="middle" style={{ marginTop: marginTop }} />

                            <Typography style={{ marginRight: '15px', marginTop: marginTop }} align='right' variant="subtitle1" component="div">
                                מיטה: {process?.bed.name}
                            </Typography>
                            <Divider variant="middle" style={{ marginTop: marginTop }} />
                            <Typography style={{ marginRight: '15px', marginTop: marginTop }} align='right' variant="subtitle1" component="div">
                                מצב: {process?.status}
                            </Typography>
                            <Divider variant="middle" style={{ marginTop: marginTop }} />
                            <Typography style={{ marginRight: '15px', marginTop: marginTop }} align='right' variant="subtitle1" component="div">
                                נוצר על ידי: {process?.creator.fullname}
                            </Typography>
                            <Divider variant="middle" style={{ marginTop: marginTop }} />
                            <Typography style={{ marginRight: '15px', marginTop: marginTop }} align='right' variant="subtitle1" component="div">
                                האם בבידוד: {process?.isIsolation ? 'כן' : 'לא'}
                            </Typography>
                            <Divider variant="middle" style={{ marginTop: marginTop }} />
                            <Typography style={{ wordBreak: 'break-word', marginRight: '15px', marginTop: marginTop, marginBottom: '5px' }} align='right' variant="subtitle1" component="div">
                                תיאור : {process?.description}
                            </Typography>
                        </Paper>
                        <Button style={{ width: '93%', marginTop: '7px' }} onClick={onSectorsPageClick} variant="contained" color="primary">לעמוד הסקטורים</Button>
                    </div>
                </div>}


        </div>
    );

}

export default ProcessPage