import React, { useEffect, useState, useContext } from 'react';
import { Room } from '../../services/models/Room';
import { getRooms } from '../../services/Room.service';
import {ProcessCreationDetailsContext} from '../../context/ProcessCreationContext';
import Dropdown, { DropdownKeyPair, onChangeEvent } from '../Common/Select/Dropdown';


const RoomList = () =>{
    const { processDetails, setProcessDetails } = useContext(ProcessCreationDetailsContext);
    const [roomsDropdownData,setRoomsDropdownData] = useState<DropdownKeyPair[]>([])

    useEffect(() => {
        if (processDetails.deparmentUuid !== undefined){
            fetchRooms()
        }
    },[processDetails.deparmentUuid])

    const fetchRooms = () =>{
        getRooms(processDetails.deparmentUuid).then((rooms: Room[]) => {
            const data: DropdownKeyPair[] = rooms.map((room: Room) => ({id: room.uuid, value: room.name }))
            setRoomsDropdownData(data)            
        })
    }

    function onChange(event: onChangeEvent): void {
        processDetails.roomUuid = event.target.value as string
        setProcessDetails({...processDetails})
    }
    

    return (
      <div>
        <Dropdown title='בחירת חדר' data={roomsDropdownData} onChange={onChange}/>
      </div>
    );
   
}

export default RoomList