import React, { useEffect, useState } from 'react';
import { getBeds } from '../../services/Bed.service';
import { BedDTO, RoomDTO } from '@checkout/types';
import Dropdown, { DropdownKeyPair, onChangeEvent } from '../Common1/Select/Dropdown.component';
import { createStyles, LinearProgress, makeStyles, Theme } from '@material-ui/core';

export type RoomListProps = {
    room: RoomDTO,
    bed: BedDTO,
    setBed: (bed: BedDTO) => void,
    beds?: BedDTO[],
    setBeds?: (beds: BedDTO[]) => void
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        loading: {
            width: '97%',
            marginRight: '1%',
            '@media (min-width: 500px)': {
                width: '40%',
            }
        }
    }),
);


const BedList: React.FC<RoomListProps> = ({ room, bed, setBed, beds, setBeds }) => {
    const [bedsDropdownData, setBedsDropdownData] = useState<DropdownKeyPair[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const classes = useStyles();


    useEffect(() => {
        if (room !== undefined && bed === undefined){
            fetchBeds()
        }
        else if (room !== undefined && bed !== undefined){
            const data: DropdownKeyPair[] = beds.map((bed: BedDTO) => ({ value: bed, displayName: bed.name }))
            setBedsDropdownData(data);
        }
        if (room == undefined && bed === undefined){
            setBedsDropdownData([]);
        }
    }, [room])

    const fetchBeds = () => {
            setIsLoading(true);
            getBeds(room.id).then((beds: BedDTO[]) => {
                setBeds(beds)
                const data: DropdownKeyPair[] = beds.map((bed: BedDTO) => ({ value: bed, displayName: bed.name }))
                setBedsDropdownData(data);
                setIsLoading(false);
            }).catch(err => {
                setBeds([])
                setBedsDropdownData([])
                setIsLoading(false);
            })
        
    }

    function onChange(event: onChangeEvent): void {
        setBed(event.target.value as BedDTO)
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