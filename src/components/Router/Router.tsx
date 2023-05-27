import React, { useContext, useEffect } from 'react';
import * as ReactDOM from "react-dom";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider, Route, Navigate
} from "react-router-dom";
import NavBarLayout from '../Layout/NavBar/NavBar.component';
import LogInPage from '../LogInPage/logInPage.component';
import ProcessSectorsList from '../ProcessPage/Sectors/ProcessSectorsList.component';
import ProcessCreation from '../ProcessCreationPage/ProcessCreation.component';
import ProcessList from '../ProcessPage/ProcessList.componet';
import SectorInstancePage from '../ProcessPage/Sectors/SectorInstancePage/SectorInstancePage.component';
import { getUser } from '../../services/Token.service';
import { UserContext } from '../../context/UserContext';
import ScanBedPage from '../ProcessPage/ScanBed/ScanBedPage.component';
import { ProtectedRoute, userAdminRole, userPremmitedRolesToProcessCreation } from './ProtectedRoutes';
import AddUserPage from '../User/AddUserPage.component';
import UserPage from '../User/UserPage.component';
import DepartmentCreationPage from '../UserManagmentPage/DepartmentCreationPage.component';
import RoomCreationPage from '../UserManagmentPage/RoomCreationPage.component';
import UserManagmentPage from '../UserManagmentPage/UserManagmentPage.component';
import EditUserPage from '../User/EditUserPage.component';
import ProcessPage from '../ProcessPage/ProcessPage.component';

const Router = () => {
  const { user, setUser } = useContext(UserContext);
  

  useEffect(() => {
    const user = getUser();
    setUser(user);
  }, [])

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route >
        <Route path="/" element={<NavBarLayout user={user} />}>
          <Route path="/" element={<ProcessList />} />
          <Route path="/processes" element={<ProcessList />} />
          <Route path="/processes/:processId/sectors" element={<ProcessSectorsList />} />
          <Route path="/processes/:processId/sectors/:sectorId" element={<SectorInstancePage />} />
          <Route path="/processes/:processId" element={<ProcessPage />} />
          <Route path="/scanBed" element={<ScanBedPage />} />
          <Route path="/scanBed/:bedId" element={<ScanBedPage />} />
          <Route path="/processcreation"
            element={
              <ProtectedRoute user={user} userPremmitedRoles={userPremmitedRolesToProcessCreation}>
                <ProcessCreation />
              </ProtectedRoute>

            }
          />
          <Route path="/managment/department-creation"
            element={
              <ProtectedRoute user={user} userPremmitedRoles={userAdminRole}>
                <DepartmentCreationPage />
              </ProtectedRoute>

            }
          />
          <Route path="/managment/room-creation"
            element={
              <ProtectedRoute user={user} userPremmitedRoles={userAdminRole}>
                <RoomCreationPage />
              </ProtectedRoute>
            }
          />
          <Route path="/managment/users" element={
            <ProtectedRoute user={user} userPremmitedRoles={userAdminRole}>
              <UserManagmentPage />
            </ProtectedRoute>
          } />
          <Route path="/managment/users/:userId"
            element={
              <ProtectedRoute user={user} userPremmitedRoles={userAdminRole}>
                <UserPage />
              </ProtectedRoute>} />
          <Route path="/managment/users/create-user"
            element={
              <ProtectedRoute user={user} userPremmitedRoles={userAdminRole}>
                <AddUserPage />
              </ProtectedRoute>} />
          <Route path="/managment/users/:userId/edit"
            element={
              <ProtectedRoute user={user} userPremmitedRoles={userAdminRole}>
                <EditUserPage />
              </ProtectedRoute>} />
          <Route path="*" element={<p>There's nothing here: 404!</p>} />
        </Route> 
        <Route >
          <Route path="/login" element={
            <LogInPage />
          } />
        </Route>
        </Route>
    )
  )

  return (
    <div style={{ height: '100%' }}>
      <RouterProvider router={router} />
    </div>
  );
}

export default Router;