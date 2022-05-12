// import React from 'react';
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap'
// import axios from 'axios';
import Salons from './Salons';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ViewData from './ViewData'
import EditData from './EditData'

function Sprovider(props) {

  console.log('spro', props)
  const [salonId, setSalonId]=useState(0)
  const [showServices, setShowServices]=useState(false)
  const [viewData, setViewData]=useState(false)
  const [editData, setEditData]=useState(false)

const closeChild = () => {
    setShowServices(false)
};
const closeViews = () => {
  setViewData(false)
};
const closeEdits = () => {
  setEditData(false)
};
// console.log('spro', props)

  return (
    <>
      <section id="about">
        <Container className="container">
          <Row className="row">
            <div className="section-header">
              <h2 className="section-title text-center wow fadeInDown mt-3" style={{ color: 'black' }}>Provide your Salon and Services Details</h2>            
            </div>
          </Row>

          <ButtonGroup variant="contained" size="large"  aria-label="outlined primary button group">
          <Button
      type="submit"
      fullWidth
      variant="contained"
      sx={{ mt: 3, mb: 2, mr: 5, ml: 5 }}
      onClick={()=> {setShowServices(true)}}
      // disabled={servicesBtn}
    >
      Add 
    </Button>
    <Button
      type="submit"
      fullWidth
      variant="contained"
      sx={{ mt: 3, mb: 2 , mr: 5, ml: 5}}
      onClick={()=> {setEditData(true)}}
      // disabled={servicesBtn}
    >
      Edit 
    </Button>
    <Button
      type="submit"
      fullWidth
      variant="contained"
      sx={{ mt: 3, mb: 2, mr: 5, ml: 5 }}
      onClick={()=> {setViewData(true)}}
    >
      View 
    </Button>
    </ButtonGroup>
          {showServices &&
            <Salons spId={props.spId} setSpId={props.setSpId} client={props.client} setClient={props.setClient} onClose={closeChild}  />
          } 
          {viewData &&
            <ViewData spId={props.spId} setSpId={props.setSpId} client={props.client} setClient={props.setClient} onClose={closeViews}  />
          }   
          {editData &&
            <EditData spSalonId={props.spSalonId} setSpSalonId={props.setSpSalonId} client={props.client} setClient={props.setClient} onClose={closeEdits}  />
          }   
         
          {/* {console.log('in sprov', salonId)} */}
        </Container>
      </section>
    </>
  )
}

export default Sprovider