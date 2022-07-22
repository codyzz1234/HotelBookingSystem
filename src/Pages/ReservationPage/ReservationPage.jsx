import React from 'react'
import { useEffect } from 'react'
//*Components*//
import NavBar from '../../Components/Re-Usable/NavBar/NavBar'
import { useState } from 'react'
/*Stylesheets*/
import "../../assets///Styles//bootstrap.css"
import "../../assets//Styles//GlobalStyle.css"
import "../ReservationPage//ReservationStyle.css"
import CustomerService from '../../services//customer.services'
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { GridToolbar, GridToolbarColumnsButton, GridToolbarContainer, GridToolbarDensitySelector, GridToolbarExport, GridToolbarFilterButton, GridToolbarQuickFilter } from '@mui/x-data-grid/components'
import { async } from '@firebase/util'
import { doc } from 'firebase/firestore'
import AddReservationModal from './Modal/AddReserveModal'
import EditReservationModal from './Modal/EditReservationModal'


const ReservationPage = ()=>{
  const customerService  = new CustomerService();
  //Store firebase Data in this state*/
  const[reserves,setReserves] = useState([]);
  /*Show Modal States*/
  const[showAddModal,setShowAddModal] = useState(false);
  const[showEditModal,setShowEditModal] = useState(false);
  const[showDeleteModal,setShowDeleteModal] = useState(false);
  const[reserveInfo,setReserveInfo] = useState(" ");
  /* Pass these states to modal*/
  const[id,setId] = useState(0);
  const[firstName,setFirstName] = useState()
  const[lastName,setLastName] = useState();
  const[checkIn,setCheckIn] = useState();
  const[checkOut,setCheckOut] = useState();
  const[roomNum,setRoomNum] = useState();
  const currentStateValue = {
    id,
    firstName,
    lastName,
    checkIn,
    checkOut,
    roomNum,
  }
  const setStateValue = {
    setId,
    setFirstName,
    setLastName,
    setCheckIn,
    setCheckOut,
    setRoomNum,
  }

  /*load table state*/
  const[loadTable,setLoadTable] = useState(false);

  useEffect(() => {
    getAllReserve();
  },[])

  useEffect(()=>{
    if(loadTable === false){
      console.log("Load table is false")
      return;
    }
    else{
      console.log(" table is true")
      getAllReserve();
      setLoadTable(false);
    }
  },[loadTable])


  
  const getAllReserve = async() =>{
    const data = await customerService.getAllReserve();
    console.log(data.docs);
    setReserves(data.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
  }




  const columns = [
    {
      flex:1,
      field: 'id', 
      headerName: 'ID', 
      hide:true,
    }, 
    { 
      flex:1,
      field: 'FirstName', 
      headerName: 'First Name', 
    },

    { 
      flex:1,
      field: 'LastName', 
      headerName: 'Last Name', 
    },
    { 
      flex:1,
      field: 'CheckInDate', 
      headerName: 'Check In', 
    },
    { 
      flex:1,
      field: 'CheckOutDate', 
      headerName: 'Check Out', 
    },
    { 
      flex:1,
      field: 'RoomNumber', 
      headerName: 'Room Number', 
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
              EditReservation(params);
            }}>
            Edit
          </button>
          <button type="button" className="btn btn-danger">
            Delete
          </button>
          </>
         )
      }
    }
  ];

  const EditReservation = (params)=>{
    let reserveInfo = params.row;
    // console.log(reserveInfo); // Print Current row being ;clicked
    setId(reserveInfo.id);
    setFirstName(reserveInfo.FirstName)
    setLastName(reserveInfo.LastName)
    setCheckIn(reserveInfo.CheckInDate)
    setCheckOut(reserveInfo.CheckOutDate)
    setRoomNum(reserveInfo.RoomNumber)
    setShowEditModal(true);
  }

  const DeleteReservation = (params) =>{
    console.log(obj);
    let obj = params.row;
  }
  

  /* Custom Grid Toolbar */
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
    
    
    return (
    <div>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <title>Document</title>
        <div className="ReservationPage">
          {/* <pre>{JSON.stringify(reserves,undefined,2)}</pre> */}
          <div className="grid-container">
                <NavBar></NavBar>

            <div className="button-container">
              <button className="btn btn-success reserve-button"
                onClick={(e)=>{
                  setShowAddModal(true);
                }}>
                      Add Reservation
              </button>
            </div>

            <div className="table-container">
                <DataGrid 
                className="DataGrid" rows={reserves} 
                columns = {columns}
                components={{
                  Toolbar: customToolBar,
                }}
                />
            </div>
          </div>
        </div>
        {/* Modals */}
        <AddReservationModal 
        show = {showAddModal} 
        closeModal = {setShowAddModal}
        currentStateValue = {currentStateValue}
        setStateValue = {setStateValue}
        setLoadTable = {setLoadTable}
        >
        </AddReservationModal>

        <EditReservationModal 
          show = {showEditModal}
          closeModal = {setShowEditModal}
          currentStateValue = {currentStateValue}
          setStateValue = {setStateValue}
        >
        </EditReservationModal>

      </div>
      
    )
}

/*show modal*/






export default ReservationPage