import React, { useState, createContext, ReactNode } from 'react';
import { User } from '../services/models/User';

export type UserContextContextType = {
    user?: User,
    setUser?: (user: User) => void,
}
const UserContext = createContext<UserContextContextType>({});


type ButtonProps = {
    children: ReactNode;
}

function UserProvider({ children }: ButtonProps) {
    const [user, setUser] = useState<User>();

    return (
        <UserContext.Provider value={{
            user,
            setUser,
        }}>
            {children}
        </UserContext.Provider>
    )
}
export { UserContext, UserProvider }