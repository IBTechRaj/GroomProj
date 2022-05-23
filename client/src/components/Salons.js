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
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import Select, { SelectChangeEvent } from '@mui/material/Select';
import SpaOutlinedIcon from '@mui/icons-material/SpaOutlined';
// import MiscellaneousServicesOutlinedIcon from '@mui/icons-material/MiscellaneousServicesOutlined';
// import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { FormGroup } from '@mui/material';
import Services from './Services';

const theme = createTheme();

export default function Salons(props) {

  // console.log('sln props', props)

  const [name, setName]=useState("")
  const [address1, setAddress1]=useState("")
  const [address2, setAddress2]=useState("")
  const [pincode, setPincode]=useState("")
  const [city, setCity]=useState("")
  const [landline, setLandline]=useState("")
  const [mobile, setMobile]=useState("")
  const [gstin, setGstin]=useState("")
  const [pan, setPan]=useState("")
  const [chairs, setChairs]=useState("1")
  const [salonId, setSalonId]=useState(0)
  const [salonsBtn, setSalonsBtn]=useState(false)
  const [holiday, setHoliday]=useState(1)
  const [opens, setOpens]=useState(0)
  const [closes, setCloses]=useState(0)
  const [image, setImage]=useState('')

  const onImageChange = (event)=> { 
    setImage( event.target.files[0] )
   }

const salon={
  name: name,
  address1: address1,
  address2: address2,
  pincode: pincode,
  city: city,
  landline: landline,
  mobile: mobile,
  gstin: gstin,
  pan: pan,
  chairs: chairs,
  weekday: holiday,
  opens: opens,
  closes: closes,
  user_id: props.spId,
  image: image,
}


       


  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
        formData.append('name', name)
        formData.append('address1', address1)
        formData.append('address2', address2)
        formData.append('pincode', pincode)
        formData.append('city', city)
        formData.append('landline', landline)
        formData.append('mobile', mobile)
        formData.append('gstin', gstin)
        formData.append('pan', pan)
        formData.append('chairs', chairs)
        formData.append('user_id', props.spId)
        formData.append('weekday', holiday)
        formData.append('opens', opens)
        formData.append('closes', closes)
        formData.append('image', image)
    console.log('salonDaqta', formData)
    const jwt = localStorage.getItem('token');
    const salonsUrl = 'http://localhost:3001/salons';
    
    // axios.post(salonsUrl, salon: salon , {
    //   headers: { Authorization: `Bearer ${jwt}`, 'Content-Type': 'multipart/form-data' },
      
    // })

    fetch('http://localhost:3001/salons', {
      headers: { "Authorization": `Bearer ${jwt}`,
      "Accept": "application/json" },
          method: 'POST',
          body: formData
        })
        .then((res) => res.json())
        .then((res) => {
          console.log('res', res)
          setSalonId(res.id)
          console.log('salon id', salonId)
          setSalonsBtn(!salonsBtn)
        })
      }
          // const eventDiv = document.createElement('div')
          // eventDiv.className = 'shadow bg-green-50 p-3'
          // eventDiv.innerHTML = `
          // <h1 class="event-name text-2xl"></h1>
          // <img class="event-poster w-full block" />  
          // <p class="event-start-time"></p> 
          // <p class="event-end-time"></p> 
          // <p class="event-location"></p>
          // `
          // eventDiv.querySelector('.event-name').textContent = event.name
          // eventDiv.querySelector('.event-poster').src = event.poster_url
          // eventDiv.querySelector('.event-start-time').textContent =
          //   event.start_time
          // eventDiv.querySelector('.event-end-time').textContent = event.end_time
          // eventDiv.querySelector('.event-location').textContent = event.location
        // })
    // axios({
    //   method: "post",
    //   url: salonsUrl,
    //   salon: formData,
    //   headers: { Authorization: `Bearer ${jwt}` },
    // })
      // .then(res => {
      //   // if (res.status === 201) {
      //     console.log('Salon Added')
      //     // setSalonId(res.data.id)
      //     // console.log('salon id', salonId)
      //     console.log('resp', res);
      //     // setSalonsBtn(!salonsBtn)
      //   // }
      // })
  // };

 
const [showServices, setShowServices]=useState(true)

const closeChild = () => {
    setShowServices(false)
};
   

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
            Salon Details
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="name"
                  label="Name of the Salon"
                  value={name}
                  onChange={event => {
                setName(event.target.value)
              }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="address1"
                  label="Salon Address1"
                  value={address1}
                  onChange={event => {
                    setAddress1(event.target.value)
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="address2"
                  label="Salon Address2"
                  value={address2}
                  onChange={event => {
                    setAddress2(event.target.value)
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="pincode"
                  label="Pin Code"
                  value={pincode}
                  onChange={event => {
                    setPincode(event.target.value)
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="city"
                  label="City"
                  value={city}
                  onChange={event => {
                    setCity(event.target.value)
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="landline"
                  label="Landline"
                  value={landline}
                  onChange={event => {
                    setLandline(event.target.value)
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="mobile"
                  label="Mobile"
                  value={mobile}
                  onChange={event => {
                    setMobile(event.target.value)
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="gstin"
                  label="GST Number"
                  value={gstin}
                  onChange={event => {
                    setGstin(event.target.value)
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="pan"
                  label="PAN Number"
                  value={pan}
                  onChange={event => {
                    setPan(event.target.value)
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="number"
                  required
                  fullWidth
                  id="chairs"
                  label="No.of Chairs"
                  value={chairs}
                  onChange={event => {
                    setChairs(event.target.value)
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                type="time"
                  name="opens"
                  required
                  fullWidth
                  id="opens"
                  label="opens"
                  value={opens}
                  onChange={event => {
                    setOpens(event.target.value)
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                type="time"
                  required
                  fullWidth
                  id="closes"
                  label="Closes"
                  name="closes"
                  value={closes}
                  onChange={event => {
                    setCloses(event.target.value)
                  }}
                />
              </Grid> 
              <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Holiday</InputLabel>
        <Select
          labelId="holiday"
          id="holiday"
          label="Weekly Holiday"
          value={holiday}
          onChange={event =>{
              setHoliday(event.target.value)
          }}
        >
          <MenuItem value={1}>Sunday</MenuItem>
          <MenuItem value={2}>Monday</MenuItem>
          <MenuItem value={3}>Tuesday</MenuItem>
          <MenuItem value={4}>Wednesday</MenuItem>
          <MenuItem value={5}>Thursday</MenuItem>
          <MenuItem value={6}>Friday</MenuItem>
          <MenuItem value={7}>Saturday</MenuItem>
        </Select>
      </FormControl>
            </Grid>
            Upload Image
           <input type="file" 
           accept="image/*" 
           multiple={false} 
           onChange = {onImageChange}
           />
            <Button
            disabled={salonsBtn}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit Salon Details
            </Button>
            
          </Box>

          <Button
      fullWidth
      variant="contained"
      sx={{ mt: 3, mb: 2 }}
      onClick={props.onClose}
     
    >
      Exit
    </Button>
        </Box>
        {showServices &&
        <Services salonId={salonId} setSalonId={setSalonId} onClose={closeChild}  />
}
      </Container>
    </ThemeProvider>
  );
}