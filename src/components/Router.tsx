import React from 'react';
import * as ReactDOM from "react-dom";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider, Route
} from "react-router-dom";
import NavBarLayout from './Layout/NavBar/NavBar.component';
import ProcessCreation from './Process/ProcessCreation.component';
import ProcessList from './Process/ProcessList/ProcessList.componet';

const Router = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<NavBarLayout />}>
        <Route path="/home" element={<About />} />
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
function About() {
  return <h2>Home</h2>;
}

export default Router;