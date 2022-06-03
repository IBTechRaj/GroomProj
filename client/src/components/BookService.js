import * as React from 'react';
import { useState, useEffect} from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';


import DatePicker from "react-datepicker";
import {  Row, Col } from 'react-bootstrap'
import "react-datepicker/dist/react-datepicker.css";
import TimeSlots from "./TimeSlots";
import axios from 'axios';

// export default function BookService() {


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'left',
  color: theme.palette.text.secondary,
  height: 200,
  lineHeight: '60px',
}));

const lightTheme = createTheme({ palette: { mode: 'light' } });

export default function Elevation(props) {

    console.log('ele props', props)
const [service, setService]=useState('Choose Service')
const [showTime, setShowTime]=useState(false)
const [apptDate, setApptDate]=useState()
const [apptTime, setApptTime]=useState('0:00')
// const [todayAppts, setTodayAppts]=useState([])

let handleServiceChange = (e) => {
  setService(e.target.value)
}




  const setDateShowTime=()=>{
    setShowTime(true)
    setApptDate(startDate)
    const aptDate=startDate.toLocaleDateString('ko-KR', { year:"numeric", month:"numeric",day:"numeric"}).replace(/\. /g,"-");
    // const aptDate3=aptDate.replace(".","");
    const aptDate4=startDate.toUTCString()
    const jwt = localStorage.getItem('token');
    console.log('dt fmt', aptDate4)
    
    
  }

//   useEffect(() => {
//     setDateShowTime()
// },[todayAppts])

const createAppointment=(e)=>{
  e.preventDefault()
  const appointment = {
    apptdate: startDate,
    appttime: apptTime,
    service: service,
    salon_id: props.salonId,
    user_id: props.userId
  }
  console.log('appt data', appointment)
    const jwt = localStorage.getItem('token');
    const apptUrl = 'http://localhost:3001/appointments';
 
    axios.post(apptUrl,  appointment , {
      headers: { Authorization: `Bearer ${jwt}` },
    })
      .then(response => {
        if (response.status === 201) {
          console.log('Appointment Added')
          // setServicesBtn(!servicesBtn)
         }
      })
      }

const [startDate, setStartDate] = useState(new Date());
  return (
    <Grid container spacing={2}>
      {/* {[lightTheme, darkTheme].map((theme, index) => ( */}
        <Grid item xs={6} >
          <ThemeProvider theme={lightTheme}>
            <Box
              sx={{
                p: 2,
                bgcolor: 'background.default',
                display: 'grid',
                gridTemplateColumns: { md: '1fr 1fr' },
                gap: 2,
              }}
            >
              {/* {[ 8].map((elevation) => ( */}
                <Item  elevation={8}>
                  {/* {`elevation=${8}`} */}
                            <Card 
                            sx={{ minWidth: 275 }}
                            >
                            <CardContent>
                            <Typography variant="h5" sx={{ mb: 1.5 }} 
                            // component="div"
                            >
                                Booking Details
                                </Typography>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                               Salon Name : {props.salonName}
                                </Typography>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                               Service : 
                               <select onChange={handleServiceChange}> 
      <option value="choose">  </option>
            {/* Mapping through each fruit object in our fruits array
          and returning an option element with the appropriate attributes / values.
         */}
      {props.services.map((service) => <option key={service.id} value={service.stype}>{service.stype}</option>)}
    </select>
                               {/* {props.services.map((service)=> */}
                             
                          
                       
                             
                         
                                </Typography>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                               Client : {props.clientName}
                                </Typography>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Booking Date :
                                {/* <div> */}
                                  <Row >
                                    <Col xs={6} style={{marginLeft: 200, position: 'absolute'}}>
                                      
                                      {showTime ? <TimeSlots setApptTime={setApptTime} setShowTime={setShowTime} startDate={startDate} salonId={props.salonId}/> : null}
                                        { console.log('dt,tm',  startDate.toLocaleDateString(), apptTime)}
                                      </Col>
                                    <Col xs={6} >
                                    <DatePicker
                                          selected={startDate}
                                          onChange={(date) => setStartDate(date)}
                                          shouldCloseOnSelect={false}
                                          onSelect={setDateShowTime}
                                        />
                                    </Col>
                                    
                                  </Row>
                                {/* </div> */}
                                </Typography>
                                <Typography  sx={{ fontSize: 14 }} color="text.secondary">
                               Booking Time : {apptTime}
                                </Typography>
                            
                            </CardContent>
                            <CardActions>
                                <Button 
                                size="small" 
                                variant="outlined"
                                onClick={()=>props.setBookingVisible(false)}
                                >Cancel</Button>
                                <Button size="small" variant="contained"
                                onClick={createAppointment}
                                >Confirm</Button>
                            </CardActions>
                            </Card>
                </Item>
              {/* ))} */}
            </Box>
          </ThemeProvider>
        </Grid>
      )
      {/* )} */}
    </Grid>
  );
}

// }
// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     •
//   </Box>
// );

// export default function BasicCard() {
//   return (
//     <Card sx={{ minWidth: 275 }}>
//       <CardContent>
//         <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//           Word of the Day
//         </Typography>
//         <Typography variant="h5" component="div">
//           be{bull}nev{bull}o{bull}lent
//         </Typography>
//         <Typography sx={{ mb: 1.5 }} color="text.secondary">
//           adjective
//         </Typography>
//         <Typography variant="body2">
//           well meaning and kindly.
//           <br />
//           {'"a benevolent smile"'}
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>
//   );
// }



// import React, { useState } from "react";
// import DatePicker from "react-datepicker";
// import {  Row, Col } from 'react-bootstrap'
// import "react-datepicker/dist/react-datepicker.css";
// import TimeSlots from "./TimeSlots";

// export default function BookService() {
// const [showTime, setShowTime]=useState(false)
// const [apptDate, setApptDate]=useState()
// const [apptTime, setApptTime]=useState()

// const setDateShowTime=()=>{
//   setShowTime(true)
//   setApptDate(startDate)
// }
//   const [startDate, setStartDate] = useState(new Date());
//   return (
//   //  <div>
//      <Row >
// <Col xs={6} style={{marginLeft: 200, position: 'absolute'}}>
          
//           {showTime ? <TimeSlots setApptTime={setApptTime} setShowTime={setShowTime} /> : null}
//             { console.log('dt,tm',  startDate, apptTime)}
//           </Col>
//         <Col xs={6} >
//         <DatePicker
//               selected={startDate}
//               onChange={(date) => setStartDate(date)}
//               shouldCloseOnSelect={false}
//               onSelect={setDateShowTime}
//             />
//         </Col>
        
// </Row>
    

 
 
//   );
// };