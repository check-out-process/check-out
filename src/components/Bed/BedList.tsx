import { SelectChangeEvent } from '@mui/material';
import Box from '@mui/material/Box';
import React, { useEffect, useState } from 'react';
import { getBeds } from '../../api/BedApi';
import { Bed } from '../../api/models/Bed';
import Dropdown, { DropdownKeyPair } from '../Common/Select/Dropdown';


const BedList = () =>{
    const [bedsDropdownData,setBedsDropdownData] = useState<DropdownKeyPair[]>([])
    const [beds,setBeds] = useState<Bed[]>([])
    const [bed,setBed] = useState<Bed>({} as any)

    useEffect(() => {
        fetchBeds()
    },[])

    const fetchBeds = () =>{
        getBeds().then((beds: Bed[]) => {
            setBeds(beds)
            const data: DropdownKeyPair[] = beds.map((bed: Bed) => (
                {id: bed.uuid, value: bed.name }
                ))
                setBedsDropdownData(data)            
        })
    }

    function onChange(event: SelectChangeEvent): void {
        const bedUuid: string = event.target.value as string
        const bed: Bed = beds.find((bed: Bed) => bed.uuid === bedUuid)
        setBed(bed)
    }
    

    return (
      <Box>
             <Dropdown title='בחירת מיטה' data={bedsDropdownData} onChange={onChange}/>
      </Box>
    );
   
}

export default BedList