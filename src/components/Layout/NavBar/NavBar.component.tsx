import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';
import SideBarDrawer from './SideBarDrawer.component';
import { createStyles, makeStyles } from '@material-ui/core';
import { User } from '@checkout/types';
import { getUser } from '../../../services/Token.service';


export interface INavBarLayoutProps {
  user: User
}
const useStyles = makeStyles(() =>
  createStyles({
    height: {
      height: '100%',
    }
  }),
);

  export const NavBarLayout: React.FC<INavBarLayoutProps> = ({user }) => {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const navigate = useNavigate();


  const onProfileClick = () => {
    const user: User = getUser()
    navigate(`/managment/users/${user.id}`);
  }

  return (
    <div className={classes.height}>
      <AppBar position="static">
        <Toolbar style={{justifyContent:'space-between'}}>
          <IconButton style={{marginRight:'-15px'}} edge="start" onClick={() => { setOpen(true) }} color="inherit">
            <MenuIcon style={{ fontSize: 35 }}/>
          </IconButton>

          <IconButton style={{marginLeft:'-15px'}} edge="end" onClick={onProfileClick} color="inherit">
            <PersonIcon style={{ fontSize: 35 }}/>
          </IconButton>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.height}>
          <Outlet />
        </div>
      </main>
      <SideBarDrawer open={open} setOpen={setOpen} user={user}/>
    </div>
  );
}

export default NavBarLayout; 