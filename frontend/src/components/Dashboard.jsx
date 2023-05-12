import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import Items from './Items';
import {Button} from '@mui/material';

import {useNavigate} from 'react-router-dom';

const drawerWidth = 300;

/**
 * @return {void}
 */
export default function Dashboard() {
  const navigate = useNavigate();

  const navigateToCreateItem = () => {
    // 👇️ navigate to /
    navigate('/product/create');
  };

  return (
    <Box sx={{display: 'flex'}}>
      <CssBaseline />
      <AppBar
        position='fixed'
        sx={{zIndex: (theme) => theme.zIndex.drawer + 1, bgcolor: 'white',
          color: 'black'}}
      >
        <Toolbar>
          <Typography variant='h6' noWrap component='div'>
            E-Commerce
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant='permanent'
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
      >
        <Toolbar />
        <Box sx={{overflow: 'auto'}}>
          <List>
            <ListItem disablePadding>
              <Button variant="contained"
                onClick={navigateToCreateItem}>Create New Product</Button>
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <Box component='main' sx={{flexGrow: 1, p: 3}}>
        <Toolbar />
        <Items/>
      </Box>
    </Box>
  );
}
