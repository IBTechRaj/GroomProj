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

  console.log('sln props', props)

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
  user_id: props.spId,
}
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('salonDaqta', salon)
    const jwt = localStorage.getItem('token');
    const url = 'http://localhost:3001/salons';
    axios.post(url, { salon }, {
      headers: { Authorization: `Bearer ${jwt}` },
    })
      .then(response => {
        if (response.status === 201) {
          console.log('Salon Added')
          setSalonId(response.data.id)
          console.log('salon id', salonId)
          console.log('resp', response);
          setSalonsBtn(!salonsBtn)
        }
      })
  };

 
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
              
            </Grid>
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