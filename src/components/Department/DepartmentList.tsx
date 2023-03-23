import React, { useContext,useEffect, useState } from 'react';
import { getDepartments } from '../../services/Department.service';
import { Department } from '../../services/models/Department';
import {ProcessCreationDetailsContext} from '../../context/ProcessCreationContext';
import Dropdown, { DropdownKeyPair, onChangeEvent } from '../Common/Select/Dropdown';


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

    function onChange(event: onChangeEvent): void {
        processDetails.deparmentUuid = event.target.value as string
        setProcessDetails({...processDetails})
    }
    

    return (
      <div>
             <Dropdown title='בחירת מחלקה' data={departmentsDropdownData} onChange={onChange}/>
      </div>
    );
   
}

export default DepartmentList