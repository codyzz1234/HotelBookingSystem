/*Required components*/
import React from 'react'
import "../../assets/Styles/SignUpPageStyle/SignUpStyle.css";
/*images*/
import SignUpLogo from "../../assets/Images/SignUpPageImages/SignUpImage.png"
import { useRef } from 'react';
import { useAuth } from '../../contexts/AuthContext';


export const SignUpPage = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();


  const createUser = ()=>{
    console.log("Signing utype")
    console.log("Email is" + emailRef.current.value);
    console.log("password is " + passwordRef.current.value);
    emailRef = emailRef.current.value
  }

 

  return (
  <>
    <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="../src/assets/Styles/SignUpPageStyle/SignUpStyle.css"
    />
    <link rel="stylesheet" href="../../" />
    <link rel="stylesheet" href="../src/assets/Styles/bootstrap.css" />
    <title>Document</title>
    <div className="flex-container">
      <div className="form-container"> 
        <img
          src = {SignUpLogo}
          alt=""
          className="img-fluid"
        />

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
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              ref = {passwordConfirmRef}
            />
          </div>
          <button 
            type="submit"
            className="btn btn-success signUpButton"
            onClick={(e)=>{
              e.preventDefault();
              createUser();
            }}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  </>

  )
}
