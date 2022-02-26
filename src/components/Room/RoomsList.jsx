import './RoomsList.css'

import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete'
import {Icon, CardMedia} from '@material-ui/core'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
//import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



class RoomsListView extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            list:[]
        }
    }

    componentDidMount(){
        fetch('http://localhost:8001/api/rooms')
        .then(function(res){
            return res.json()
        })
        .then((rooms) => {
            this.setState({
                list: rooms
            })
        })
    }

    render(){
        const items = this.state.list.map(function(room){
            return <li key={room._id}>                    
            <Card sx={{ maxWidth: 345, marginBottom: 5 }}>
                <CardMedia title="" image="" src=""/>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {room.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {room.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Editar</Button>
            </CardActions>
            </Card></li>
        })

        return (
            <div className="RoomsListView">
                <h1>Lista de Salas</h1>
                
                <ul>
                    {items}

                </ul>
                <DeleteIcon/>
                <Icon>star</Icon>


            </div>
        );
    }
}

export default RoomsListView

/*import './RoomsList.css'

import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete'
import {Icon} from '@material-ui/core'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



class RoomsListView extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            list:[]
        }
    }

    componentDidMount(){
        fetch('http://localhost:8001/api/rooms')
        .then(function(res){
            return res.json()
        })
        .then((rooms) => {
            this.setState({
                list: rooms
            })
        })
    }

    render(){
        const items = this.state.list.map(function(room){
            return <li key={room._id}>{room.name}</li>
        })

        return (
            <div className="RoomsListView">
                <h1>Lista de Salas</h1>
                
                <ul>
                    {items}
                </ul>
                <DeleteIcon/>
                <Icon>star</Icon>

                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image="/static/images/cards/contemplative-reptile.jpg"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                    </Card>
            </div>
        );
    }
}

export default RoomsListView*/