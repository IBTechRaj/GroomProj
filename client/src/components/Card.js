import * as React from 'react';
import { useState, useEffect} from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios'
// import { dividerClasses } from '@mui/material';
import BookService from './BookService';
// import { Modal } from 'react-responsive-modal';

 export default function OutlineCard (props){
  //  console.log('card props', props)
  console.log('card props', props)
  const { salon } = props;
  const { userName }=props
const [services, setServices]=useState([{}])
const [currentServices, setCurrentServices]=useState([])
const [bookingVisible, setBookingVisible]=useState(false)
const [error, setError] = useState(null);
const [loading, setLoading] = useState(true);

const [booking, setBooking]=useState({apptDate: "", apptTime: ""})
const servicesUrl = 'http://localhost:3001/services/';

const filteredServices = (services) =>{
const curServ  = services.filter(
  (service) => service.salon_id === salon.id
);
// console.log('curServ', curServ)
// setCurrentServices(curServ)
return curServ
}

const handleBooking = ()=>{
  // (props.userId)?
  setBookingVisible(true)
  // alert('Login or Signup to Book Your Service')
}
useEffect(()=>{

  const getServicesData = async () => {
    try {
      const response = await axios.get(
        servicesUrl
      );
      setServices(response.data);
      console.log('dat', response.data)
      console.log('services', services)
    
  } catch (err) {
    setError(err.message);
    setServices(null);
  } finally {
    setLoading(false);
  }
};

// const getCurServices = (services)=>{
//   const asArray = Object.entries(services);

//   const curServ = asArray.filter(([salon_id, value]) =>  salon_id === salon.id);
//     console.log('cur ser', curServ)
//     setCurrentServices(curServ)
// }



// const getServices=()={
//   axios.get(servicesUrl)
//   .then(({ data }) => {
//     setServices(data)
//     console.log('dataa', data)
//     console.log('services', services)
    
//   })
// }
getServicesData()
// getCurServices(services)
//   const curServ = services.filter(function (el)
// {
//   console.log('el', el)
//   return el.salon_id === salon.id
// }
// );
//     console.log('cur ser', curServ)
//     setCurrentServices(curServ)
},[])
  


  // Get Salon.services and set them in services
  return (
    <>
        <Card 
        sx={{ maxHeight: 900 }}
        >
      <CardMedia
        component="img"
        height="240"
        image={salon.get_image_url}
        alt="green iguana"
      />
       <div className='center py-1' style={{marginLeft: 200, position: 'absolute'}}>
    {bookingVisible &&
        <BookService 
        booking={booking} 
        setBooking={setBooking} 
        salonId={salon.id}
        salonName={salon.name} 
        services={filteredServices(services)} 
        clientName={userName} 
        userId={props.userId}
        setBookingVisible={setBookingVisible}
        />}
        {/* {console.log('bkg', booking)} */}
        </div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {salon.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {salon.address1},{salon.address2}, {salon.city}
        </Typography>
        <Typography variant="body2" color="text.secondary">
{/* {()=>filterServices(services)} */}
        {filteredServices(services).map((service) => 
         
            <li key = {service.id}>
             {service.id} - {service.stype} :  {service.sprice}
            </li>
            
           
          )}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small"
        onClick={()=>handleBooking()}
        >Book Your Service</Button>
        
      </CardActions>
      
    </Card>
    {/* <Modal open={bookingVisible} onClose={!bookingVisible} centre> */}
   
      {/* </Modal> */}
      </>
  );
}

