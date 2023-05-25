import { Navigate } from "react-router-dom";
import { Role } from '@checkout/types/dist/lib/enums/role.enum';
import { User } from '@checkout/types';

import React from "react";

interface IProtectedRouteProps {
    user: User,
    userPremmitedRoles: string[],
    children: any
}
export const ProtectedRoute = ({ user, userPremmitedRoles, children }: IProtectedRouteProps) => {
    if (!userPremmitedRoles.includes(user.role.name)) {
        return <Navigate to="/" replace />;
    }
    return children;
};

export const userPremmitedRolesToProcessCreation = [Role.Admin, Role.Process_Executer]
export const userAdminRole = [Role.Admin]