import './Body.css';
import * as React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import RoomsList from '../components/Room/RoomsList';
import Bookings from '../components/Bookings/BookingsView';
import CreateRoom from '../components/Room/CreateRoom';
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
import ProfileView from '../components/Profile/ProfileView';
import {useNavigate} from 'react-router-dom';

const drawerWidth = 240;


function Logout() {
    const navigate = useNavigate();
    localStorage.removeItem('user');
    navigate('/');
}

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
                <Link className="white list none" underline="none" to="/mi-perfil">Usuario</Link>
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
                <Link className="white list none" underline="none" to="/reservas">Reservas</Link>
                </ListItemText>
            </ListItem>
            <ListItem button>
              <ListItemIcon className="white list">
                <LibraryMusicIcon fontSize="medium" />
              </ListItemIcon>
              <ListItemText>
                <Link className="white list none" underline="none" to="/mis-salas">Mis salas</Link>
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
                <Link className="white list none" underline="none" to="/" onClick={Logout}>Cerrar sesi??n</Link>
                </ListItemText>
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <Box className="main" component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Routes>
        <Route path="/mi-perfil" element={<ProfileView />}/>  
        <Route path="/reservas" element={<Bookings />}/>
        <Route path="/mis-salas" element={<RoomsList />}/>
        <Route path="/" element={<App />}/>
        <Route path="*" element={<App />}/>
        <Route path="/crear-sala" element={<CreateRoom />}/>
      </Routes>
      </Box>
    </Box>
  );
}
