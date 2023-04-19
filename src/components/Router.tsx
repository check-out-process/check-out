import React from 'react';
import * as ReactDOM from "react-dom";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider, Route
} from "react-router-dom";
import HomePage from './HomePage/homePage.component';
import NavBarLayout from './Layout/NavBar/NavBar.component';
import ProcessCreation from './ProcessCreationPage/ProcessCreation.component';
import ProcessList from './ProcessPage/ProcessList.componet';
import DepartmentCreationPage from './Admin/DepartmentCreationPage.component';
import RoomCreationPage from './Admin/RoomCreationPage.component';
import UserManagmentPage from './Admin/Users/UserManagmentPage.component';
import UserPage from './Admin/Users/UserPage/UserPage.component';

const Router = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<NavBarLayout />}>
        <Route path="/home" element={<HomePage />} />
        <Route path="/processes" element={<ProcessList />} />
        <Route path="/processcreation" element={<ProcessCreation />}/>
        <Route path="/managment/department-creation" element={<DepartmentCreationPage />}/>
        <Route path="/managment/room-creation" element={<RoomCreationPage />}/>
        <Route path="/managment/users" element={<UserManagmentPage />}/>
        <Route path="/managment/users/:userId" element={<UserPage />}/>
      </Route>
    )
  )

  return (
    <div style={{height: '100%'}}>
      <RouterProvider router={router} />
    </div>
  );
}

export default Router;