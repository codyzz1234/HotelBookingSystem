import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../contexts/AuthContext'
import "../NavBar/NavBarStyle.css"
import "../../../assets/Styles//bootstrap.css"


const NavBar = () => {

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

  const goToReservePage = ()=>{
     navigate('/HomePage/Reservation');
  }

  const goToHomePage = ()=>{

    navigate('/HomePage');
  }


  return (
    
    <div className="Nav-Bar-Container">                                
    <div className="nav-bar">
      <h1 className= "welcome-message">{currentUser && currentUser.email}</h1>
      <ul className="nav-items">
        <li className="nav-item Home">
          <a href ="#0" className="NavLink"
            onClick={(e)=>{
               e.preventDefault();
               goToHomePage();
            }}>

            <i className="fa-solid fa-house fa-2xl" />
              Home
          </a>
        </li>
        <li className="nav-item Reserve">
          <a href = "#0" className="NavLink"
              onClick={(e)=>{
                e.preventDefault();
                goToReservePage();
              }
              }>
            <i className="fa-solid fa-book fa-2xl" />
            Reserve A Room
          </a>
        </li>
        <li className="nav-item LogOut">
          <a href = "#0" className="NavLink"
                onClick={(e)=>{
                  e.preventDefault();
                  handleLogout();
                }}>
            <i className="fa-solid fa-arrow-right-from-bracket fa-2xl" />
            Log Out
          </a>
        </li>
      </ul>
    </div>
  </div>

  )
}
export default NavBar