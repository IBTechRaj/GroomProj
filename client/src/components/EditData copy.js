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
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { FormGroup } from '@mui/material';
import WorkTimings from './WorkTimings';

export default function EditData(props) {

    console.log('edit props', props)
    const [salonData, setSalonData] = useState({});
    const [serviceData, setServiceData] = useState(null);
    const [worktimeData, setWorktimeData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    console.log('SalonDat', salonData)
  
    // const [userSalon, setUserSalon]=useState(0)

    // const salonurl = `http://localhost:3001/salons/${props.spId}`;
    const userSalonUrl = `http://localhost:3001/salons/${props.spSalonId}`;
    const serviceurl = 'http://localhost:3001/services';
    const worktimesurl = 'http://localhost:3001/worktimes';


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
    // const getSalonData = async () => {
    //     try {
    //       const response = await axios.get(
    //         salonurl
    //       );
    //       setSalonData(response.data);
    //       console.log('dat', response)
    //     setError(null);
    //   } catch (err) {
    //       console.log('e',err.message)
    //     setError(err.message);
    //     setSalonData(null);
    //   } finally {
    //     setLoading(false);
    //   }
    // };
   
    // getSalonData()
    getUserSalon()
    // console.log('fetched')
  }, [userSalonUrl])

  const {name, address1, address2,  pincode,city,  landline, mobile, gstin, pan, chairs} = salonData

  const onFormFieldChange = (e) => {
    console.log("changing...", e.target.name, e.target.value)
    // No need to return this function can be void
    setSalonData({
      ...salonData,
      [e.target.name]: e.target.value 
    })
 }
  // const handleInputChange = (event) => {
  //   setState({ [event.target.name]: event.target.value });
  

  const updatePostRequest = (e) => {
    console.log('sd',salonData)
              // fetch(`salonurl+spId}`, {
              //   method: 'put',
              //   body: JSON.stringify(this.state),
              //   headers: { 'Content-Type': 'application/json' },
              // }).then((response) => {
              //   alert('Post updated successfully');
              // //   location.href = '/';
              // });
  }

  const theme = createTheme();
  // const [sname, setName]=useState(name)
  // const [saddress1, setAddress1]=useState(address1)
  // const [address2, setAddress2]=useState("")
  // const [pincode, setPincode]=useState("")
  // const [city, setCity]=useState("")
  // const [landline, setLandline]=useState("")
  // const [mobile, setMobile]=useState("")
  // const [gstin, setGstin]=useState("")
  // const [pan, setPan]=useState("")
  // const [chairs, setChairs]=useState("1")
    
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
        <Box component="form" noValidate onSubmit={updatePostRequest} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              
              <Grid item xs={12}>
                <TextField
                  // disabled
                  fullWidth
                  id="name"
                  label="Name of the Salon"
                  // variant="filled"
                  value={name ?? ""}
                  onChange={onFormFieldChange}
              
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="address1"
                  label="Salon Address1"
                  // variant="filled"
                  value={address1 ?? ""}
                  onChange={onFormFieldChange}
                />
              </Grid>
                                    {/* <Grid item xs={12}>
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
                                    </Grid> */}
              {/* <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="address2"
                  label="Salon Address2"
                  // variant="filled"
                  value={address2}
                  onChange={event => {
                    setAddress2(event.target.value)}}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="pincode"
                  // label="Pin Code"
                  value={pincode}
                  onChange={event =>{setPincode(event.target.value)}}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="city"
                  // label="City"
                  value={city}
                  onChange={event =>{setCity(event.target.value)}}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="landline"
                  // label="Landline"
                  value={landline}
                  onChange={event =>{setLandline(event.target.value)}}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="mobile"
                  // label="Mobile"
                  value={mobile}
                  onChange={event =>{setMobile(event.target.value)}}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="gstin"
                  // label="GST Number"
                  value={gstin}
                  onChange={event =>{setGstin(event.target.value)}}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="pan"
                  // label="PAN Number"
                  value={pan}
                  onChange={event =>{setPan(event.target.value)}}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="number"
                  required
                  fullWidth
                  id="chairs"
                  // label="No.of Chairs"
                  value={chairs}
                  onChange={event =>{setChairs(event.target.value)}}
                />
              </Grid> */}
              
            </Grid> 
            <Button
            // disabled={salonsBtn}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              // onClick={updatePostRequest}
            >
              Update Salon Details
            </Button>
            
          </Box>
          </Box>
      {/* <div>
        <h3>New Post</h3>
        <div>
          <label>Title: </label>
          <input
            type='text'
            name='title'
            value={title}
            onChange={this.handleInputChange}
            />
        </div>
        <div>
          <label>Description: </label>
          <input
            type='text'
            name='description'
            value={description}
            onChange={this.handleInputChange}
            />
        </div>
        <div>
          <label>Is Published: </label>
          <input
            type='text'
            name='is_published'
            value={is_published}
            onChange={this.handleInputChange}
            />
        </div>
        <button onClick={this.updatePostRequest}>Update</button>
      </div> */}
      {/* <Box
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
  {/* <Box component="form" noValidate onSubmit={handleServiceSubmit} sx={{ mt: 3 }}> */}
    {/* <Grid container spacing={2}>
    </Grid> */}
      
    {/* <Button
      fullWidth
      variant="contained"
      sx={{ mt: 3, mb: 2 }}
      onClick={props.onClose}
     
    >
      Exit
    </Button> */}
    
  {/* </Box> */}
{/* </Box> */} 
    </Container>
</ThemeProvider >
    )
}
