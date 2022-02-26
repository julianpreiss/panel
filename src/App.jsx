import { useEffect, useState } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Body from './pages/Body';
import Login from './pages/Login';
import { useAuth } from './context/Auth.Context';

function AuthDiv(props) {
  const { state } = useAuth();
  return state.isAuthenticated ? props.children : null;
}

function AuthRoute(props) {
  const { state } = useAuth();
  return state.isAuthenticated ? props.children : <Navigate to="/" />;
}

function App() {
  const { state: AuthState, dispatch: AuthDispatch } = useAuth();
  const [isAuth, setAuth] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if(AuthState.isAuthenticated) {
      navigate('/panel/reservas');
    } else {
      navigate('/');
    }
  } , [AuthState]);

  return (
    <div className="App">
      <AuthDiv isAuth={isAuth}>  
        <Body />
      </AuthDiv> 
      <Routes>
        <Route path="/" element={<Login onLogin={()=> {setAuth(true); navigate('/panel')} }  />} />
        <Route path="/panel" exact element={<AuthRoute isAuth={isAuth}><Body /></AuthRoute>} />
      </Routes>
    </div>
  );
}

export default App;
