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
        sectorInstancesProcessLine: {
            display: 'flex', flexDirection: 'row', justifyContent: 'center', direction: 'ltr', marginBottom: '10px', marginTop: '10px'
        },
        sectorInstancesProcessCircle: {
            width: 40, height: 40, marginRight: '10px'
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
        [Status.Waiting_Assigning]: 'transparent',
        [Status.Waiting_Confirm]: 'transparent',
        [Status.In_Progress]: 'orange',
        [Status.Done]: 'green'
    }

    return (
        <div className={classes.sectorInstancesProcessLine}>
            {sectorInstances?.map((sector: SectorInstance, index: number) => (
                <div className={classes.sectorInstancesProcessCircle}>
                    <CircularProgressbar value={percentageByStatus[sector.status]} text={(index + 1).toString()}
                        styles={buildStyles({
                            textColor: "black",
                            textSize: "30px",
                            pathColor: colorByStatus[sector.status],
                        })} />
                </div>
            ))}
        </div>
    );

}

export default CircularProgressSectorsBar