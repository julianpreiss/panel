import React from "react";
import { useState } from "react";
import {
  Paper,
  Button,
  Typography,
  Link,
} from "@material-ui/core";
import IconButton from "@mui/material/IconButton";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import "./Login.css";

import { Navigate } from 'react-router';
import { useAuth } from '../context/Auth.Context'

function Login(props) {
  const { state: AuthState, dispatch: AuthDispatch } = useAuth()
  const [email, setEmail] = useState("");

  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto",
  };
  const btnstyle = { margin: "8px 0" };

  function onLoginSubmit(event) {
    event.preventDefault();

    fetch("http://localhost:8001/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: values.password,
      }),
    })
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        console.log(data);
        /*if(data.status === "ok"){
          props.onLogin(data.user, <Navigate to="/panel/reservas" />);
        }*/
        localStorage.setItem('token', data.token)
        localStorage.setItem('user', JSON.stringify(data.user))
        AuthDispatch({ type: 'LOGIN', payload: data.user })
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  return (
    <Card className="login">
      <Paper className="margin" elevation={10} style={paperStyle}>
        <div className="center">
          <img src={"/logo.png"} alt="logo" />
        </div>
        <form onSubmit={(e) => onLoginSubmit(e)}>
          <CardContent>
            <FormControl sx={{ m: 1, width: "27ch" }} variant="standard">
              <InputLabel htmlFor="standard-adornment-email">
                Email
              </InputLabel>
              <Input
                id="standard-adornment-email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl sx={{ m: 1, width: "27ch" }} variant="standard">
              <InputLabel htmlFor="standard-adornment-password">
                Contraseña
              </InputLabel>
              <Input
                id="standard-adornment-password"
                required
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </CardContent>
          <CardActions sx={{ m: 1, width: "27ch" }} className="cardAction">
            <Button
              className="btn-usala"
              type="submit"
              variant="contained"
              size="small"
              style={btnstyle}
              fullWidth
              onSubmit={(e) => onLoginSubmit(e)}
            >
              Iniciar Sesión
            </Button>
          </CardActions>
        </form>
        <Typography className="center p-1">
          <Link href="#" underline="none" className="link">
            Registrarse acá
          </Link>
        </Typography>
        <Typography className="center p-1">
          <Link href="#" underline="none" className="link">¿Has olvidado la contraseña?</Link>
        </Typography>
      </Paper>
    </Card>
  );
}

export default Login;
