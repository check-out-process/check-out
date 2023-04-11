import React, { memo, useEffect, useState } from 'react';
import ProcessCard from './ProcessCard.component';
import { getProcesses } from '../../../services/Process.service';
import { Process } from '../../../services/models/Process';
import { Typography } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import ProcessListHeader from './Headers/ProcessListHeader.component';
import { FixedSizeList, ListChildComponentProps } from 'react-window';


const ProcessList = () => {
    const [processes, setProcesses] = useState<Process[]>([])
    const [currentProcesses, setCurrentProcesses] = useState<Process[]>([])
    const [pages, setPages] = useState<number>(0)
    const [pageProcessMap, setPageProcessMap] = useState<Process[][]>([])
    const processPerPage: number = 3;

    useEffect(() => {
        fetchProcesses()
    }, [])

    const fetchProcesses = () => {
        getProcesses('dfdfd').then(((processes: Process[]) => {
            setProcesses(processes)
            setCurrentProcesses(processes)
            // initFirstPage(processes)
        }))
    }

    const splitProcessesIntoChunks = (processes: Process[]) => {
        const res = [];
        for (let i = 0; i < processes.length; i += processPerPage) {
            const chunk = processes.slice(i, i + processPerPage);
            res.push(chunk);
        }
        return res;
    }

    const onPageNumberClick = (event: React.ChangeEvent<unknown>, selectedPage: number) => {
        setCurrentProcesses(pageProcessMap[selectedPage - 1])
    };

    const calculatePagesNumber = (processes: Process[]) => {
        const pagesNumber = (processes.length / processPerPage)
        const isNaturalNumber: boolean = (pagesNumber % 1 === 0)
        const totalPageNumber = (isNaturalNumber) ? pagesNumber : Math.floor(pagesNumber) + 1;
        setPages(totalPageNumber)
    }

    const initFirstPage = (processes: Process[]) => {
        calculatePagesNumber(processes)
        const pages = splitProcessesIntoChunks(processes)
        setPageProcessMap(pages)
        // setCurrentProcesses(pages[0])
        setCurrentProcesses(processes)
    }

    return (
        <div>
            <div style={{ marginTop: '10px' }}>
                <ProcessListHeader processes={processes} setProcesses={initFirstPage} />
            </div>


            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',justifyContent:'center', marginTop:'6px'}}>
                
                {/* {currentProcesses?.length > 0 ?

                    currentProcesses.map((process: Process, index: number) => {
                        return (
                            <div style={{ marginTop: '15px', width: '94%', boxShadow: '0px 0px 8px 1px #888888' }}>
                                <ProcessCard key={index} process={process} />
                            </div>
                        )
                    })

                    :
                    <Typography style={{ marginBottom: '10px' }} align='center' variant="h5" component="h2">לא נמצאו תהליכים</Typography>
                } */}
                {currentProcesses?.length > 0 ?
                    <FixedSizeList direction='rtl' height={450} width='98%' itemSize={140} itemCount={currentProcesses.length}>
                        {memo((props: ListChildComponentProps) => {
                            const { index, style } = props;
                            return (
                                <div key={index} style={{ ...style, marginTop: '15px' }}>
                                    <ProcessCard key={index} process={currentProcesses[index]} />
                                </div>
                            );
                        })}
                    </FixedSizeList> : 
                    <Typography style={{ marginBottom: '10px' }} align='center' variant="h5" component="h2">לא נמצאו תהליכים</Typography>}
                
            </div>
            {/* <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {currentProcesses?.length > 0 ?
                    <Pagination style={{ direction: 'ltr', marginTop: '10px' }} count={pages} color="primary" size='large' variant="outlined" shape="rounded" onChange={onPageNumberClick} />
                    : null}
            </div> */}
        </div>
    );

}

export default ProcessList