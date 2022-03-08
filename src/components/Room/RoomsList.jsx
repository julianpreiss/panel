import './RoomsList.css'

import React from 'react'
import {useState , useEffect} from 'react'
import RoomCard from './RoomCard'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
 
function RoomsListView(props) {
    
    const [rooms, setRooms] = useState({
        list: [],
        loading: false,
    });

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'))
        fetch('http://localhost:8001/api/rooms/user_id?user_id=' + user._id)
        .then(function(res){
            return res.json()
        })
        .then((rooms) => {
            setRooms({
                list: rooms,
                loading: false,
            })
        })
    }, [])
    

    return (
        <div className="rooms-list">
            <div className="rooms-list-header">
                <h1>Listado de Salas</h1>
                {rooms.loading ? <p>Cargando...</p> : null}
            </div>
            <RoomCard items={rooms.list}/>
            <div>
                <Button variant="contained" className='btn-panel' type="submit">
                    <Link to="/crear-sala" class="btn-panel">Cargar Sala</Link>
                </Button>
            </div>
        </div>
    )
}

export default RoomsListView