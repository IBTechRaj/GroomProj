import { isBefore, setHours, setMinutes, addMinutes } from 'date-fns'
import { useState, useEffect } from 'react'
import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { makeStyles } from "@material-ui/styles";
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  item: {
    color: '#fff',
    justifyContent: "center",
    display: "flex",
    '&:hover': {
      '&>a': {
        backgroundColor: 'green',
        color: 'red',
      }
    }
  }
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),

  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ResponsiveGrid(props) {
  const setTime = (x, h = 0, m = 0) => setHours(setMinutes(x, m), h)
  const from = setTime(new Date(), 7)
  console.log(from)
  const to = setTime(new Date(), 21)
  console.log(to)
  const step = (x) => addMinutes(x, 30)
  const blocks = []
  let cursor = from
  while (isBefore(cursor, to)) {
    console.log('timings', cursor.toLocaleTimeString())
    blocks.push(cursor.toLocaleTimeString().slice(-11, -6) + cursor.toLocaleTimeString().slice(-3))
    cursor = step(cursor)
  }
  console.log(blocks)

  const classes = useStyles()
  console.log('tl props', props)
  const [reserved, setReserved] = useState([])

  const getApptTime = (tmslot) => {
    if (reserved.includes(tmslot)) {
      alert('Already reserved')
    }
    else {
      props.setApptTime(tmslot);
      props.setShowTime(false)
    }
  }

  useEffect(() => {
    const jwt = localStorage.getItem('token');
    const apptUrl = `http://localhost:3001/appointments/${props.salonId}/${props.startDate.toUTCString()}`;

    const getCurrentAppts = async () => {
      try {
        const response = await axios.get(
          apptUrl
        )
          .then(response => {
            if (response.status === 200) {
              console.log('Appointments this day', response.data)
              const ampm = response.data.map((tm) => {
                let H = tm.substr(0, 2)
                let h = H % 12 || 12
                let ampm = (H < 12 || H === 24) ? " AM" : " PM"
                tm = h + tm.substr(2, 3) + ampm
                return tm
              })
              console.log('ampm', ampm)
              setReserved(ampm)
            }
          })
      } catch (err) {
        console.log('e', err.message)
        setReserved(null);
      }
    }

    getCurrentAppts()

  }, [])

  // const reserved = ['7:30 AM', '9:00 PM', '9:00 AM', '12:00 PM']
  return (
    <Box sx={{ width: 300, padding: 0 }} >
      <Grid container columns={{ xs: 2, sm: 4, md: 6 }} sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
        {/* {Array.from(Array(6)).map((_, index) => ( */}
        {blocks.map((tmslot, index) => (
          // (tmslot === '8:00 AM) ? setReserved(false): null
          <Grid item
            className=
            {classes.item} key={index} sx={{ width: 100, height: 31, }}
          >
            {/* {tmslot} */}
            {/* <Item sx={{backgroundColor: (reserved ?  'red' : 'white'),marginLeft: 0}}>{tmslot}</Item> */}
            <Item className=
              {classes.item} key={index} sx={{
                backgroundColor: (reserved.includes(tmslot) ? 'red' : 'white'), marginLeft: 0

              }}
              onClick={() => getApptTime(tmslot)
              }><a href="#">{tmslot}</a></Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}


// }


// export default GenSlots