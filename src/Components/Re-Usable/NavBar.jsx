import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

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


  return (
    <div className="Nav-Bar-Container">
            <div className="nav-bar">
              <ul className="nav-items">
                <li className="nav-item Home">
                  <a href className="NavLink">
                    <i className="fa-solid fa-house fa-2xl" />
                    Home
                  </a>
                </li>
                <li className="nav-item Reserve">
                  <a href className="NavLink">
                    <i className="fa-solid fa-book fa-2xl" />
                    Reserve
                  </a>
                </li>
                <li className="nav-item LogOut">
                  <a href className="NavLink">
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