import {useState } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Body from './pages/Body';
import Login from './pages/Login';

function AuthDiv(props) {
  return props.isAuth ? props.children : null;
}

function AuthRoute(props) {
  return props.isAuth ? props.children : <Navigate to="/" />;
}

function App() {
  const [isAuth, setAuth] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="App">
      <AuthDiv isAuth={isAuth}>  
        <Body />
      </AuthDiv> 
      <Routes>
        <Route path="/" element={<Login onLogin={()=> {setAuth(true); navigate("/reservas")}} />} />
        <Route path="/panel" exact element={<AuthRoute isAuth={isAuth}><Body /> </AuthRoute> }/>
      </Routes>
    </div>
  );
}

export default App;
