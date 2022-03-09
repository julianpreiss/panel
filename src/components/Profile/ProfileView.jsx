import React from 'react'
import {useState , useEffect} from 'react'
import './ProfileView.css'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
//import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';


function ProfileView(props) {

    const [values, setValues] = useState({
        id: "",
        name: "",
        last_name: "",
        email: "",
        user_name: "",
        date_birth: "",
        phone: "",
    });


    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'))
        console.log(user + 'con ID: ' + user._id) 
        fetch('https://usala-api.herokuapp.com/api/users/id?id=' + user._id)
        .then(function(res){
            return res.json()
        })
        .then((user) => {
            setValues({
                id: user._id,
                name: user.name,
                last_name: user.last_name,
                email: user.email,
                user_name: user.user_name,
                date_birth: user.date_birth,
                phone: user.phone,
            })
            console.log(user._id)
        })
    }, [])

    const handleInputChange = (event) => {
        console.log(event.target.value)
        event.preventDefault()
        setValues({
            ...values,
            [event.target.name]: event.target.value
        })
    }
    
    const actualizarDatos = (event) => {
        const user = JSON.parse(localStorage.getItem('user'))
        event.preventDefault()
        fetch('https://usala-api.herokuapp.com/api/users/id?id=' + user._id , {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        })
        .then(function(res){
            return res.json()
        })
        .then((user) => {
            console.log(user)
        })
    }



    return (
        <div className="ProfileView">
            <Grid container spacing={4}>
                <Grid item xs={4}>
                    <Card >
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                    <Avatar alt="Remy Sharp" src="https://thumbs.dreamstime.com/b/rock-guitarist-19113213.jpg" className="img-usuario" />
                                    <Typography variant="h5" component="h3" className='dato-usuario'>
                                       Hola {values.name} {values.last_name} !
                                    </Typography>
                                    <Typography variant="body2" component="p" sx={{my: 2}} className="dato-usuario">
                                        {values.email}
                                    </Typography>
                                </CardContent>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
                <Grid item xs={8}>
                    <Card sx={{ minWidth: 275, maxWidth: 900 }}>
                        <CardMedia
                            component="img"
                            height="100"
                            image="https://cdn.dribbble.com/users/18196/screenshots/1948022/media/5fd82e182893f4acd835ce78ca74101e.jpg?compress=1&resize=800x600&vertical=top
                            "
                            alt="User Avatar"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h4" component="div">
                            Editar mi perfil
                        </Typography>

                        <form action="POST" className="formulario-usuario" onSubmit={actualizarDatos}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        id="name"
                                        label="Nombre"
                                        name="name"
                                        value={values.name}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        id="last_name"
                                        label="Apellido"
                                        name="last_name"
                                        value={values.last_name}
                                        onChange={handleInputChange}
                                        required
                                        className='input-usuario'
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        id="email"
                                        label="Email"
                                        name="email"
                                        value={values.email}
                                        onChange={handleInputChange}
                                        required
                                        className='input-usuario'
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        id="user_name"
                                        label="Nombre de usuario"
                                        name="user_name"
                                        value={values.user_name}
                                        onChange={handleInputChange}
                                        required
                                        className='input-usuario'
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        id="date_birth"
                                        label="Fecha de nacimiento"
                                        name="date_birth"
                                        value={values.date_birth}
                                        onChange={handleInputChange}
                                        required
                                        className='input-usuario'
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        id="phone"
                                        label="Teléfono"
                                        name="phone"
                                        value={values.phone}
                                        onChange={handleInputChange}
                                        required
                                        className='input-usuario'
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Button variant="contained" className='btn-panel' type="submit">
                                        Actualizar
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                        </CardContent>
                        </Card> 
                    </Grid>
            </Grid>            
        </div>
    );
}

export default ProfileView;