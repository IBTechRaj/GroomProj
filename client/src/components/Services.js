import * as React from 'react';
import {useState} from 'react'
import axios from 'axios';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormLabel from '@mui/material/FormLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select, { SelectChangeEvent } from '@mui/material/Select';
// import SpaOutlinedIcon from '@mui/icons-material/SpaOutlined';
import MiscellaneousServicesOutlinedIcon from '@mui/icons-material/MiscellaneousServicesOutlined';
// import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { FormGroup } from '@mui/material';
import WorkTimings from './WorkTimings';


  

export default function Services(props) {

console.log('ssser', props)
        const [serviceName, setServiceName]=useState("")
const [serviceDuration, setServiceDuration]=useState("")
const [servicePrice, setServicePrice]=useState("0")
const [servicesBtn, setServicesBtn]=useState(false)

        const service={
            stype: serviceName,
            sduration: serviceDuration,
            sprice: servicePrice,
            salon_id: props.salonId,
          }
          
          const handleServiceSubmit = (e) => {
                e.preventDefault();
                console.log('servicesData', service)
              const jwt = localStorage.getItem('token');
              const url = 'http://localhost:3001/services';
              axios.post(url, { service }, {
                headers: { Authorization: `Bearer ${jwt}` },
              })
                .then(response => {
                  if (response.status === 201) {
                    console.log('Service Added')
                    // setServicesBtn(!servicesBtn)
                   }
                })
                
              };

              const [showServices, setShowServices]=useState(true)

const closeChild = () => {
    setShowServices(false)
};

const theme = createTheme();
        
return (
    <ThemeProvider theme={theme}>
<Container component="main" maxWidth="xs">
<CssBaseline />
<Box
  sx={{
    marginTop: 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }}
>
  <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
    <MiscellaneousServicesOutlinedIcon />
  </Avatar>
  <Typography component="h1" variant="h5">
    Services Details
  </Typography>
  <Box component="form" noValidate onSubmit={handleServiceSubmit} sx={{ mt: 3 }}>
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={4}>
        <TextField
          required
          fullWidth
          id="service_name"
          label="Service Name"
          value={serviceName}
          onChange={event => {
            setServiceName(event.target.value)
          }}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <TextField
          required
          fullWidth
          id="duration"
          label="Service Duration"
          value={serviceDuration}
          onChange={event => {
            setServiceDuration(event.target.value)
          }}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <TextField
          required
          fullWidth
          id="price"
          label="Price"
         value={servicePrice}
         onChange={event => {
          setServicePrice(event.target.value)
        }}
        />
      </Grid>
      
     
    </Grid>
    <Button
      type="submit"
      fullWidth
      variant="contained"
      sx={{ mt: 3, mb: 2 }}
      disabled={servicesBtn}
    >
      Add Services Details
    </Button>

    {/* <Button
      type="submit"
      fullWidth
      variant="contained"
      sx={{ mt: 3, mb: 2 }}
     onClick={setServicesBtn(!servicesBtn)}
    >
      Add Another Service
    </Button> */}
    <Button
      fullWidth
      variant="contained"
      sx={{ mt: 3, mb: 2 }}
      onClick={props.onClose}
     
    >
      Exit
    </Button>
    
  </Box>
</Box>
{showServices &&
        <WorkTimings salonId={props.salonId} setSalonId={props.setSalonId} onClose={closeChild}  />
}
</Container>
</ThemeProvider >
)
 }