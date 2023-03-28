import React, { useEffect, useState } from 'react';
import { getBeds } from '../../services/Bed.service';
import { Bed } from '../../services/models/Bed';
import Dropdown, { DropdownKeyPair, onChangeEvent } from '../Common/Select/Dropdown.component';
import { Room } from '../../services/models/Room';
import { createStyles, LinearProgress, makeStyles, Theme } from '@material-ui/core';

export type RoomListType = {
    room: Room,
    bed: Bed,
    setBed: (bed: Bed) => void
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        loading: {
            width: '80%',
            marginRight: '1%',
            '@media (min-width: 500px)': {
                width: '40%',
            }
        }
    }),
);


const BedList: React.FC<RoomListType> = ({ room, bed, setBed }) => {
    const [bedsDropdownData, setBedsDropdownData] = useState<DropdownKeyPair[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const classes = useStyles();


    useEffect(() => {
        if (room !== undefined) {
            fetchBeds()
        }else{
            setBedsDropdownData([])
        }
    }, [room])

    const fetchBeds = () => {
        setIsLoading(true);
        getBeds(room.uuid).then((beds: Bed[]) => {
            const data: DropdownKeyPair[] = beds.map((bed: Bed) => ({ value: bed, displayName: bed.name }))
            setBedsDropdownData(data);
            setIsLoading(false);
        })
    }

    function onChange(event: onChangeEvent): void {
        setBed(event.target.value as Bed)
    }

    return (
        <div>
            <Dropdown
                title='בחירת מיטה'
                defaultValue={bed}
                data={bedsDropdownData}
                disabled={isLoading}
                onChange={onChange} />
            {isLoading ? <LinearProgress className={classes.loading} /> : null}

        </div>
    );

}

export default BedList