import * as React from 'react';
import { useEffect, useState } from 'react'
import axios from 'axios';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import MiscellaneousServicesOutlinedIcon from '@mui/icons-material/MiscellaneousServicesOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


export default function ViewData(props) {
  console.log('view props', props)
  const [salonData, setSalonData] = useState(null);
  const [serviceData, setServiceData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const jwt = localStorage.getItem('token');
  const salonurl = `http://localhost:3001/salons`;
  const serviceurl = 'http://localhost:3001/services';
  const worktimesurl = 'http://localhost:3001/worktimes';

  useEffect(() => {
    const getSalonData = async () => {
      try {
        const response = await axios.get(
          salonurl
        );
        setSalonData(response.data);
        console.log('dat', response)
        // console.log('da', data)
        setError(null);
      } catch (err) {
        setError(err.message);
        setSalonData(null);
      } finally {
        setLoading(false);
      }
    };
    const getServiceData = async () => {
      try {
        const response = await axios.get(
          serviceurl
        );
        setServiceData(response.data);
        console.log('dat', response)
        // console.log('da', data)
        setError(null);
      } catch (err) {
        setError(err.message);
        setServiceData(null);
      } finally {
        setLoading(false);
      }
    };
    getSalonData();
    getServiceData()
  }, [])

  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div>
          <h1>Salon Details</h1>
          <ul>
            {salonData &&
              salonData.map(({ id, name, address1, address2, city, pincode, mobile, landline, gstin, pan, user_id }) => (
                (user_id === props.spId) ?
                  (<li key={id}>
                    <h5>Name : {name}</h5>
                    <h5>Address : {address1},{address2}</h5>
                    <h5>City : {city}</h5>
                    <h5>Pincode : {pincode}</h5>
                    <h5>Mobile : {mobile}</h5>
                    <h5>Land Line : {landline}</h5>
                    <h5>GST : {gstin}</h5>
                    <h5>PAN : {pan}</h5>
                  </li>) : null
              ))}
          </ul>
          <h1>Services Details</h1>
          <ul>
            {serviceData &&
              serviceData.map(({ id, stype, sduration, sprice }) => (
                (id === 1) ?
                  (<li key={id}>
                    <h5>Name : {stype}</h5>
                    <h5>Duration : {sduration}</h5>
                    <h5>Price : {sprice}</h5>

                  </li>) : null
              ))}
          </ul>

        </div>
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
          <Grid container spacing={2}>
          </Grid>

          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={props.onClose}

          >
            Exit
          </Button>

          {/* </Box> */}
        </Box>

      </Container>
    </ThemeProvider >
  )
}