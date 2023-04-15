import React from 'react'
import './App.css';
import Router from './components/Router';
import { SnackbarProvider} from 'notistack';
import Slide, { SlideProps } from '@material-ui/core/Slide';




export default function App() {
  return (
    <div className="App">
      <SnackbarProvider maxSnack={3} autoHideDuration={5000}>
        <Router />
      </SnackbarProvider>
    </div>
  );
}
