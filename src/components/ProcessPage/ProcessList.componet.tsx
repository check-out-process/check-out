import React, { memo, useEffect, useState } from 'react';
import ProcessCard from './ProcessCard.component';
import { CircularProgress, Typography } from '@material-ui/core';
import ProcessListHeader from './Headers/ProcessListHeader.component';
import { FixedSizeList, ListChildComponentProps } from 'react-window';
import { useStyles } from './ProcessList.component.styles';
import { getUserProcessInstance } from '../../services/ProcessInstance.service';
import { ProcessInstance } from '@checkout/types';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../../services/Token.service';

const ProcessList = () => {
    const [isLogIn, setIsLogIn] = useState<boolean>(true);
    const [processes, setProcesses] = useState<ProcessInstance[]>([])
    const [currentProcesses, setCurrentProcesses] = useState<ProcessInstance[]>([])
    const [pages, setPages] = useState<number>(0)
    const [pageProcessMap, setPageProcessMap] = useState<ProcessInstance[][]>([])
    const processPerPage: number = 3;
    const [loading, setLoading] = useState<boolean>(false);
    const classes = useStyles()
    const navigate = useNavigate();

    useEffect(() => {
        const user = getUser();
        if (!user) {
            navigate('/login')
        } else {
            setIsLogIn(false)
            fetchProcesses()
        }
    }, [])

    const fetchProcesses = () => {
        setLoading(true)
        getUserProcessInstance().then(((processes: ProcessInstance[]) => {
            setProcesses(processes)
            setCurrentProcesses(processes)
            setLoading(false)

        }))
    }

    const splitProcessesIntoChunks = (processes: ProcessInstance[]) => {
        const res = [];
        for (let i = 0; i < processes.length; i += processPerPage) {
            const chunk = processes.slice(i, i + processPerPage);
            res.push(chunk);
        }
        return res;
    }

    const calculatePagesNumber = (processes: ProcessInstance[]) => {
        const pagesNumber = (processes.length / processPerPage)
        const isNaturalNumber: boolean = (pagesNumber % 1 === 0)
        const totalPageNumber = (isNaturalNumber) ? pagesNumber : Math.floor(pagesNumber) + 1;
        setPages(totalPageNumber)
    }

    const initFirstPage = (processes: ProcessInstance[]) => {
        calculatePagesNumber(processes)
        const pages = splitProcessesIntoChunks(processes)
        setPageProcessMap(pages)
        setCurrentProcesses(processes)
    }

    return (
        <div>
            {isLogIn ? <></>: <div>
                <div className={classes.headers} >
                    <ProcessListHeader processes={processes} setProcesses={initFirstPage} />
                </div >
                {loading ? <CircularProgress disableShrink /> : null}
                <div className={classes.processesList}>
                    {currentProcesses?.length > 0 ?
                        <FixedSizeList direction='rtl' height={450} width='98%' itemSize={128} itemCount={currentProcesses.length}>
                            {memo((props: ListChildComponentProps) => {
                                const { index, style } = props;
                                return (
                                    <div key={index} className={classes.processCard} style={{ ...style }}>
                                        <ProcessCard key={index} process={currentProcesses[index]} />
                                    </div>
                                );
                            })}
                        </FixedSizeList> : null}

                    {currentProcesses?.length == 0 && !loading ?
                        <Typography className={classes.noResultTitle} align='center' variant="h5" component="h2">לא נמצאו תהליכים</Typography> : null}
                </div>
            </div>}
        </div>
    );

}

export default ProcessList