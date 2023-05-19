import { Navigate } from "react-router-dom";
import { Role, User } from "../../services/models/User";
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