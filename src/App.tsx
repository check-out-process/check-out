import React, { useContext, useEffect } from 'react'
import './App.css';
import Router from './components/Router/Router';
import { SnackbarProvider } from 'notistack';
import { UserContext } from './context/UserContext';

export default function App() {
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    const userValue = localStorage.getItem('user');
    setUser(JSON.parse(userValue));
  }, [])

  return (
    <div className="App">
      <SnackbarProvider maxSnack={3} autoHideDuration={2000}>
        <Router />
      </SnackbarProvider>
    </div>
  );
}
