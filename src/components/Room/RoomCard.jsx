import './RoomCard.css';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


function RoomCard(props){
  return(
      <ul>
        {props.items.map(function(room){
          return (
            <li key={room._id} className='listado'>
                <Card className="cards">
                    <CardMedia
                        component="img"
                        alt={room.name}
                        height="140"
                        image={"https://usala-api.herokuapp.com/api/img/" + room.img}
                        className="img-card"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="headline" component="h2">
                            {room.name}
                        </Typography>
                        <Typography component="p">
                            Dirección: {room.address}
                        </Typography>
                        <Typography component="p">
                            {room.description}
                        </Typography>
                    </CardContent>
                </Card>   
            </li>
          )
        })}
      </ul>
  )
}

export default RoomCard