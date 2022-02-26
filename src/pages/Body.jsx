import './Body.css';
import * as React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import RoomsList from '../components/Room/RoomsList';
import Bookings from '../components/Bookings/BookingsView';
import Profile from '../components/Profile/ProfileView';
import App from'../App';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';

const drawerWidth = 240;

export default function ClippedDrawer() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} className="AppBar">
        <Toolbar>
          <img src={'/logo-bg-min.jpg'} alt="logo" />
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }} className="Box white">
        <List className="list-menu">
            <ListItem button>
              <ListItemIcon className="white list">
                <PersonIcon fontSize="medium" />
              </ListItemIcon>
              <ListItemText>
                <Link className="white list none" underline="none" to="/panel/mi-perfil">Usuario</Link>
                </ListItemText>
            </ListItem>
          </List>
          <Divider />
          <List className="list-menu">
            <ListItem button>
              <ListItemIcon className="white list">
                <EventAvailableIcon fontSize="medium" />
              </ListItemIcon>
              <ListItemText>
                <Link className="white list none" underline="none" to="/panel/reservas">Reservas</Link>
                </ListItemText>
            </ListItem>
            <ListItem button>
              <ListItemIcon className="white list">
                <LibraryMusicIcon fontSize="medium" />
              </ListItemIcon>
              <ListItemText>
                <Link className="white list none" underline="none" to="/panel/mis-salas">Mis salas</Link>
                </ListItemText>
            </ListItem>
          </List>
          <Divider />
          <List className="list-menu">
            <ListItem button>
              <ListItemIcon className="white list">
                <LogoutIcon fontSize="medium" />
              </ListItemIcon>
              <ListItemText>
                <Link className="white list none" underline="none" to="/">Cerrar sesión</Link>
                </ListItemText>
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <Box className="main" component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Routes>
        <Route path="/panel/mi-perfil" element={<Profile />}/>  
        <Route path="/panel/reservas" element={<Bookings />}/> 
        <Route path="/panel/mis-salas" element={<RoomsList />}/>
      </Routes>
      </Box>
    </Box>
  );
}
