import React from 'react'
import { Modal } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import ReserveService from '../../../services/reserve.services'
import { useState } from 'react'
import { Alert } from 'react-bootstrap'
const DeleteReserveModal = (props) => {
let id = props.currentStateValue.id;
let setLoadTable = props.setLoadTable;
const[message,setMessage] = useState({type:"none",displayMessage:""});
// console.log("Id isxxx" + data);

const hideModal =()=>{
    props.closeModal(false);    
}

const deleteReservation = async()=>{
  const reservationService = new ReserveService();
  try{
      await reservationService.deleteReserve(id);
      setMessage({type:"true",displayMessage:"Deleted Reservation Succesfully"});
      const timer = setTimeout(() =>
      {
        setMessage({type:"none",displayMessage:""})
        setLoadTable(true);
        hideModal();
      },2000)
    }
    catch(error){
      setMessage({type:"false",displayMessage:"Deleted Reservation Succesfully"});
    }

}
  return (
        <Modal show={props.show} onHide={hideModal}>
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
            <Modal.Title>Delete</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to delete this Reservation</Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={hideModal}>
                Close
            </Button>
            <Button variant="danger" onClick={(e)=>{
                deleteReservation();
            }}>
                Delete
            </Button>
            </Modal.Footer>
        </Modal>
  )
}

export default DeleteReserveModal