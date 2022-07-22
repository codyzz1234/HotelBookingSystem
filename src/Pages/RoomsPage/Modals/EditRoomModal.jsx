import React from 'react'
import {Button,FormButton,Modal,Form} from "react-bootstrap"
const EditRoomModal = (props) => {

  let roomInfo = props.roomInfo;
  let roomSetters = props.roomSetters;
  let id = props.roomNumber

  const hideModal = ()=>{
    props.setShowEditModal(false);
  }

  function hello(){
    console.log()
  }
  return (
     <>
      <Modal show={props.showEditModal} onHide={hideModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Room</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Room Number</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                autoFocus
                value = {roomInfo.roomNumber}
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
          <Button variant="info" onClick={(e)=>{
            e.preventDefault();
          }}>
            Edit Room
          </Button>
        </Modal.Footer>
      </Modal>
    </>  
  )
}

export default EditRoomModal