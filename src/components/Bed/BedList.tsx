import React, { useContext, useEffect, useState } from 'react';
import { getBeds } from '../../services/Bed.service';
import { Bed } from '../../services/models/Bed';
import { ProcessCreationDetailsContext } from '../../context/ProcessCreationContext';
import Dropdown, { DropdownKeyPair, onChangeEvent } from '../Common/Select/Dropdown';


const BedList = () =>{
    const { processDetails, setProcessDetails } = useContext(ProcessCreationDetailsContext);
    const [bedsDropdownData,setBedsDropdownData] = useState<DropdownKeyPair[]>([])

    useEffect(() => {
        if (processDetails.roomUuid !== undefined){
            fetchBeds()
        }
    },[processDetails.roomUuid])

    const fetchBeds = () =>{
        getBeds(processDetails.roomUuid).then((beds: Bed[]) => {
            const data: DropdownKeyPair[] = beds.map((bed: Bed) => ({id: bed.uuid, value: bed.name }))
            setBedsDropdownData(data)            
        })
    }

    function onChange(event: onChangeEvent): void {
        processDetails.bedUuid = event.target.value as string
        setProcessDetails({...processDetails})
    }

    return (
      <div>
        <Dropdown title='בחירת מיטה' data={bedsDropdownData} onChange={onChange}/>
      </div>
    );
   
}

export default BedList