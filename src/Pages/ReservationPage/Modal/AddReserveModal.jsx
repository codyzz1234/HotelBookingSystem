import React, { useState } from 'react';
import { useEffect } from 'react';
import { Alert } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
/*Services*/
import CustomerService from '../../../services/customer.services';
import RoomService from "../../../services/room.service"
/*React Widgets*/
import "react-widgets/styles.css";
import { Combobox } from 'react-widgets';

function AddReservationModal(props) {
let messageDisplayed;
const customerService = new CustomerService();
const roomService = new RoomService();
const[message,setMessage] = useState({type:"none",displayMessage:""});


let currentStateValue = props.currentStateValue;
let setStateValue = props.setStateValue;

let setLoadTable = props.setLoadTable;

/*load combo box*/
const[rooms,setRooms] = useState([]);

const hideModal = () =>{ 
    props.closeModal(false);
}

//* Add new reservation *//
const addReserve = async(e) =>{
  e.preventDefault();
  const newReserve = {
    FirstName:currentStateValue.firstName,
    LastName:currentStateValue.lastName,
    CheckInDate:currentStateValue.checkIn,
    CheckOutDate:currentStateValue.checkOut,
    RoomNumber:currentStateValue.roomNum
  }

  try{
    await customerService.addReserve(newReserve);
    setMessage({type:"true",displayMessage:"Reservation Added Successfully"})
    setLoadTable(true);
    const timer = setTimeout(() =>hideModal(), 2000);
  }
  catch(error){
    setMessage({type:"false",displayMessage:error.message});
    
  }
}

useEffect(() => {
  loadRoomsForComboBox();
},[]);

//*Loads combo box*//
async function loadRoomsForComboBox(){
  try{
    const data = await roomService.getAllRooms();
    setRooms(data.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
    setMessage({type:"true",displayMessage:""})
  }
  catch(error){
    setMessage({type:"false",displayMessage:"Failed To Load Rooms Combobox"})
  }
}
  return (
      <>
        <pre>{JSON.stringify(rooms,undefined,2)}</pre>
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
                  <Combobox
                    defaultValue=''
                    data = {rooms}
                    dataKey = 'id'
                    textField = 'RoomNumber'
                    onChange={value => setStateValue.setRoomNum(value.RoomNumber)}
                    >
                  </Combobox>
               
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="First Name..."
                  autoFocus
                  onChange = {(e)=>{
                    setStateValue.setFirstName(e.target.value);
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
                    setStateValue.setLastName(e.target.value);
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
                    setStateValue.setCheckIn(e.target.value);
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
                    setStateValue.setCheckOut(e.target.value);
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
