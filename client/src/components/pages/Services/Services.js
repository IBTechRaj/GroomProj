import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import { MdLocalCarWash, MdSettings } from 'react-icons/md';
import { GiAutoRepair, GiLargePaintBrush, GiCrystalShine, GiTheaterCurtains } from 'react-icons/gi';

const Services = () => {
  return (
    <>
      <div className="section-header">
        <h2 className="section-title text-center wow fadeInDown mt-3" style={{ color: 'black' }}>Services</h2>
        <p className="text-center wow fadeInDown">
          Water wash <br />
          Interior cleaning<br />
          Fixing minor mechanical issues<br />
        </p>
      </div>
      <Container>
        <Row >
          <Col xs={6} md={4} className='mb-4'>
            <Row>
              <Col xs={3} md={2}>
                <div >
                  <MdSettings size={50} margintop={10} />
                </div>
              </Col>
              <Col xs={9} md={8}>
                <div>
                  <h4>Car Checkup</h4>
                  <p>
                    On the spot checkup with be undertaken and possible solutions are offered
                  </p>
                </div>
              </Col>
            </Row>
          </Col>

          <Col xs={6} md={4} className='mb-4'>
            <Row>
              <Col xs={3} md={2}>
                <div >
                  <MdLocalCarWash size={50} margintop={10} />
                </div>
              </Col>
              <Col xs={9} md={8}>
                <div>
                  <h4>Car Wash</h4>
                  <p>
                    Your car would be washed at your doorstep and prsented to you in a spic and span condition.
                  </p>
                </div>
              </Col>
            </Row>
          </Col>

          <Col xs={6} md={4} className='mb-4'>
            <Row>
              <Col xs={3} md={2}>
                <div >
                  <GiLargePaintBrush size={50} margintop={10} />
                </div>
              </Col>
              <Col xs={9} md={8}>
                <div>
                  <h4>Car Paint</h4>
                  <p>
                    We also undertake fixing minor dents, touching up scratches and covering with matching paint.
                  </p>
                </div>
              </Col>
            </Row>
          </Col>

          <Col xs={6} md={4} className='mb-4'>
            <Row>
              <Col xs={3} md={2}>
                <div >
                  <GiAutoRepair size={50} margintop={10} />
                </div>
              </Col>
              <Col xs={9} md={8}>
                <div>
                  <h4>Car Repair</h4>
                  <p>
                    Minor repairs would be undertaken and fixed then and there and major repairs would be recommended for suitable workshops.
                  </p>
                </div>
              </Col>
            </Row>
          </Col>

          <Col xs={6} md={4} className='mb-4'>
            <Row>
              <Col xs={3} md={2}>
                <div >
                  <GiTheaterCurtains size={50} margintop={10} />
                </div>
              </Col>
              <Col xs={9} md={8}>
                <div>
                  <h4>Car Decor</h4>
                  <p>
                    Decorative accessories purchased by you would be installed or we can procure them on your behalf.
                  </p>
                </div>
              </Col>
            </Row>
          </Col>

          <Col xs={6} md={4} className='mb-4'>
            <Row>
              <Col xs={3} md={2}>
                <div >
                  <GiCrystalShine size={50} margintop={10} />
                </div>
              </Col>
              <Col xs={9} md={8}>
                <div>
                  <h4>Car Polish</h4>
                  <p>
                    Polishing would be undertaken and your car would present a new look with shining.
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Services