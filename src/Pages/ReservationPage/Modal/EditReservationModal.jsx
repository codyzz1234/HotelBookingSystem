import React, { useState } from 'react';
import { useEffect } from 'react';
import { Alert } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useRef } from 'react';
/*Services*/
import CustomerService from '../../../services/customer.services';
import RoomService from "../../../services/room.service"
/*React Widgets*/
import "react-widgets/styles.css";
import { Combobox } from 'react-widgets';

function EditReservationModal(props) {
let reserveInfo = props.reserveInfo;
let messageDisplayed;
const customerService = new CustomerService();
const roomService = new RoomService();

const roomNum = useRef();
const firstName = useRef();
const lastName = useRef();
const checkIn = useRef();
const checkOut = useRef();




const[message,setMessage] = useState({type:"none",displayMessage:""});

/*load combo box*/
const[rooms,setRooms] = useState([]);

const hideModal = () =>{ 
    props.closeModal(false);
}

// const addReserve = async(e) =>{
//   e.preventDefault();
//   const newReserve = {
//     FirstName:firstName,
//     LastName:lastName,
//     CheckInDate:checkIn,
//     CheckOutDate:checkOut,
//     RoomNumber:roomNum
//   }

//   try{
//     await customerService.addReserve(newReserve);
//     setMessage({type:"true",displayMessage:"Reservation Added Successfully"})
//   }
//   catch(error){
//     setMessage({type:"false",displayMessage:error.message});
//   }
// }

useEffect(() => {
  loadRoomsForComboBox();
},[]);

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
          
          <Modal.Title>Edit Reservation</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Room Number</Form.Label>
                  <Combobox
                    defaultValue = {reserveInfo.RoomNumber}
                    data = {rooms}
                    dataKey = 'id'
                    textField = 'RoomNumber'
                    ref = {roomNum}
                    >
                  </Combobox>
               
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="First Name..."
                  autoFocus
                  defaultValue = {reserveInfo.FirstName}
                  ref = {firstName}

                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Last Name..."
                  autoFocus
                  defaultValue={reserveInfo.LastName}
                  ref = {lastName}
        

                />
              </Form.Group>


              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Check In Date</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="Check In Date..."
                  autoFocus
                  defaultValue = {reserveInfo.CheckInDate}
                  ref = {checkIn}
              
                >  
                </Form.Control>
     
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Check Out Date</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="Check Out Date.."
                  autoFocus
                  defaultValue = {reserveInfo.CheckOutDate}
                  ref = {checkOut}
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
            <Button variant="info" 
            onClick={(e)=>{
              e.preventDefault();
              console.log("Prevented Default");
            }}
            >
              Edit Reservation
            </Button>
          </Modal.Footer>
        </Modal>
      </>
  );
  
  function editReservation(){
    const editReserve = {
      FirstName:firstName.current.value,
      LastName:lastName.current.value,
      CheckInDate:checkIn.current.value,
      CheckOutDate:checkOut.current.value,
      RoomNumber:roomNum.current.value
    }
  }

  
}

export default EditReservationModal;
