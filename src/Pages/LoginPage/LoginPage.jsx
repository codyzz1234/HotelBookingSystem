import React, { useState } from 'react'
import adminLogoImage from "../../assets/Images/adminsign.svg"
import "../../assets/Styles/LoginStyle.css"
import "../../assets/bootstrap.css"
import Form from 'react-bootstrap/Form'
import {useRef,forwardRef,useEffect} from 'react';
import LoginButton from '../../Components/LoginPage/LoginButton'

function LoginPage() {
    const[userName,setUsername] = useState();
    const[passWord,setPassword] = useState();


    return(
        <div className="container-fluid index">
  <div className="row">
    <div className="col-md-6">
      <img src={adminLogoImage} className="pagelog" />
    </div>
    <div className="col-md-6">
      <br />
      <br />
      <br />
      <h1 className="brandtitle" style={{ fontSize: 50 }}>
        <b>Welcome Back!</b>
      </h1>
      <br />
      <div className="row">
        <div className="col-md-3" />
        <div className="col-md-6">
          <div style={{ textAlign: "center" }}>
            <form method="POST">
              <input 
                type="text"
                className="inplog"
                placeholder="Username"
                value = {userName  || ''}
                name="username"
                required=""
                onChange={(e)=>{
                  setUsername(e.target.value)            
                }}
              />
              
              <br />
              <br />
              <input
                type="password"
                className="inplog"
                placeholder="Password"
                value = {passWord || ''}
                name="password"
                required=""
                onChange={(e)=>{
                  setPassword(e.target.value)
                }}
              />
              <br />
              <br />
              <LoginButton username = {userName} password = {passWord} clearUserBox = {setUsername} clearPassbox = {setPassword} ></LoginButton>
              <br />
              <a className="text-dark" href="signup.html">
                Dont have an account? Sign up here!
              </a>
            </form>
          </div>
        </div>
        <div className="col-md-3" />
      </div>
    </div>
  </div>
</div>
  ) 
}
export default LoginPage
