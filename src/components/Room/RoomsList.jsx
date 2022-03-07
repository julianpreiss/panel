import './RoomsList.css'

import React from 'react'
import {useState , useEffect} from 'react'
import RoomCard from './RoomCard'
import { Link } from 'react-router-dom'
 
function RoomsListView(props) {
    
    const [rooms, setRooms] = useState({
        list: [],
        loading: false,
        filter: '',
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
                filter: '',
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
                <button className='btn btn-usala'><Link to="/crear-sala">Cargar Sala</Link></button>
            </div>
        </div>
    )
}

export default RoomsListView