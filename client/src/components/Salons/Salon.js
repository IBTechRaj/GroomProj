import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap';
import SalonForm from './SalonForm'

const Salon = () => {

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [openSalon, setOpenSalon] = useState(false);
  const [name, setName] = useState('');
  const [pincode, setPincode] = useState(0);
  // const onOpenBookingModal = () => {
  //   setOpenBooking(true);
  // }
  const onCloseSalonModal = () => setOpenSalon(false);
  const handleSubmitSalon = () => {
    console.log('Booked')
    onCloseSalonModal()
  }

  return (
    <>
      <div className='text-center' style={{ backgroundColor: 'black' }}>
        <Button onClick={handleShow} className="btn btn-success" data-toggle="modal"><span>Add Salon</span></Button>
      </div>
      <Modal open={openSalon} onClose={onCloseSalonModal} centre>
        <h2>Add Your Salon Details</h2>
        <form onSubmit={handleSubmitSalon}>
          <label className="justify-left w-100 px-5">
            <input
              className="form-control"
              placeholder="Name"
              type="text"
              name="name"
              value={name}
              onChange={event => {
                setName(event.target.value)
              }}
            />
            <br />
            <input
              className="form-control"
              placeholder="Pincode"
              type="integer"
              name="pincode"
              value={pincode}
              onChange={event => {
                setPincode(event.target.value)
              }}
            />
          </label>
          <br /><br />
          <label className="justify-left w-100 px-5">
            {' '}
            <input className="w-100 btn btn-custom" type="submit" />
          </label>
        </form>
      </Modal>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Add Your Salon Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SalonForm />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Salon