import { SelectChangeEvent } from '@mui/material';
import Box from '@mui/material/Box';
import React, { useContext,useEffect, useState } from 'react';
import { getDepartments } from '../../api/DepartmentApi';
import { Department } from '../../api/models/Department';
import {ProcessCreationDetailsContext} from '../../context/ProcessCreationContext';
import Dropdown, { DropdownKeyPair } from '../Common/Select/Dropdown';


const DepartmentList = () =>{
    const { processDetails, setProcessDetails } = useContext(ProcessCreationDetailsContext);

    const [departmentsDropdownData,setDepartmentsDropdownData] = useState<DropdownKeyPair[]>([])
    const [departments,setDepartments] = useState<Department[]>([])

    useEffect(() => {
        fetchDepartments()
    },[])

    const fetchDepartments = () =>{
        getDepartments().then((departments: Department[]) => {
            setDepartments(departments)
            const data: DropdownKeyPair[] = departments.map((department: Department) => (
                {id: department.uuid, value: department.name }
                ))
            setDepartmentsDropdownData(data)            
        })
    }

    function onChange(event: SelectChangeEvent): void {
        const departmentUuid: string = event.target.value as string
        const department: Department = departments.find(department => department.uuid === departmentUuid)
        processDetails.deparmentUuid = department.uuid
        setProcessDetails({...processDetails})
        console.log(processDetails)
    }
    

    return (
      <Box>
             <Dropdown title='בחירת מחלקה' data={departmentsDropdownData} onChange={onChange}/>
      </Box>
    );
   
}

export default DepartmentList