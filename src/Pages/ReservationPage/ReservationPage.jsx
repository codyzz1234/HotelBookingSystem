import React from 'react'
//*Components*//
import NavBar from '../../Components/Re-Usable/NavBar/NavBar'
/*Stylesheets*/
import "../../assets///Styles//bootstrap.css"
import "../../assets//Styles//GlobalStyle.css"
import "../ReservationPage//ReservationStyle.css"

const ReservationPage = ()=>{
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
            </div>
          </div>
        </div>
      </div>
    )
}


export default ReservationPage