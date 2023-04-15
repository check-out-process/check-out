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

const Router = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<NavBarLayout />}>
        <Route path="/home" element={<HomePage />} />
        <Route path="/processes" element={<ProcessList />} />
        <Route path="/processcreation" element={<ProcessCreation />} />
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