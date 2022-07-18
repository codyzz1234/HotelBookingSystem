/*Required components*/
import React from 'react'
import { useRef } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import { useState} from 'react';
import {Link,useNavigate} from "react-router-dom"
import {useEffect } from 'react';
import { Alert } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
/*Style Sheets*/
import 'react-toastify/dist/ReactToastify.css';
import "../../assets/Styles/SignUpPageStyle/SignUpStyle.css"
import "../../assets//Styles//GlobalStyle.css"
/*images*/
import SignUpLogo from "../../assets/Images/SignUpPageImages/SignUpImage.png"




export const SignUpPage = () => {
  const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup, currentUser } = useAuth()
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const[doesMatch,setMatch] = useState("yes");
    const[disableButton,setDisableButton] = useState(false);

    // useEffect(() => {
    //     if(currentUser) {
    //         navigate('/')
    //     }
    // }, [])

    /*Sign in New User*/
    async function handleSubmit(e) {
        e.preventDefault();
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords do not match")
        }
        try {
            setDisableButton(true);
            setError("")
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            signUpToast();
            setTimeout(() => {
              navigate("/")
            }, 2000);

        } catch(AuthError) {
            setError(AuthError.code)
            setDisableButton(false);
            // setError(e)
        }
        setLoading(false)
    }

    
    /*Generate Sign up toast*/
    const signUpToast = ()=>{
      const customId = "custom-id-yes";

      toast.success('User Created', {
        toastId: customId,
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }


  // check if password matches on change.
  const checkMatch = () =>{
    if(passwordConfirmRef.current.value !== passwordRef.current.value){
      console.log("Does not match")
      setMatch("no");
    }
    else{
      setMatch("yes");
    }
  }

  return (
  <div className="SignUpPage">
    <>
    <ToastContainer className="SignUpToast"></ToastContainer>
    <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title>Sign Up Page</title>
    <div className="flex-container">
      <div className="form-container"> 
        <img
          src = {SignUpLogo}
          alt=""
          className=""
        />
        {error.length > 0 ? 
            <Alert variant="danger">
              {error}
            </Alert>
            :""
        }

        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              ref = {emailRef}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              ref = {passwordRef}
              onChange = {(e)=>{
                e.preventDefault();   
                checkMatch();
              }}
          
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              onChange={(e)=>{
                e.preventDefault();   
                checkMatch();
              }}
              ref = {passwordConfirmRef}
            />
            <h6 
              style = {{color:doesMatch === "no" ? "red":""}}
              className = "DoNotMatch"
            >
              {doesMatch === "yes" ? "":"passwords do not match"}
            </h6>
          </div>
          <button 
            disabled = {disableButton}
            type="submit"
            className= "btn btn-success signUpButton"  
            onClick={(e)=>{
              e.preventDefault();
              setDisableButton(true);
              handleSubmit(e);
            }}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  </>
 </div>
  
 

  )
}
