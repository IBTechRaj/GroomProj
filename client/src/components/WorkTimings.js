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
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import SelectChangeEvent from '@mui/material/Select';
// import SpaOutlinedIcon from '@mui/icons-material/SpaOutlined';
// import MiscellaneousServicesOutlinedIcon from '@mui/icons-material/MiscellaneousServicesOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { FormGroup } from '@mui/material';

const theme = createTheme();

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

export default function WorkTimings(props) {

    const [holiday, setHoliday]=useState(1)
    const [opens, setOpens]=useState(0)
    const [closes, setCloses]=useState(0)

    const worktime={
        weekday: holiday,
        opens: opens,
        closes: closes,
        salon_id: props.salonId,
      }
        const handleSubmit = (event) => {
          event.preventDefault();
          // const data = new FormData(event.currentTarget);
          console.log('workingTime', worktime)
          const jwt = localStorage.getItem('token');
          const url = 'http://localhost:3001/worktimes';
          axios.post(url, { worktime }, {
            headers: { Authorization: `Bearer ${jwt}` },
          })
            .then(response => {
              if (response.status === 201) {
                console.log('Working hours Added')
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
              
            <Button
              type="save"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>           

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
        <Copyright sx={{ mt: 5 }} />
      </Container>

      
</ThemeProvider >
)
 }