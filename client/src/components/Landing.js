import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/styles';
import Grid from '@mui/material/Grid'
import Card from './Card'
import 'react-responsive-modal/styles.css';

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: '20px',
    paddingRight: '20px'
  }
})
function Landing({ loggedIn, setLoggedIn , userId, userName}) {

  console.log('landing,id', userId, userName)

  const [salons, setSalons]=useState([])

  const classes=useStyles()
  const salonurl = 'http://localhost:3001/salons';

  useEffect(() => {
    axios.get(salonurl,
    )
    .then(({ data }) => {
      setSalons(data)
      console.log('salons', salons)
    })

  }, [])

  return (
    
    <>
    <h2> Salon images</h2>
        <Grid container spacing={2} className={classes.gridContainer} justify="center">
        
          {salons.map(salon => (
            <Grid item xs={12} sm={6}  key={salon.id}>
            <Card salon={salon} userId={userId} userName={userName} />
            </Grid>
          ))}
        </Grid>

    </>
  )

}

export default Landing