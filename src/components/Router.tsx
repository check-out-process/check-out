import React from 'react';
import * as ReactDOM from "react-dom";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider, Route
} from "react-router-dom";
import HomePage from './HomePage/homePage.component';
import NavBarLayout from './Layout/NavBar/NavBar.component';
import LogInPage from './LogInPage/logInPage.component';
import ProcessCreation from './Process/ProcessCreation.component';

const Router = () => {
  const [logedIn, setLogedIn] = React.useState(false); //get it from context/store that when refresh sty true

  const router = createBrowserRouter(
    createRoutesFromElements(
      logedIn ?
        <Route path="/" element={<NavBarLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/processcreation" element={<ProcessCreation />} />
        </Route>
        : <Route >
          <Route path="/" element={<LogInPage setLogedIn={setLogedIn} />} />
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