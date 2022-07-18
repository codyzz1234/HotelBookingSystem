import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import "../../assets/Styles/HomePageStyle/StyleSheetTest.css"
import NavBar from '../../Components/HomePage/DashNav'
import DashNav from '../../Components/HomePage/DashNav'
import "../../assets//Styles//HomePageStyle//DashboardStyle.css"
import "../../assets///Styles//bootstrap.css"


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
    <div>
    <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="../src/assets/Styles/HomePageStyle/DashboardStyle.css" />
    <link rel="stylesheet" href="/src/assets/Styles/bootstrap.css" />
    <title>Dashboard</title>
    <div className="grid-container">
      <div className="Nav-Bar-Container">
        <DashNav></DashNav>
      </div>
      <div className="content">
        <h1> Content</h1>
      </div>
    </div>
  </div>


    
  )

  


}

export default HomePage