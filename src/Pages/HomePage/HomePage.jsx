import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'


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




}

export default HomePage