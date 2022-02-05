import { Form, Button } from "react-bootstrap"
import axios from 'axios';
import {  useState } from 'react';

const BookingForm = () => {
  const [booking, setBooking] = useState({
    name: "", bookingDate: "", bookingTime: "", address1: "", address2: "", location: "", mobile: ""
  });
  const onInputChange = (e) => {
    setBooking({ ...booking, [e.target.name]: e.target.value })
  }
  const { name, bookingDate, bookingTime, address1, address2, location, mobile } = booking;
  const handleSubmit = (e) => {
    e.preventDefault();
    const jwt = localStorage.getItem('token');
    const url = 'http://localhost:3001/clients';
    axios.post(url, { booking }, {
      headers: { Authorization: `Bearer ${jwt}` },
    })
      .then(response => {
        if (response.status === 201) {
          console.log('Booking done')
        }
      })
  }

  return (

    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Name *"
          name="name"
          value={name}
          onChange={(e) => onInputChange(e)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="date"
          placeholder="Booking Date *"
          name="bookingDate"
          value={bookingDate}
          onChange={(e) => onInputChange(e)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="time"
          placeholder="Booking Time *"
          name="bookingTime"
          value={bookingTime}
          onChange={(e) => onInputChange(e)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Address 1"
          name="address1"
          value={address1}
          onChange={(e) => onInputChange(e)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Address 2"
          name="address2"
          value={address2}
          onChange={(e) => onInputChange(e)}
        />
      </Form.Group>

      <Form.Group>
        <Form.Control
          type="integer"
          placeholder="Pin Code *"
          name="location"
          value={location}
          onChange={(e) => onInputChange(e)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Mobile *"
          name="mobile"
          value={mobile}
          onChange={(e) => onInputChange(e)}
        />
      </Form.Group>
      <Button variant="success" type="submit" block>
        Confirm
      </Button>
    </Form>

  )
}

export default BookingForm;