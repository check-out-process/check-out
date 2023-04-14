import React, { useEffect, useState, useContext } from 'react';
import { Room } from '../../services/models/Room';
import { getRooms } from '../../services/Room.service';
import Dropdown, { DropdownKeyPair, onChangeEvent } from '../Common/Select/Dropdown.component';
import { Department } from '../../services/models/Department';
import { createStyles, LinearProgress, makeStyles, Theme } from '@material-ui/core';


export type RoomListType = {
    department: Department,
    room: Room,
    setRoom: (room: Room) => void,
    rooms: Room[],
    setRooms: (rooms: Room[]) => void
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
            const data: DropdownKeyPair[] = rooms.map((room: Room) => ({ value: room, displayName: room.name }));
            setRoomsDropdownData(data);
        }
    }, [department])

    const fetchRooms = () => {
            setIsLoading(true);
            getRooms(department.id).then((rooms: Room[]) => {
                setRooms(rooms)
                const data: DropdownKeyPair[] = rooms.map((room: Room) => ({ value: room, displayName: room.name }));
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
        setRoom(event.target.value as Room)
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