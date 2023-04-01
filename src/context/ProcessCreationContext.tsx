import React, { useState, useEffect, createContext, ReactNode } from 'react';
import { Bed } from '../services/models/Bed';
import { Department } from '../services/models/Department';
import { Room } from '../services/models/Room';

export type ProcessBasicDetailsType = {
    deparmentUuid?: string;
    roomUuid?: string;
    bedUuid?: string;
    properties: { [id: string]: any }
}

export type ProcessCreationContextType = {
    departments?: Department[],
    setDepartments?: (departments: Department[]) => void,
    department?: Department,
    setDepartment?: (department: Department) => void,
    rooms?: Room[],
    setRooms?: (rooms: Room[]) => void,
    room?: Room,
    setRoom?: (room: Room) => void,
    bed?: Bed,
    setBed?: (bed: Bed) => void,
    beds?: Bed[],
    setBeds?: (beds: Bed[]) => void,
    isCurrentStepValid?: () => boolean
}
const ProcessCreationDetailsContext = createContext<ProcessCreationContextType>({});

function ProcessCreationProvider({ children }: { children: ReactNode }) {
    const [departments, setDepartments] = useState<Department[]>([])
    const [rooms, setRooms] = useState<Room[]>([])
    const [beds, setBeds] = useState<Bed[]>([])

    const [department, setDepartment] = useState<Department>()
    const [room, setRoom] = useState<Room>()
    const [bed, setBed] = useState<Bed>()

    const onDepartmentChange = (department: Department) => {
        setDepartment(department)
        setRoom(undefined)
        setBed(undefined)
    }

    const onRoomChange = (room: Room) => {
        setRoom(room)
        setBed(undefined)
    }

    const isCurrentStepValid = (): boolean => {
        return (department !== undefined) && (room !== undefined) && (bed !== undefined);
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
                isCurrentStepValid: isCurrentStepValid
            }}>
            {children}
        </ProcessCreationDetailsContext.Provider>
    )
}
export { ProcessCreationDetailsContext, ProcessCreationProvider }