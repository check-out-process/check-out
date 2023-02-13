import { SelectChangeEvent } from '@mui/material';
import Box from '@mui/material/Box';
import React, { useEffect, useState } from 'react';
import { getDepartments } from '../../api/DepartmentApi';
import { Department } from '../../api/models/Department';
import { Room } from '../../api/models/Room';
import { getRooms } from '../../api/RoomApi';
import Dropdown, { DropdownKeyPair } from '../Common/Select/Dropdown';


const RoomList = () =>{
    const [roomsDropdownData,setRoomsDropdownData] = useState<DropdownKeyPair[]>([])
    const [rooms,setRooms] = useState<Room[]>([])
    const [room,setRoom] = useState<Room>({} as any)

    useEffect(() => {
        fetchRooms()
    },[])

    const fetchRooms = () =>{
        getRooms().then((rooms: Room[]) => {
            setRooms(rooms)
            const data: DropdownKeyPair[] = rooms.map((room: Room) => (
                {id: room.uuid, value: room.name }
                ))
                setRoomsDropdownData(data)            
        })
    }

    function onChange(event: SelectChangeEvent): void {
        const roomUuid: string = event.target.value as string
        const room: Room = rooms.find((room: Room) => room.uuid === roomUuid)
        setRoom(room)
    }
    

    return (
      <Box>
             <Dropdown title='בחירת חדר' data={roomsDropdownData} onChange={onChange}/>
      </Box>
    );
   
}

export default RoomList