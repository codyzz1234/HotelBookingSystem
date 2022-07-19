import React from 'react'
import { useEffect } from 'react'
//*Components*//
import NavBar from '../../Components/Re-Usable/NavBar/NavBar'
import { useState } from 'react'
/*Stylesheets*/
import "../../assets///Styles//bootstrap.css"
import "../../assets//Styles//GlobalStyle.css"
import "../ReservationPage//ReservationStyle.css"
import CustomerService from '../../services/customer.services'
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { GridToolbar, GridToolbarColumnsButton, GridToolbarContainer, GridToolbarDensitySelector, GridToolbarExport, GridToolbarFilterButton, GridToolbarQuickFilter } from '@mui/x-data-grid/components'
import { async } from '@firebase/util'
import { doc } from 'firebase/firestore'

const ReservationPage = ()=>{
  const customerService  = new CustomerService();
  //Store firebase Data in this state*/
  const[reserves,setReserves] = useState([]);

  useEffect(() => {
    
    getAllReserve();
  },[])
  
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
      width: 150,
      hide:true,
    },
    { 
      flex:1,
      field: 'FirstName', 
      headerName: 'First Name', 
      width: 150,
    },

    { 
      flex:1,
      field: 'LastName', 
      headerName: 'Last Name', 
      width: 150,
    },
    { 
      flex:1,
      field: 'CheckIn', 
      headerName: 'Check In', 
      width: 150,
    },
    { 
      flex:1,
      field: 'CheckOut', 
      headerName: 'Check Out', 
      width: 150,
    },
  ];
  

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
              <button className="btn btn-success reserve-button">
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
      </div>
    )
}





export default ReservationPage