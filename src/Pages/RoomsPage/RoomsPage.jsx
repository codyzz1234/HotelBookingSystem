import React from 'react'
import "../../assets//Styles//bootstrap.css"
import "../../assets//Styles//GlobalStyle.css"
import "../../Pages//RoomsPage//RoomPageStyle.css"
import {Alert} from "react-bootstrap"
import NavBar from '../../Components/Re-Usable/NavBar/NavBar'
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { GridToolbar, GridToolbarColumnsButton, GridToolbarContainer, GridToolbarDensitySelector, GridToolbarExport, 
    GridToolbarFilterButton, GridToolbarQuickFilter } from '@mui/x-data-grid/components'
import RoomService from '../../services/room.service'
import { useState } from 'react'
import { useEffect } from 'react'
import { async } from '@firebase/util'
import EditRoomModal from "../RoomsPage/Modals/EditRoomModal"

const RoomsPage = () => {
    const[message,setMessage] = useState({type:"none",displayMessage:""});
    const roomService = new RoomService();
    /*Show Modal States*/
    const[showEditModal,setShowEditModal] = useState(false);
    const[showDeleteModal,setShowDeleteModal] = useState(false);
    const [id,setRoomId] = useState();
    const[roomNum,setRoomNum] = useState();
    const[rooms,setRooms] = useState([]);
    const [loading,setLoading] = useState();
    /*load table state*/
    const[loadTable,setLoadTable] = useState(false);

    const roomInfo = {
      id:id,
      roomNum:roomNum
    }

    const roomSetters = {
      setRoomId:setRoomId,
      setRoomNum:setRoomNum
    }

    useEffect(() => {
        getAllRooms();
      },[])
    
    useEffect(()=>{
        if(loadTable === false){
          return;
        }
        else{
          getAllRooms();
          setLoadTable(false);
        }
      },[loadTable])




    const getAllRooms = async() =>{
        const data = await roomService.getAllRooms();
        setRooms(data.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
    }

    const editRoom = (params)=>{
      let data = params.row;
      let id = data.id;
      setRoomId(id)
      setRoomNum(data.RoomNumber)
      setShowEditModal(true);
    }


    
    //*Grid generation parameters *//
    const columns = [
        {
            flex:1,
            field:'id',
            headerName:'ID',
            hide:true,
        },
        {
            flex:1,
            field:'RoomNumber',
            headerName:'Room Number',
        },
        {
          field:'action',
          flex:1,
          headerName:"Actions",
          renderCell:(params)=>{ // 
            // console.log(params)
             return(
              <>
              <button type="button" className="btn btn-info"
                onClick={(e)=>{
                   editRoom(params);
                }}>
                Edit
              </button>
              <button type="button" className="btn btn-danger"
               onClick={(e) =>{
               }}
              >
                Delete
              </button>
              </>
             )
          }
        }
    ]
    
    const customToolBar = () =>{
      return (
        <GridToolbarContainer>
          <GridToolbarColumnsButton />
          <GridToolbarFilterButton />
          <GridToolbarDensitySelector />
          <GridToolbarExport/>
          <GridToolbarQuickFilter />
        </GridToolbarContainer>
      )
  }

  async function addRoom(){
    const newRoom = {
      RoomNumber:roomNum
    }
    try{
      await roomService.addRoom(newRoom);
      setMessage({type:"true",displayMessage:"Room Added"})
      const timer = setTimeout(() =>
        {
          setMessage({type:"none",displayMessage:""})
          setLoadTable(true);
        },2000);
    }
    catch(error){
      setMessage({type:"false",displayMessage:error.message})

    }
  }
  


  return (
    <div>
      
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <title>Room Page</title>
        <div className="RoomPage">
        {
                message.type === "true" ?
                <Alert variant = "success">
                  {message.displayMessage}
                </Alert>
                : message.type === "false" ?
                  <Alert variant = "danger">
                    {message.displayMessage}
                  </Alert>
                :message.type === "none"?
                 ""
                :""
          }
          
            <div className="grid-container">
                <NavBar></NavBar>
                <div className="form-container">
                  <form class = "Room-Form">
                      <div className="form-group">
                        <label htmlFor="">Room Number</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Room Number"
                          onChange={(e)=>{
                          e.preventDefault()
                          setRoomNum(e.target.value)
                        }}

                        ></input> 
                      </div>
                      <button type="submit" className="btn btn-primary AddRoom"
                      onClick={(e)=>{
                        e.preventDefault();
                        addRoom();
                      }}
                      >Add Room</button>
                  </form>
               </div>

                <div className="table-container">
                    <DataGrid 
                    className="DataGrid" 
                    columns = {columns}
                    rows = {rooms}
                    components={{
                    Toolbar: customToolBar,
                    }}
                    />
                </div>   
            </div>
       </div>
       {/* {Modals} */}
       <EditRoomModal
        showEditModal = {showEditModal}
        setShowEditModal = {setShowEditModal}
        roomInfo = {roomInfo}
        roomSetters = {roomSetters}
       ></EditRoomModal>
    </div>
  )

}

export default RoomsPage