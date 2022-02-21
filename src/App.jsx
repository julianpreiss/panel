import {useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Body from './pages/Body';
import Login from './pages/Login';
import Bookings from './components/Bookings/BookingsView';

function AuthDiv(props) {
  return props.isAuth ? props.children : null;
}

function AuthRoute(props) {
  return props.isAuth ? props.children : <Navigate to="/" />;
}

function App() {
  const [isAuth, setAuth] = useState(false);

  return (
    <div className="App">
      <AuthDiv isAuth={isAuth}>  
        <Body />
      </AuthDiv> 
      <Routes>
        <Route path="/" element={<Login onLogin={()=> setAuth(true)} />} />
        <Route path="/panel" exact element={<AuthRoute isAuth={isAuth}><Body /> <Route path="/reservas" element={<Bookings />}/></AuthRoute>} />
      </Routes>
    </div>
  );
}

export default App;

//<Login />
//<NavBar />