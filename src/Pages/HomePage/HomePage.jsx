import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { Route, useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
//StylSheets
import "../HomePage//DashboardStyle.css"
import "../../assets///Styles//bootstrap.css"
import "../../assets//Styles//GlobalStyle.css"
//Components
import NavBar from '../../Components/Re-Usable/NavBar/NavBar'
//*Images*/
import ReserveImage from "../../assets/Images/HomePageImages//ReserveImage.jpg"
import CheckOutImage from "../../assets/Images/HomePageImages//CheckOutIcon.jpg"
import RoomImage from "../../assets//Images//HomePageImages//RoomImage.jpg"


import ProtectedRoutes from '../../Components/ProtectedRoutes'
import ReservationPage from '../ReservationPage/ReservationPage'
const HomePage = () => {
  const [error, setError] = useState()
  const navigate = useNavigate()
  const { currentUser, logout } = useAuth()
  
  async function handleLogout() {
      setError("")
      try {
          await logout()
          navigate("/")
      } catch (e) {
          console.error(e)
          setError("Failed to log out")
      }
  }

  return(
    <div className = "HomePage">
    <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
    <title>Dashboard</title>
    <div className="grid-container">
      <NavBar></NavBar>
      <div className="Content-Container">
        <div className="flex-container">
          <div className="flex-item">
            <img src={ReserveImage} alt="" className="Flex-Item-Images" />
            <button type="button" className="btn btn-success BootStrapButton"
              onClick={(e)=>{
                navigate('/HomePage/Reservation')
              }}>
              Reserve A Room
            </button>
          </div>

          <div className="flex-item">
            <img src={RoomImage} alt="" className="Flex-Item-Images" />
            <button type="button" className="btn btn-primary BootStrapButton"
              onClick={(e)=>{
                navigate("/HomePage/RoomsPage")
              }}
            >
              Add A Room
            </button>
          </div>

          <div className="flex-item">
            Item 3;
          </div>
        </div>
        <div className="flex-container">
          <div className="flex-item">
            Item 1;
          </div>
          <div className="flex-item">
            Item 2
          </div>
          <div className="flex-item">
            Item 3;
          </div>
        </div>
      </div>
    </div>

  </div>

  )
}

export default HomePage