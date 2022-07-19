import React from 'react'
import { useEffect } from 'react'
//*Components*//
import NavBar from '../../Components/Re-Usable/NavBar/NavBar'
/*Stylesheets*/
import "../../assets///Styles//bootstrap.css"
import "../../assets//Styles//GlobalStyle.css"
import "../ReservationPage//ReservationStyle.css"

import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { GridToolbar, GridToolbarColumnsButton, GridToolbarContainer, GridToolbarDensitySelector, GridToolbarExport, GridToolbarFilterButton, GridToolbarQuickFilter } from '@mui/x-data-grid/components'
const ReservationPage = ()=>{

  const rows = [
    { id: 1, col1: 'Hello', col2: 'World' },
    { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
  ];
  
  const columns = [
  
    {
       flex:1,
       field: 'col1', 
       headerName: 'Column 1', 
       width: 150,
    },

    { 
      flex:1,
      field: 'col2', 
      headerName: 'Column 2', 
      width: 150,
    }
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
          <div className="grid-container">
                <NavBar></NavBar>
            <div className="table-container">
                <DataGrid 
                className="DataGrid" rows={rows} 
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