import * as React from 'react';
import {useEffect, useState} from 'react'
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
import SpaOutlinedIcon from '@mui/icons-material/SpaOutlined';
import MiscellaneousServicesOutlinedIcon from '@mui/icons-material/MiscellaneousServicesOutlined';
// import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { FormGroup } from '@mui/material';
import WorkTimings from './WorkTimings';

export default function EditData(props) {

    console.log('edit props', props)
    const [salonData, setSalonData] = useState({});
    const [serviceData, setServiceData] = useState(null);
    // const [worktimeData, setWorktimeData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    console.log('SalonDat', salonData)
  
    const [serviceName, setServiceName]=useState("")
const [serviceDuration, setServiceDuration]=useState("")
const [servicePrice, setServicePrice]=useState("0")

    // const [userSalon, setUserSalon]=useState(0)

    const salonurl = `http://localhost:3001/salons/${props.spSalonId}`;
    const userSalonUrl = `http://localhost:3001/salons/${props.spSalonId}`;
    const servicesUrl = 'http://localhost:3001/services';
    const serviceDelUrl = 'http://localhost:3001/services/'
    // const worktimesurl = 'http://localhost:3001/worktimes/${props.spSalonId}';

    // const [weekday, setWeekday]=useState(1)
    // const [opens, setOpens]=useState(0)
    // const [closes, setCloses]=useState(0)

    

  useEffect(()=> {

    const getUserSalon = async ()=> {
        try {
            const response = await axios.get(
              userSalonUrl
            );
            setSalonData(response.data);
            console.log('respd',response.data)
            // console.log('SalonDat', salonData)
          setError(null);
        } catch (err) {
            console.log('e',err.message)
          setError(err.message);
          setSalonData(null);
        } finally {
          setLoading(false);
        }
    }
    
    const getServicesData = async () => {
        try {
          const response = await axios.get(
            servicesUrl
          );
          setServiceData(response.data);
          console.log('ser', response)
        setError(null);
      } catch (err) {
          console.log('e',err.message)
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

  //  const getWorkTimeData = async () => {
  //       try {
  //         const response = await axios.get(
  //           worktimesurl
  //         );
  //         setWorktimeData(response.data);
  //         console.log('wor', response)
  //       setError(null);
  //     } catch (err) {
  //         console.log('e',err.message)
  //       setError(err.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
    // getSalonData()
    getUserSalon()
    getServicesData()
    // getWorkTimeData()
  }, [])

  const handleDelete= async(id) =>{
    try {
      const response = await axios.delete(
        serviceDelUrl+id
      );
      // setServiceData(response.data);
      console.log('del', response)
    setError(null);
  } catch (err) {
      console.log('e',err.message)
    setError(err.message);
  } finally {
    setLoading(false);
  }
  }
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSalonData({ ...salonData, [name]: value });
  } 
  
  // const handleWorktimeChange = (event) => {
  //   const { name, value } = event.target;
  //   setWorktimeData({ ...worktimeData, [name]: value });
  // } 

  const updateSalonDetails = (event) => {
    event.preventDefault();
    console.log('sd',salonData)
    axios.put(salonurl, salonData)
    .then(res => {
      console.log('upd',res.data)
      alert('Salon Details updated successfully')
    });
              // fetch(`salonurl+spId}`, {
              //   method: 'put',
              //   body: JSON.stringify(this.state),
              //   headers: { 'Content-Type': 'application/json' },
              // }).then((response) => {
              //   alert('Post updated successfully');
              // //   location.href = '/';
              // });
  }
  // const updateWorktimeDetails = (event) => {
  //   event.preventDefault();
  //   console.log('wt',worktimeData)
  //   // axios.put(salonurl, worktimeData)
  //   // .then(res => {
  //   //   console.log('upd',res.data)
  //   //   alert('Worktime Details updated successfully')
  //   // });
  // }

  const service={
    stype: serviceName,
    sduration: serviceDuration,
    sprice: servicePrice,
    salon_id: salonData.id,
  }

  // const worktime={
  //       weekday: worktimeData.weekday,
  //       opens: worktimeData.opens,
  //       closes: worktimeData.closes,
  //       salon_id: props.spSalonId,
  //     }

  const addServiceDetails = (e) => {
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
            <SpaOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Update Your Salon Details
          </Typography>
        <Box component="form" noValidate  sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              
              <Grid item xs={12}>
                <TextField
                  // disabled
                  fullWidth
                  id="name"
                  label="Name of the Salon"
                  name="name"
                  value={salonData.name ?? ""}
                  onChange={handleInputChange}
              
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="address1"
                  label="Salon Address1"
                  name="address1"
                  value={salonData.address1 ?? ""}
                  onChange={handleInputChange}
                />
              </Grid>
                         
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="address2"
                  name="address2"
                  label="Salon Address2"
                  value={salonData.address2 ?? ""}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="pincode"
                  name="pincode"
                  value={salonData.pincode ?? ""}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="city"
                  name="city"
                  value={salonData.city ?? ""}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="landline"
                  name="landline"
                  value={salonData.landline ?? ""}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="mobile"
                  name="mobile"
                  value={salonData.mobile ?? ""}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="gstin"
                  name="gstin"
                  value={salonData.gstin ?? ""}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="pan"
                  name="pan"
                  value={salonData.pan ?? ""}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="number"
                  required
                  fullWidth
                  id="chairs"
                  name="chairs"
                  value={salonData.chairs ?? ""}
                  onChange={handleInputChange}
                />
              </Grid>
              
            </Grid> 
            <Button
            // disabled={salonsBtn}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={updateSalonDetails}
            >
              Update Salon 
            </Button>
            
          </Box>
          </Box>
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
    Update Your Services Details
  </Typography>
  <Grid container spacing={2}>
    <h3>These are the services you are offering at present</h3>
      <ul>
        {serviceData &&
          serviceData.map(({ id, stype, sduration, sprice, salon_id}) => (
            (salon_id === salonData.id) ?
            (
            <li key={id}>
              <h5> {id}{stype},  duration: {sduration} minutes,{'   '} price: {sprice} <Button onClick={() => handleDelete(id)}>Delete</Button></h5>
             
            </li>
            ) : null
          ))}
      </ul>
    </Grid> 
  {/* <Box component="form" noValidate onSubmit={addServiceDetails} sx={{ mt: 3 }}> */}
    
    <Box component="form" noValidate onSubmit={addServiceDetails} sx={{ mt: 3 }}>
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
      // disabled={servicesBtn}
    >
      Add Services Details
    </Button>
</Box>
</Box>
      {/* <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <AccessTimeOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Working Hours
          </Typography>
          <Box component="form" noValidate onSubmit={updateWorktimeDetails} sx={{ mt: 3 }}>
            <Grid container spacing={2}> */}
            {/* <Grid item xs={12} sm={6}>
                <TextField
                type="time"
                  name="opens"
                  required
                  fullWidth
                  id="opens"
                  label="opens"
                  value={worktimeData.opens}
                  onChange={handleWorktimeChange}
                />
              </Grid> */}
              {/* <Grid item xs={12} sm={6}>
                <TextField
                type="time"
                  required
                  fullWidth
                  id="closes"
                  label="Closes"
                  name="closes"
                  value={worktimeData.closes}
                  onChange={handleWorktimeChange}
                />
              </Grid>  */}
              
              {/* <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Holiday</InputLabel>
        <Select
          labelId="weekday"
          id="weekday"
          label="Weekly Holiday"
          name="weekday"
          value={worktimeData.weekday}
          onChange={handleWorktimeChange}
          
        >
          <MenuItem value={1}>Sunday</MenuItem>
          <MenuItem value={2}>Monday</MenuItem>
          <MenuItem value={3}>Tuesday</MenuItem>
          <MenuItem value={4}>Wednesday</MenuItem>
          <MenuItem value={5}>Thursday</MenuItem>
          <MenuItem value={6}>Friday</MenuItem>
          <MenuItem value={7}>Saturday</MenuItem>
        </Select>
      </FormControl> */}
      {/* </Grid>
              
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>            */}

            {/* <Button
      fullWidth
      variant="contained"
      sx={{ mt: 3, mb: 2 }}
      onClick={props.onClose}
     
    >
      Exit
    </Button>  */}
          {/* </Box>
          </Box> */}
      
    
        

    {/* <Button
      fullWidth
      variant="contained"
      sx={{ mt: 3, mb: 2 }}
      onClick={props.onClose}    
    >
      Exit
    </Button>*/}
    </Container>
</ThemeProvider >
    )
}
