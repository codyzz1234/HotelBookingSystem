import React from 'react'
import "../../assets//Styles//bootstrap.css"
import "../../assets//Styles//GlobalStyle.css"
import "../../Pages//RoomsPage//RoomPageStyle.css"
import NavBar from '../../Components/Re-Usable/NavBar/NavBar'
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { GridToolbar, GridToolbarColumnsButton, GridToolbarContainer, GridToolbarDensitySelector, GridToolbarExport, 
    GridToolbarFilterButton, GridToolbarQuickFilter } from '@mui/x-data-grid/components'
import RoomService from '../../services/room.service'
import { useState } from 'react'
import { useEffect } from 'react'
import { async } from '@firebase/util'

const RoomsPage = () => {

    const roomService = new RoomService();
    /*Show Modal States*/
    const[showAddModal,setShowAddModal] = useState(false);
    const[showEditModal,setShowEditModal] = useState(false);
    const[showDeleteModal,setShowDeleteModal] = useState(false);
    const [id,setRoomId] = useState();
    const[roomNum,setRoomNum] = useState();
    const[rooms,setRooms] = useState([]);
    const [loading,setLoading] = useState();
    /*load table state*/
    const[loadTable,setLoadTable] = useState(false);

    useEffect(() => {
        getAllRooms();
      },[])
    
    useEffect(()=>{
        if(loadTable === false){
          console.log("Load table is false")
          return;
        }
        else{
          console.log(" table is true")
          getAllRooms();
          setLoadTable(false);
        }
      },[loadTable])




    const getAllRooms = async() =>{
        const data = await roomService.getAllRooms();
        setRooms(data.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
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


  return (
    <div>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <title>Room Page</title>
        <div className="RoomPage">
            <div className="grid-container">
                <NavBar></NavBar>
                <div className="button-container">
                    <button className="btn btn-success room-button"
                        onClick={(e)=>{
                        }}>
                        Add Room
                    </button>
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
    </div>
  )

}

export default RoomsPage