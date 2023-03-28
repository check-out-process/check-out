import { createStyles, LinearProgress, makeStyles, Theme } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { getDepartments } from '../../services/Department.service';
import { Department } from '../../services/models/Department';
import Dropdown, { DropdownKeyPair, onChangeEvent } from '../Common/Select/Dropdown.component';

export type DepartmentList = {
    department: Department,
    setDepartment: (department: Department) => void
}


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        loading: {
            width: '80%',
            marginRight: '1%',
            '@media (min-width: 500px)': {
                width: '40%',
            }
        }
    }),
);


const DepartmentList: React.FC<DepartmentList> = ({ department, setDepartment }) => {
    const [departmentsDropdownData, setDepartmentsDropdownData] = useState<DropdownKeyPair[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const classes = useStyles();


    useEffect(() => {
        fetchDepartments()
    }, [])

    const fetchDepartments = () => {
        setIsLoading(true)
        getDepartments().then((departments: Department[]) => {
            const data: DropdownKeyPair[] = departments.map((department: Department) =>
                ({ value: department, displayName: department.name }));
            setDepartmentsDropdownData(data)
            setIsLoading(false)
        })
    }

    function onChange(event: onChangeEvent): void {
        setDepartment(event.target.value as Department);
    }


    return (
        <div>
            <Dropdown
                defaultValue={department}
                title='בחירת מחלקה'
                data={departmentsDropdownData}
                disabled={isLoading}
                onChange={onChange} />
            {isLoading ? <LinearProgress className={classes.loading} /> : null}
        </div>
    );

}

export default DepartmentList