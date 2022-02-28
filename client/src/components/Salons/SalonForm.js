import { Form, Button } from "react-bootstrap"
import axios from 'axios';
import { useState } from 'react';

const SalonForm = () => {
  const [salon, setSalon] = useState({
    name: "", address1: "", address2: "", pincode: "", city: "", landline: "", mobile: "", gstin: "", pan: "", chairs: 0
  });
  const onInputChange = (e) => {
    setSalon({ ...salon, [e.target.name]: e.target.value })
  }
  const { name, address1, address2, pincode, city, landline, mobile, gstin, pan, chairs } = salon;
  const handleSubmit = (e) => {
    e.preventDefault();
    const jwt = localStorage.getItem('token');
    const url = 'http://localhost:3001/salons';
    axios.post(url, { salon }, {
      headers: { Authorization: `Bearer ${jwt}` },
    })
      .then(response => {
        if (response.status === 201) {
          console.log('Salon Added')
        }
      })
  }

  return (

    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Salon Name *"
          name="name"
          value={name}
          onChange={(e) => onInputChange(e)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Address 1 *"
          name="address1"
          value={address1}
          onChange={(e) => onInputChange(e)}
          required
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
          type="text"
          placeholder="Pin Code *"
          name="pincode"
          value={pincode}
          onChange={(e) => onInputChange(e)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="City *"
          name="city"
          value={city}
          onChange={(e) => onInputChange(e)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Landline"
          name="landline"
          value={landline}
          onChange={(e) => onInputChange(e)}
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
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="GST"
          name="gstin"
          value={gstin}
          onChange={(e) => onInputChange(e)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="PAN"
          name="pan"
          value={pan}
          onChange={(e) => onInputChange(e)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="integer"
          placeholder="No.of Chairs"
          name="chairs"
          value={chairs}
          onChange={(e) => onInputChange(e)}
        />
      </Form.Group>
      <Button variant="success" type="submit" block>
        Confirm
      </Button>
    </Form>

  )
}

export default SalonForm;