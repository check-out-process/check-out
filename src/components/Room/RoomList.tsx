import React, { useEffect, useState, useContext } from 'react';
import { getRooms } from '../../services/Room.service';
import Dropdown, { DropdownKeyPair, onChangeEvent } from '../Common1/Select/Dropdown.component';
import { DepartmentDTO, RoomDTO } from '@checkout/types';
import { createStyles, LinearProgress, makeStyles, Theme } from '@material-ui/core';


export type RoomListType = {
    department: DepartmentDTO,
    room: RoomDTO,
    setRoom: (room: RoomDTO) => void,
    rooms: RoomDTO[],
    setRooms: (rooms: RoomDTO[]) => void
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        loading: {
            marginRight: '1%',
            '@media (min-width: 500px)': {
                width: '40%',
            }
        }
    }),
);



const RoomList: React.FC<RoomListType> = ({ department, room, setRoom, rooms, setRooms }) => {
    const [roomsDropdownData, setRoomsDropdownData] = useState<DropdownKeyPair[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const classes = useStyles();

    useEffect(() => {
        if (department !== undefined && room === undefined){
            setRoomsDropdownData([]);
            fetchRooms()
        }
        else if (department !== undefined && room !== undefined){
            const data: DropdownKeyPair[] = rooms.map((room: RoomDTO) => ({ value: room, displayName: room.name }));
            setRoomsDropdownData(data);
        }
    }, [department])

    const fetchRooms = () => {
            setIsLoading(true);
            getRooms(department.id).then((rooms: RoomDTO[]) => {
                setRooms(rooms)
                
                const sorrtedRoom= rooms.sort((n1,n2) => {
                    if (n1.name> n2.name) {
                        return 1;
                    }
                
                    if (n1.name < n2.name) {
                        return -1;
                    }
                
                    return 0;
                });
                const data: DropdownKeyPair[] = sorrtedRoom.map((room: RoomDTO) => ({ value: room, displayName: room.name }));
                
                setRoomsDropdownData(data);
                setIsLoading(false);
            }).
            catch(err => {
                setIsLoading(false);
                setRoomsDropdownData([])
                setRooms([])
            })
    }

    function onChange(event: onChangeEvent): void {
        setRoom(event.target.value as RoomDTO)
    }


    return (
        <div>
            <Dropdown title='בחירת חדר'
                data={roomsDropdownData}
                defaultValue={room}
                disabled={isLoading}
                onChange={onChange} />
            {isLoading ? <LinearProgress className={classes.loading} /> : null}
        </div>
    );

}

export default RoomList