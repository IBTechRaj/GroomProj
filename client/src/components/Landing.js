import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import axios from 'axios';
// import { makeStyles } from '@mui/styles';
import { makeStyles } from '@material-ui/styles';
import Grid from '@mui/material/Grid'
import Card from './Card'

//https://st.depositphotos.com/1491329/2998/i/450/depositphotos_29983783-stock-photo-healthy-long-black-hair-beauty.jpg
// https://static8.depositphotos.com/1491329/1068/i/450/depositphotos_10685520-stock-photo-hair-colors-palette.jpg
// https://depositphotos.com/68471257/stock-photo-interior-of-empty-modern-hair.html
// https://depositphotos.com/21503609/stock-photo-comb-brushes-hairdryer-and-cutting.html

// import { DesktopDateTimePicker } from '@mui/x-date-pickers';cl
// import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { ClassNames } from '@emotion/react';
// import SendMail from './SendMail';

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: '100px',
    paddingRight: '20px'
  }
})
function Landing({ loggedIn, setLoggedIn }) {
  // const jwt = localStorage.getItem('token');
  const classes=useStyles()
  const salonurl = 'http://localhost:3001/salons';
  const serviceurl = 'http://localhost:3001/services';

  useEffect(() => {
    axios.get(salonurl,
      // {
      //   headers: { Authorization: `Bearer ${jwt}` },
      // }
    )
      .then(({ data }) => {
        console.log('salons', data)
      })

    axios.get(serviceurl,
      // {
      //   headers: { Authorization: `Bearer ${jwt}` },
      // }
    )
      .then(({ data }) => {
        console.log('services', data)
      })
  }, [])

  return (
    <>
    <Grid container spacing={4} className={classes.gridContainer} justify="center">
      <Grid item xs={12} sm={6} md={4}>
      <Card />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
      <Card />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
      <Card />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
      <Card />
      </Grid>
    
   
    </Grid>
      {/* <section id="about">
        <Container className="container">
          <Row className="row">
            <div className="section-header">
              <h2 className="section-title text-center wow fadeInDown mt-3" style={{ color: 'black' }}>Pick your Salon or Service</h2>
            </div>
          </Row>
          <Row >

            <Col xs={6} >
            </Col>
            <Col xs={6} >
              
              <p>
                Salon pics scroll here horizontally
                
              </p>
            </Col>
          </Row>
        </Container>
      </section> */}
    </>
  )

}
// });

export default Landing