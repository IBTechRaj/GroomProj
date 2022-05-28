import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import axios from 'axios';

function CreateBooking(props){


apptUrl='http://localhost:3001/appointments'

fetch(apptUrl, {
      headers: { "Authorization": `Bearer ${jwt}`,
      "Accept": "application/json" },
          method: 'POST',
          body: {
              apptDate: props.apptDate,
              apptTime:props.apptTime,
              service: props.service,
              salon_id: props.salonId,
              user_id: props.userId
          }
        })
        .then((res) => res.json())
        .then((res) => {
          console.log('res', res)
          setSalonId(res.id)
          console.log('salon id', salonId)
          setSalonsBtn(!salonsBtn)
        })
      }
}

export default CreateBooking