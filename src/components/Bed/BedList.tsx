import { SelectChangeEvent } from '@mui/material';
import Box from '@mui/material/Box';
import React, { useContext, useEffect, useState } from 'react';
import { getBeds } from '../../api/BedApi';
import { Bed } from '../../api/models/Bed';
import { ProcessCreationDetailsContext } from '../../context/ProcessCreationContext';
import Dropdown, { DropdownKeyPair } from '../Common/Select/Dropdown';


const BedList = () =>{
    const { processDetails, setProcessDetails } = useContext(ProcessCreationDetailsContext);
    const [bedsDropdownData,setBedsDropdownData] = useState<DropdownKeyPair[]>([])
    const [beds,setBeds] = useState<Bed[]>([])

    useEffect(() => {
        if (processDetails.roomUuid !== undefined){
            fetchBeds()
        }
    },[processDetails.roomUuid])

    const fetchBeds = () =>{
        getBeds(processDetails.roomUuid).then((beds: Bed[]) => {
            setBeds(beds)
            const data: DropdownKeyPair[] = beds.map((bed: Bed) => ({id: bed.uuid, value: bed.name }))
            setBedsDropdownData(data)            
        })
    }

    function onChange(event: SelectChangeEvent): void {
        const bedUuid: string = event.target.value as string
        const bed: Bed = beds.find((bed: Bed) => bed.uuid === bedUuid)
        processDetails.bedUuid = bed.uuid
        setProcessDetails({...processDetails})
    }

    return (
      <Box>
        <Dropdown title='בחירת מיטה' data={bedsDropdownData} onChange={onChange}/>
      </Box>
    );
   
}

export default BedList