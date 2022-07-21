import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import CustomerService from '../../../services/Add New Reservation//customer.services.js'

/*Date functions import*/
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function AddReservationModal(props) {
let messageDisplayed;
const customerService = new CustomerService();
const[roomNum,setRoomNum] = useState();
const [firstName,setFirstName] = useState();
const[lastName,setLastName] = useState();
const[checkIn,setCheckIn] = useState();
const[checkOut,setCheckOut] = useState()
const[message,setMessage] = useState({type:"none",displayMessage:""});

const hideModal = () =>{ 
    props.closeModal(false);
}

const addReserve = async(e) =>{
  e.preventDefault();
  const newReserve = {
    FirstName:firstName,
    LastName:lastName,
    CheckInDate:checkIn,
    CheckOutDate:checkOut,
    RoomNumber:roomNum
  }

  try{
    await customerService.addReserve(newReserve);
    setMessage({type:"true",displayMessage:"Reservation Added Successfully"})
  }
  catch(error){
    setMessage({type:"false",displayMessage:error.message});
  }
}






  return (
      <>
        <Modal show={props.show} onHide = {hideModal}>

          <Modal.Header closeButton>
          {
                message.type === "true" ?
                <Alert variant = "success">
                  {message.displayMessage}
                </Alert>
                : message.type === "false" ?
                  <Alert variant = "danger">
                    {message.displayMessage}
                  </Alert>
                :""
          }
          
          <Modal.Title>Add Reservation</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Room Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Input Room Number Here"
                  autoFocus
                  onChange = {(e)=>{
                    setRoomNum(e.target.value);
                  }}

                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="First Name..."
                  autoFocus
                  onChange = {(e)=>{
                    setFirstName(e.target.value);
                  }}

                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Last Name..."
                  autoFocus
                  onChange = {(e)=>{
                    setLastName(e.target.value);
                  }}
        

                />
              </Form.Group>


              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Check In Date</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="Check In Date..."
                  autoFocus
                  onChange={(e) =>{
                    setCheckIn(e.target.value);
                  }}
              
                >  
                </Form.Control>
     
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Check Out Date</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="Check Out Date.."
                  autoFocus
                  onChange = {(e)=>{
                    setCheckOut(e.target.value);
                  }}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={(e)=>{
              e.preventDefault();
              hideModal();
            }}>
              Close
            </Button>
            <Button variant="success" onClick = {(e)=>{
                e.preventDefault();
                addReserve(e)
            }} >
              Add Reservation
            </Button>
          </Modal.Footer>
        </Modal>
      </>

  );
}

export default AddReservationModal;
