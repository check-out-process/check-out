import React from 'react';
import Box from '@mui/material/Box';
import {Outlet,Link} from 'react-router-dom'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const NavBarLayout =() =>{

    const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

    return (
      <Box sx={{ width: '100%' }}>
        <header>
            <Tabs value={value} centered onChange={handleChange}>
                <Tab label="תהליכים" to='/' component={Link}/>
                <Tab label="עמוד מנהלים" to='/home' component={Link} />
                <Tab label="פתיחת תהליך" to='/processcreation' component={Link} />
                <Tab label="עמוד ראשי" to='/hhh' component={Link} />
            </Tabs>
        </header>
        <main>
            <Outlet/>
        </main>
        
      </Box>
    );
   
}
export default NavBarLayout;