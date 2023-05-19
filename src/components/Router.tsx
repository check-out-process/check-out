import React, { useContext, useEffect } from 'react';
import * as ReactDOM from "react-dom";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider, Route
} from "react-router-dom";
import NavBarLayout from './Layout/NavBar/NavBar.component';
import LogInPage from './LogInPage/logInPage.component';
import ProcessSectorsList from './ProcessPage/Sectors/ProcessSectorsList.component';
import ProcessCreation from './ProcessCreationPage/ProcessCreation.component';
import ProcessList from './ProcessPage/ProcessList.componet';
import SectorInstancePage from './ProcessPage/Sectors/SectorInstancePage/SectorInstancePage.component';
import { getUser } from '../services/Token.service';
import { UserContext } from '../context/UserContext';
import ScanBedPage from './ProcessPage/ScanBed/ScanBedPage.component';

const Router = () => {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    const user = getUser();
    setUser(user);
  }, [])

  const router = createBrowserRouter(
    createRoutesFromElements(
      user ?
        <Route path="/" element={<NavBarLayout />}>
          <Route path="/" element={<ProcessList />} />
          <Route path="/processes/:processId/sectors" element={<ProcessSectorsList />} />
          <Route path="/processes/:processId/sectors/:sectorId" element={<SectorInstancePage />} />
          <Route path="/processcreation" element={<ProcessCreation />} />
          <Route path="/scanBed" element={<ScanBedPage />} />
        </Route> :
        <Route >
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