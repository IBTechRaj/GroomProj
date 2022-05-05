import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import axios from 'axios';
// import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
// import SendMail from './SendMail';


function Landing({ loggedIn, setLoggedIn }) {
  // const jwt = localStorage.getItem('token');
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
      <section id="about">
        <Container className="container">
          <Row className="row">
            <div className="section-header">
              <h2 className="section-title text-center wow fadeInDown mt-3" style={{ color: 'black' }}>Pick your Salon or Service</h2>
            </div>
          </Row>
          <Row >

            <Col xs={6} >
              {/* <Image src="images/about.png" fluid /> */}
            </Col>
            <Col xs={6} >
              
              <p>
                Salon pics scroll here horizontally
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )

}
// });

export default Landing