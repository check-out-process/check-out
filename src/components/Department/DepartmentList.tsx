import { SelectChangeEvent } from '@mui/material';
import Box from '@mui/material/Box';
import React, { useContext,useEffect, useState } from 'react';
import { getDepartments } from '../../services/Department.service';
import { Department } from '../../services/models/Department';
import {ProcessCreationDetailsContext} from '../../context/ProcessCreationContext';
import Dropdown, { DropdownKeyPair } from '../Common/Select/Dropdown';


const DepartmentList = () => {
    const { processDetails, setProcessDetails } = useContext(ProcessCreationDetailsContext);
    const [departmentsDropdownData,setDepartmentsDropdownData] = useState<DropdownKeyPair[]>([])

    useEffect(() => {
        fetchDepartments()
    },[])

    const fetchDepartments = () =>{
        getDepartments().then((departments: Department[]) => {
            const data: DropdownKeyPair[] = departments.map((department: Department) => (
                {id: department.uuid, value: department.name }
                ))
            setDepartmentsDropdownData(data)            
        })
    }

    function onChange(event: SelectChangeEvent): void {
        processDetails.deparmentUuid = event.target.value as string
        setProcessDetails({...processDetails})
    }
    

    return (
      <Box>
             <Dropdown title='בחירת מחלקה' data={departmentsDropdownData} onChange={onChange}/>
      </Box>
    );
   
}

export default DepartmentList