import * as React from 'react';
import {useState} from 'react'
import axios from 'axios';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import SpaOutlinedIcon from '@mui/icons-material/SpaOutlined';
import MiscellaneousServicesOutlinedIcon from '@mui/icons-material/MiscellaneousServicesOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FormGroup } from '@mui/material';

function Copyright(props) {

  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        GroomWellServices
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Salons(props) {

  console.log('props', props)



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

  

const workHrs={
  weekday: name,
  opens: address1,
  closes: address2,
  salon_id: props.salonId,
}
  const handleSubmit = (event) => {
    event.preventDefault();
    // const data = new FormData(event.currentTarget);
    console.log('workingTime', workHrs)
    const jwt = localStorage.getItem('token');
    const url = 'http://localhost:3001/worktimes';
    axios.post(url, { salon }, {
      headers: { Authorization: `Bearer ${jwt}` },
    })
      .then(response => {
        if (response.status === 201) {
          console.log('Salon Added')
          // resetSalonData()
        }
      })
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
              {/* <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid> */}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit Salon Details
            </Button>
            
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 5 }} /> */}
      </Container>
{/* 
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
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  required
                  fullWidth
                  id="service_name"
                  label="Service Name"
                  name="service_name"
                  autoComplete="service_name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  required
                  fullWidth
                  id="duration"
                  label="Service Duration"
                  name="duration"
                  autoComplete="duration"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  required
                  fullWidth
                  id="price"
                  label="Price"
                  name="price"
                  autoComplete="price"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  required
                  fullWidth
                  id="service_name"
                  label="Service Name"
                  name="service_name"
                  autoComplete="service_name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  required
                  fullWidth
                  id="duration"
                  label="Service Duration"
                  name="duration"
                  autoComplete="duration"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  required
                  fullWidth
                  id="price"
                  label="Price"
                  name="price"
                  autoComplete="price"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  required
                  fullWidth
                  id="service_name"
                  label="Service Name"
                  name="service_name"
                  autoComplete="service_name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  required
                  fullWidth
                  id="duration"
                  label="Service Duration"
                  name="duration"
                  autoComplete="duration"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  required
                  fullWidth
                  id="price"
                  label="Price"
                  name="price"
                  autoComplete="price"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  required
                  fullWidth
                  id="service_name"
                  label="Service Name"
                  name="service_name"
                  autoComplete="service_name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  required
                  fullWidth
                  id="duration"
                  label="Service Duration"
                  name="duration"
                  autoComplete="duration"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  required
                  fullWidth
                  id="price"
                  label="Price"
                  name="price"
                  autoComplete="price"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  required
                  fullWidth
                  id="service_name"
                  label="Service Name"
                  name="service_name"
                  autoComplete="service_name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  required
                  fullWidth
                  id="duration"
                  label="Service Duration"
                  name="duration"
                  autoComplete="duration"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  required
                  fullWidth
                  id="price"
                  label="Price"
                  name="price"
                  autoComplete="price"
                />
              </Grid>
             
            </Grid>
            <Button
              type="save"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Save
            </Button>
            
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>

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
            <AccessTimeOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Working Hours
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
                <TextField
                type="time"
                  name="opens"
                  required
                  fullWidth
                  id="opens"
                 
                  autoFocus
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
                  autoComplete="closes"
                />
              </Grid> 
            </Grid>
              
            <Button
              type="save"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Save
            </Button>            
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>

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
            <AccessTimeOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Weekly Holiday
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
            <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Holiday</InputLabel>
        <Select
          labelId="holiday"
          id="holiday"
          label="Weekly Holiday"
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
    </Box>
           
            </Grid>
              
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>            
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container> */}
    </ThemeProvider>
  );
}