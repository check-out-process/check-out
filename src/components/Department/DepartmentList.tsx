import { SelectChangeEvent } from '@mui/material';
import Box from '@mui/material/Box';
import React, { useEffect, useState } from 'react';
import { getDepartments } from '../../api/DepartmentApi';
import { Department } from '../../api/models/Department';
import Dropdown, { DropdownKeyPair } from '../Common/Select/Dropdown';


const DepartmentList = () =>{
    const [departmentsDropdownData,setDepartmentsDropdownData] = useState<DropdownKeyPair[]>([])
    const [departments,setDepartments] = useState<Department[]>([])
    const [department,setDepartment] = useState<Department>({} as any)

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
        setDepartment(department)
    }
    

    return (
      <Box>
             <Dropdown title='בחירת מחלקה' data={departmentsDropdownData} onChange={onChange}/>
      </Box>
    );
   
}

export default DepartmentList