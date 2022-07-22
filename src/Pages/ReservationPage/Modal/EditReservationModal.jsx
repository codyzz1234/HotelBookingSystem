import React, { useState } from 'react';
import { useEffect } from 'react';
import { Alert } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
/*Services*/
import ReserveService from '../../../services/reserve.services';
import RoomService from "../../../services/room.service"
/*React Widgets*/
import "react-widgets/styles.css";
import { Combobox } from 'react-widgets';






function EditReservationModal(props) {
let messageDisplayed;
const reserveService = new ReserveService();
const roomService = new RoomService();
const[message,setMessage] = useState({type:"none",displayMessage:""});

/*set load table state*/
let setLoadTable = props.setLoadTable;

/*get state value*/
let currentStateValue = props.currentStateValue;
/*get set state method*/
let setStateValue = props.setStateValue;

/*load combo box*/
const[rooms,setRooms] = useState();

const hideModal = () =>{ 
    props.closeModal(false);
}


//* Load combo box*//
useEffect(() => {
  loadRoomsForComboBox();
},[]);

async function loadRoomsForComboBox(){
  try{
    const data = await roomService.getAllRooms();
    setRooms(data.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
  }
  catch(error){
    setMessage({type:"false",displayMessage:"Failed To Load Rooms Combobox"})
  }
}


const updateReservation = async(currentStateValue) =>{
  let id = currentStateValue.id;
  try{
    const docSnap = await reserveService.getReserve(id);
    if(docSnap.exists()){
      // console.log("Document data:", docSnap.data());
      const updatedReservation = {
        FirstName:currentStateValue.firstName,
        LastName:currentStateValue.lastName,
        RoomNumber:currentStateValue.roomNum,
        CheckInDate:currentStateValue.checkIn,
        CheckOutDate:currentStateValue.checkOut
      }
      try{
        await reserveService.updateReserve(id,updatedReservation)
        const timer = setTimeout(() =>
        {
          setMessage({type:"none",displayMessage:""})
          setLoadTable(true);
          hideModal();
        },2000);
        setMessage({type:"true",displayMessage:"Updated Room successfully"})
      }
      catch(error){
        setMessage({type:"none",displayMessage:error.message})
      }
    }
    else{
      setMessage({type:"false",displayMessage:"No such Reservation Found"})
    }
  }
  catch(error){
    // console.log("Error" + error.message);
  }
  
  const updatedReservation = {
    FirstName:currentStateValue.firstName,
    LastName:currentStateValue.lastName,
    RoomNumber:currentStateValue.roomNum,
    CheckInDate:currentStateValue.checkIn,
    CheckOutDate:currentStateValue.checkOut
  }
}


  return (
      <>
        {/* <pre>{JSON.stringify(rooms,undefined,2)}</pre> */}
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
                    defaultValue={currentStateValue.roomNum}
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
                  value = {currentStateValue.firstName}
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
                  value = {currentStateValue.lastName}
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
                  value = {currentStateValue.checkIn}
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
                  value = {currentStateValue.checkOut}
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
            <Button variant="info" onClick = {(e)=>{
                e.preventDefault();
                updateReservation(currentStateValue);
            }} >
              Edit Reservation
            </Button>
          </Modal.Footer>
        </Modal>
      </>
  );

 
 

}

export default EditReservationModal;
