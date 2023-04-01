import React from 'react';
import { Outlet } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SizeBarDrawer from './SizeBarDrawer.component';


export default function NavBarLayout() {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" onClick={() => { setOpen(true) }} color="inherit">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Outlet />
        </div>
      </main>
      <SizeBarDrawer open={open} setOpen={setOpen} />
    </div>
  );
}