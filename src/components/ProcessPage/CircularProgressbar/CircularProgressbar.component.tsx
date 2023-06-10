import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { SectorInstance } from '@checkout/types';
import { Status } from "@checkout/types/dist/lib/enums/status.enum";
import { createStyles, makeStyles } from "@material-ui/core";
import "react-circular-progressbar/dist/styles.css";
interface ICircularProgressSectorsBarProps {
    sectorInstances: SectorInstance[]
}
const useStyles = makeStyles(() =>
    createStyles({
        sectorInstancesProcess: {
            display: 'flex', flexDirection: 'row', justifyContent: 'center', direction: 'ltr', marginBottom: '5px', marginTop: '5px'
        },
        sectorInstancesProcessCircle: {
            width: 40,
            height: 40,
        },
        sectorInstancesProcessLine: {
            width: '7px'
        }
    }),
);
const CircularProgressSectorsBar: React.FC<ICircularProgressSectorsBarProps> = ({ sectorInstances }) => {
    const classes = useStyles();

    const percentageByStatus = {
        [Status.Waiting_Assigning]: 0,
        [Status.Waiting_Confirm]: 0,
        [Status.In_Progress]: 50,
        [Status.Done]: 100
    }
    const colorByStatus = {
        [Status.Waiting_Assigning]: '#D6D6D6',
        [Status.Waiting_Confirm]: '#D6D6D6',
        [Status.In_Progress]: 'orange',
        [Status.Done]: 'green'
    }

    return (
        <div className={classes.sectorInstancesProcess}>
            {sectorInstances?.map((sector: SectorInstance, index: number) => (
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <div className={classes.sectorInstancesProcessCircle}>
                        <CircularProgressbar value={percentageByStatus[sector.status]} text={(index + 1).toString()}
                            styles={buildStyles({
                                textColor: "black",
                                textSize: "30px",
                                pathColor: colorByStatus[sector.status],
                                trailColor: '#D6D6D6'
                            })} />
                    </div>
                    {index +1 < sectorInstances.length && <div className={classes.sectorInstancesProcessLine} style={{ border: `1.5px solid ${colorByStatus[sector.status]}` }}></div>}
                </div>
            ))}
        </div>
    );
}
export default CircularProgressSectorsBar
