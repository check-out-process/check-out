import React from 'react';
import { Outlet } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SideBarDrawer from './SideBarDrawer.component';
import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    height: {
      height: '100%',
    }
  }),
);

export default function NavBarLayout() {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  return (
    <div className={classes.height}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" onClick={() => { setOpen(true) }} color="inherit">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <main className={classes.height}>
        <div className={classes.height}>
          <Outlet />
        </div>
      </main>
      <SideBarDrawer open={open} setOpen={setOpen} />
    </div>
  );
}