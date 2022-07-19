import React, { useState } from 'react'
import adminLogoImage from "../../assets/Images/adminsign.svg"
import "../../assets/Styles/bootstrap.css"
import Form from 'react-bootstrap/Form'
import {useRef,forwardRef,useEffect} from 'react';
import{Link, Navigate, useNavigate} from "react-router-dom";
import { useAuth } from '../../contexts/AuthContext'
import { Alert } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
/*Local Style Sheet*/
import "../LoginPage//LoginStyle.css"




function LoginPage() {
    
    const emailRef = useRef();
    const passwordRef = useRef();
    const {login,currentUser} = useAuth();
    const navigate = useNavigate();

    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)


    useEffect(() => {
      if(currentUser) {
          navigate('/HomePage')
      }
    },[])

    //*Login User *//
    async function handleSubmit(e) {
      console.log("Signing in");
      e.preventDefault();
      try {
          setError("")
          setLoading(true)
          await login(emailRef.current.value, passwordRef.current.value)
          signInToast();
          setTimeout(() => {
            navigate("/HomePage")
          }, 2000);
      } catch(error) {
          setError(error.code)
      }
      setLoading(false)
  }

  // Sign In Toast//
  const signInToast = ()=>{
    const customId = "custom-id-yes";
    toast.success('Signing In', {
      toastId: customId,
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }

    // Go to sign up screen//
    const goToSignUpScreen = () =>{
      let path = '/SignUpPage';
      navigate(path);
    }

    return(
      <div className="SignInPage">
    <>
        <ToastContainer className="signInToast"></ToastContainer>
        <div className="row">
          <div className="col-md-6">
            <img src={adminLogoImage} className="pagelog" />
          </div>

          <div className="col-md-6">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <h1 className="brandtitle" style={{ fontSize: 50 }}>
              <b>Welcome Back!</b>
            </h1>
            {
            error.length > 0 ? 
                  <Alert variant="danger">
                    {error}
                  </Alert>
                  :""
            }
            <br />
            <div className="row">
              <div className="col-md-3" />
              <div className="col-md-6 SignInColumn">
                <div style={{ textAlign: "center" }}>
                  <form method="POST" className = "SignInForm">
                    <input 
                      type="email"
                      className="inplog"
                      placeholder="Email"
                      name="username"
                      required=""
                      ref={emailRef}
          
                    />
                    
                    <br />
                    <br />
                    <input
                      type="password"
                      className="inplog"
                      placeholder="Password"
                      name="password"
                      required=""
                      ref={passwordRef}
                    />
                    <br />
                    <br />
                    <button
                          className="inplog btn btn-primary SignInButton"
                          style={{ borderRadius: 15 }}
                          onClick = {(e)=>
                              {
                                  e.preventDefault();
                                  handleSubmit(e);
                              }
                          }
                    >
                          Sign In
                    </button>
                    <br />
                    <a className="text-dark" href="signup.html" onClick={(e)=>{
                      e.preventDefault();
                      goToSignUpScreen();
                    }}>
                      Dont have an account? Sign up here!
                    </a>
                  </form>
                </div>
              </div>
              <div className="col-md-3" />
            </div>
          </div>
        </div>
      </>
      </div>
     
  ) 
}
export default LoginPage
