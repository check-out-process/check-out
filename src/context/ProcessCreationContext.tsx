import React, { useState, createContext, ReactNode } from 'react';
import { BedDTO, DepartmentDTO, RoomDTO } from '@checkout/types';


export type ProcessCreationContextType = {
    departments?: DepartmentDTO[],
    setDepartments?: (departments: DepartmentDTO[]) => void,
    department?: DepartmentDTO,
    setDepartment?: (department: DepartmentDTO) => void,
    rooms?: RoomDTO[],
    setRooms?: (rooms: RoomDTO[]) => void,
    room?: RoomDTO,
    setRoom?: (room: RoomDTO) => void,
    bed?: BedDTO,
    setBed?: (bed: BedDTO) => void,
    beds?: BedDTO[],
    setBeds?: (beds: BedDTO[]) => void,
    isCurrentStepValid?: () => boolean,
    properties?: { [key: string]: any },
    setProperty?: (key: string, value: any) => void
}
const ProcessCreationDetailsContext = createContext<ProcessCreationContextType>({});

function ProcessCreationProvider({ children }: { children: ReactNode }) {
    const [departments, setDepartments] = useState<DepartmentDTO[]>([])
    const [rooms, setRooms] = useState<RoomDTO[]>([])
    const [beds, setBeds] = useState<BedDTO[]>([])

    const [department, setDepartment] = useState<DepartmentDTO>()
    const [room, setRoom] = useState<RoomDTO>()
    const [bed, setBed] = useState<BedDTO>()

    const [properties, setProperties] = useState<{[key: string]: any}>({})

    const onDepartmentChange = (department: DepartmentDTO) => {
        setDepartment(department)
        setRoom(undefined)
        setBed(undefined)
    }

    const onRoomChange = (room: RoomDTO) => {
        setRoom(room)
        setBed(undefined)
    }

    const isCurrentStepValid = (): boolean => {
        return (department !== undefined) && (room !== undefined) && (bed !== undefined);
    }

    const setProperty = (key: string, value: any) => {
        properties[key] = value
        setProperties({...properties})
    }


    return (
        <ProcessCreationDetailsContext.Provider
            value=
            {{
                departments: departments,
                setDepartments: setDepartments,
                department: department,
                setDepartment: onDepartmentChange,
                setRooms: setRooms,
                rooms: rooms,
                room: room,
                setRoom: onRoomChange,
                setBeds: setBeds,
                beds: beds,
                bed: bed,
                setBed: setBed,
                isCurrentStepValid: isCurrentStepValid,
                properties: properties,
                setProperty: setProperty
            }}>
            {children}
        </ProcessCreationDetailsContext.Provider>
    )
}
export { ProcessCreationDetailsContext, ProcessCreationProvider }