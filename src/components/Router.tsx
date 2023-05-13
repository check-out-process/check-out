import React, { useEffect, useState } from 'react';
import * as ReactDOM from "react-dom";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider, Route
} from "react-router-dom";
import HomePage from './HomePage/homePage.component';
import NavBarLayout from './Layout/NavBar/NavBar.component';
import LogInPage from './LogInPage/logInPage.component';
import ProcessSectorsList from './ProcessPage/Sectors/ProcessSectorsList.component';
import ProcessCreation from './ProcessCreationPage/ProcessCreation.component';
import ProcessList from './ProcessPage/ProcessList.componet';
import SectorInstancePage from './ProcessPage/Sectors/SectorInstancePage/SectorInstancePage.component';
import { getUser } from '../services/Token.service';

const Router = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    const user = getUser();
    setUser(user);
  }, [])

  const router = createBrowserRouter(
    createRoutesFromElements(
      user ? <Route path="/" element={<NavBarLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/processes" element={<ProcessList />} />
        <Route path="/processes/:processId/sectors" element={<ProcessSectorsList />} />
        <Route path="/processes/:processId/sectors/:sectorId" element={<SectorInstancePage />} />
        <Route path="/processcreation" element={<ProcessCreation />} />
      </Route> : <Route >
        <Route path="/" element={
          <LogInPage />
        } />
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