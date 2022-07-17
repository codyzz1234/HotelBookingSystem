import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import "../../assets/Styles/HomePageStyle/StyleSheetTest.css"


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

  const addClassButton = useRef();

  const addSomeClass = () =>{
    addClassButton.current.className = "bayot";
  }

  return(
    <div className="container">

    <div className="button"
              onClick={(e)=>{
                handleLogout();
              }}>
          Logout
        </div>

        <button className="addClassButton"
            ref = {addClassButton}
            onClick = {(e)=>{
              e.preventDefault();
              addSomeClass();
            }}>
          addclass Test
        </button>
    </div>
    
  )


}

export default HomePage