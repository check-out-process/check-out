import { SelectChangeEvent } from '@mui/material';
import Box from '@mui/material/Box';
import React, { useEffect, useState, useContext } from 'react';
import { Room } from '../../api/models/Room';
import { getRooms } from '../../api/RoomApi';
import {ProcessCreationDetailsContext} from '../../context/ProcessCreationContext';
import Dropdown, { DropdownKeyPair } from '../Common/Select/Dropdown';


const RoomList = () =>{
    const { processDetails, setProcessDetails } = useContext(ProcessCreationDetailsContext);
    const [roomsDropdownData,setRoomsDropdownData] = useState<DropdownKeyPair[]>([])
    const [rooms,setRooms] = useState<Room[]>([])

    useEffect(() => {
        if (processDetails.deparmentUuid !== undefined){
            console.log("here")
            fetchRooms()
        }
    },[processDetails.deparmentUuid])

    const fetchRooms = () =>{
        getRooms(processDetails.deparmentUuid).then((rooms: Room[]) => {
            setRooms(rooms)
            const data: DropdownKeyPair[] = rooms.map((room: Room) => ({id: room.uuid, value: room.name }))
            setRoomsDropdownData(data)            
        })
    }

    function onChange(event: SelectChangeEvent): void {
        const roomUuid: string = event.target.value as string
        const room: Room = rooms.find((room: Room) => room.uuid === roomUuid)
        processDetails.roomUuid = room.uuid
        setProcessDetails({...processDetails})
    }
    

    return (
      <Box>
        <Dropdown title='בחירת חדר' data={roomsDropdownData} onChange={onChange}/>
      </Box>
    );
   
}

export default RoomList