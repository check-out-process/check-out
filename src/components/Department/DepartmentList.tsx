import { createStyles, LinearProgress, makeStyles, Snackbar, Theme } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { getDepartments } from '../../services/Department.service';
import { DepartmentDTO } from '@checkout/types';
import Dropdown, { DropdownKeyPair, onChangeEvent } from '../Common/Select/Dropdown.component';
import { useSnackbar } from 'notistack';


export type DepartmentListProps = {
    department: DepartmentDTO,
    setDepartment: (department: DepartmentDTO) => void,
    departments: DepartmentDTO[],
    setDepartments: (departments: DepartmentDTO[]) => void,

}


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        loading: {
            width: '97%',
            marginRight: '1%',
            '@media (min-width: 500px)': {
                width: '40%',
            }
        }
    })
);


const DepartmentList: React.FC<DepartmentListProps> = ({ department, setDepartment, departments, setDepartments }) => {
    const [departmentsDropdownData, setDepartmentsDropdownData] = useState<DropdownKeyPair[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const classes = useStyles();
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        if (departments.length == 0) {
            fetchDepartments()
        } else {
            const data: DropdownKeyPair[] = departments.map((department: DepartmentDTO) =>
                ({ value: department, displayName: department.name }));
            setDepartmentsDropdownData(data)
        }
    }, [])

    const fetchDepartments = () => {
        setIsLoading(true)
        getDepartments().then((departments: DepartmentDTO[]) => {
            setDepartments(departments)
            const data: DropdownKeyPair[] = departments.map((department: DepartmentDTO) =>
                ({ value: department, displayName: department.name }));
            setDepartmentsDropdownData(data)
            setIsLoading(false)
        }).catch(err => {
            setIsLoading(false)
            enqueueSnackbar('קרתה שגיאה במהלך נסיון לשלוף את כל המחלקות',{variant : 'error'})
        })
    }

    function onChange(event: onChangeEvent): void {
        setDepartment(event.target.value as DepartmentDTO);
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