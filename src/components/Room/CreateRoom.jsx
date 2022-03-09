import React from "react";
import { useState } from "react";
import {useNavigate} from 'react-router-dom';
import './CreateRoom.css'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';

function CreateRoom(props){

    const user = JSON.parse(localStorage.getItem('user'))
    const navigate = useNavigate();
    
        const [values, setValues] = useState({
            user_id: user._id,
            name: "",
            description: "",
            address: "",
            district: "",
            city: "Ciudad Autónoma de Buenos Aires",
            img: "",
            price: "",
            meters: "",
            type: [],
            opening: "",
            closing: "",
        });
    
        const handleInputChange = (event) => {
            console.log(event.target.value)
            event.preventDefault()
            setValues({
                ...values,
                [event.target.name]: event.target.value
            })
        }
    
        const crearSala = (event) => {
            event.preventDefault()
            fetch('http://localhost:8001/api/rooms', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            })
            .then(function(res){
                navigate('/mis-salas')
            })
        }


    
        return (
            <div className="rooms-list">
                <div className="rooms-list-header">
                    <h1>Crear Sala</h1>
                </div>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <form action="POST" onSubmit={crearSala} className="formulario-crear-sala">
                                <label>Nombre</label>
                                <input type="text" className="form-control" name="name" onChange={handleInputChange} />
                                <label>Descripcion de la sala</label>
                                <input type="text" className="form-control" name="description" onChange={handleInputChange} />
                                <label>Dirección</label>
                                <input type="text" className="form-control" name="address" onChange={handleInputChange} />
                                <label>Bario / Localidad</label>
                                <input type="text" className="form-control" name="district" onChange={handleInputChange} />
                                <label>Ciudad</label>
                                <input type="text" className="form-control" name="city" value="Ciudad Autónoma de Buenos Aires" disabled />
                                <label>Imagen</label>
                                <input type="text" className="form-control" name="img" onChange={handleInputChange} />
                                <label>Precio</label>
                                <input type="number" className="form-control" name="price" onChange={handleInputChange} />
                                <label>Metros</label>
                                <input type="number" className="form-control" name="meters" onChange={handleInputChange} />
                                <label>Tipo de sala</label>
                                <Select 
                                    native
                                    name="type"
                                    onChange={handleInputChange}
                                    inputProps={{
                                        name: 'type',
                                        id: 'type',
                                    }}
                                >
                                    <option value="" />
                                    <option value="Estudio de grabación">Estudio de grabación</option>
                                    <option value="Sala de ensayo">Sala de ensayo</option>
                                </Select>
                                <label>Horario de apertura</label>
                                <input type="time" className="form-control" name="opening" onChange={handleInputChange} />
                                <label>Horario de cierre</label>
                                <input type="time" className="form-control" name="closing" onChange={handleInputChange} />
                            <Button variant="contained" className='btn-panel-crear' type='submit'>Crear sala</Button>
                        </form>
                    </Grid>
                </Grid>
            </div>
        )

}

export default CreateRoom