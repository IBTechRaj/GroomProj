import * as React from 'react';
import { useState, useEffect} from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios'
import { dividerClasses } from '@mui/material';

 export default function OutlineCard (props){
  const { salon } = props;
const [services, setServices]=useState([])
const servicesUrl = 'http://localhost:3001/services/';

useEffect(()=>{

  const res=axios.get(servicesUrl)
  .then(({ data }) => {
    setServices(data)
    console.log('services', data)
  })
}, [])
  

  // Get Salon.services and set them in services
  return (
    <Card sx={{ maxWidth: 450 }}>
      <CardMedia
        component="img"
        height="240"
        image={salon.get_image_url}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {salon.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {salon.address1},{salon.address2}, {salon.city}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {services.map(service => (
          (salon.id === service.salon_id) ? 
            (<div>
              <p>{service.stype} : {service.sduration} - {service.sprice}</p>
            </div>) : null
            
           
          ))}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

