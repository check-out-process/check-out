import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import * as ReactDOM from "react-dom";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,Route
} from "react-router-dom";
import NavBarLayout from './Layout/NavBar';
import ProcessCreation from './Process/ProcessCreation';

const Router =  () =>{
    
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<NavBarLayout/>}>
                <Route path="/home" element={<About/>}/>
                <Route path="/processcreation" element={<ProcessCreation/>}/>
            </Route>
        )
    )
  
    return    (
      <Box>
        <RouterProvider router={router} />      
      </Box>
    );
   
}
function About() {
    return <h2>Home</h2>;
  }

export default Router;