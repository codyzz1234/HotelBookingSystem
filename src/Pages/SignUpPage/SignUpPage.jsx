/*Required components*/
import React from 'react'
import { useRef } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import { useState} from 'react';
/*Style Sheets*/
import 'react-toastify/dist/ReactToastify.css';
import "../../assets/Styles/SignUpPageStyle/SignUpStyle.css"
/*images*/
import SignUpLogo from "../../assets/Images/SignUpPageImages/SignUpImage.png"
import 'react-toastify/dist/ReactToastify.css';
import "../../assets/Styles/SignUpPageStyle/SignUpStyle.css"
import { Alert } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';


export const SignUpPage = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const{signup} = useAuth();

  const[doesMatch,setMatch] = useState("yes");

  const[loading,setLoading] = useState('false');

  const[error,setError] = useState('');


  //Submit form Data
  async function handleSubmit(){
    if((emailRef.current.value).length <= 0){
      setError("Invalid Email Address");
      return
    }
    else if(passwordRef.current.value !== passwordConfirmRef.current.value){
      setError("Passwords do not match");    
      return;
    }
    else{
      try{
        setLoading(true)
        await signup(emailRef.current.value,passwordRef.current.value)
      }
      catch{
        setError("Failed To Make an Account");    
      }
    }
    setLoading(false);
  }

  

  // check if password matches on change.
  const checkMatch = () =>{
    if(passwordConfirmRef.current.value !== passwordRef.current.value){
      console.log("Does not match")
      setMatch("no");
    }
    else{
      console.log(" match")
      setMatch("yes");
    }
  }

  return (
  <>
    <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title>Document</title>
    <div className="flex-container">
      <div className="form-container"> 
        <img
          src = {SignUpLogo}
          alt=""
          className="img-fluid"
        />

        <form>
          {error.length > 0 ? 
            <Alert variant="danger">
              {error}
            </Alert>
            :""
          }
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
              style = {{color:doesMatch !== "yes" ? "red":""}}
            >
              {doesMatch === "yes" ? "":"passwords do not match"}
            </h6>
          </div>
          <button 
            type="submit"
            className="btn btn-success signUpButton"
            onClick={(e)=>{
              e.preventDefault();
              handleSubmit();
            }}
          >
            Sign Up
          </button>
             <ToastContainer></ToastContainer>
        </form>
      </div>
    </div>
  </>
 

  )
}
