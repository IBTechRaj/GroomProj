import React from 'react';
import Button from './Button';
import './TimeSlots.css';
import { Container } from 'react-bootstrap'

const TimeSlots = ({ setApptTime, setShowTime , reserved}) => (

  
    <Container className="container"  style={{height: 400}}>
  <div className="row">
  <div className="key-panel col-6">
    <div className="row">
      <Button setApptTime={setApptTime} setShowTime={setShowTime} color="light-gray" name="07:00 AM" reserved={reserved}/>
      </div>
    <div className="row">
      <Button setApptTime={setApptTime} setShowTime={setShowTime} color="light-gray" name="07:30 AM" />
      </div>
    <div className="row">
      <Button setApptTime={setApptTime} setShowTime={setShowTime} color="light-gray" name="08:00 AM" />
      </div>
    <div className="row">
      <Button setApptTime={setApptTime} setShowTime={setShowTime} color="light-gray" name="08:30 AM" />
    </div>
    <div className="row">
      <Button setApptTime={setApptTime} setShowTime={setShowTime} color="light-gray" name="09:00 AM" />
      </div>
    <div className="row">
      <Button setApptTime={setApptTime} setShowTime={setShowTime} color="light-gray" name="09:30 AM" />
      </div>
    <div className="row">
      <Button setApptTime={setApptTime} setShowTime={setShowTime} color="light-gray" name="10:00 AM" />
      </div>
    <div className="row">
      <Button setApptTime={setApptTime} setShowTime={setShowTime} color="light-gray" name="10:30 AM" />
    </div>
    <div className="row">
      <Button setApptTime={setApptTime} setShowTime={setShowTime} color="light-gray" name="11:00 AM" />
      </div>
    <div className="row">
      <Button setApptTime={setApptTime} setShowTime={setShowTime} color="light-gray" name="11:30 AM" />
      </div>
    <div className="row">
      <Button setApptTime={setApptTime} setShowTime={setShowTime} color="light-gray" name="12:00 PM" />
      </div>
      <div className="row">
      <Button setApptTime={setApptTime} setShowTime={setShowTime} color="light-gray" name="12:30 PM" />
      </div>
      <div className="row">
      <Button setApptTime={setApptTime} setShowTime={setShowTime} color="light-gray" name="01:00 PM" />
      </div>
      <div className="row">
      <Button setApptTime={setApptTime} setShowTime={setShowTime} color="light-gray" name="01:30 PM" />
      </div>
      </div>
      <div className="key-panel col-6">
      <div className="row">
      <Button setApptTime={setApptTime} setShowTime={setShowTime} color="light-gray" name="02:00 PM" />
      </div><div className="row">
      <Button setApptTime={setApptTime} setShowTime={setShowTime} color="light-gray" name="02:30 PM" />
      </div><div className="row">
      <Button setApptTime={setApptTime} setShowTime={setShowTime} color="light-gray" name="03:00 PM" />
      </div><div className="row">
      <Button setApptTime={setApptTime} setShowTime={setShowTime} color="light-gray" name="03:30 PM" />
      </div><div className="row">
      <Button setApptTime={setApptTime} setShowTime={setShowTime} color="light-gray" name="04:00 PM" />
      </div><div className="row">
      <Button setApptTime={setApptTime} setShowTime={setShowTime} color="light-gray" name="04:30 PM" />
      </div><div className="row">
      <Button setApptTime={setApptTime} setShowTime={setShowTime} color="light-gray" name="05:00 PM" />
      </div><div className="row">
      <Button setApptTime={setApptTime} setShowTime={setShowTime} color="light-gray" name="05:30 PM" />
      </div><div className="row">
      <Button setApptTime={setApptTime} setShowTime={setShowTime} color="light-gray" name="06:00 PM" />
      </div><div className="row">
      <Button setApptTime={setApptTime} setShowTime={setShowTime} color="light-gray" name="06:30 PM" />
      </div><div className="row">
      <Button setApptTime={setApptTime} setShowTime={setShowTime} color="light-gray" name="07:00 PM" />
      </div><div className="row">
      <Button setApptTime={setApptTime} setShowTime={setShowTime} color="light-gray" name="07:30 PM" />
      </div><div className="row">
      <Button setApptTime={setApptTime} setShowTime={setShowTime} color="light-gray" name="08:00 PM" />
      </div><div className="row">
      <Button setApptTime={setApptTime} setShowTime={setShowTime} color="light-gray" name="08:30 PM" />
      </div>
      </div>
      </div>
  </Container>
);

export default TimeSlots;
