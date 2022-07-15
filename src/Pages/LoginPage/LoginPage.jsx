import React, { useState } from 'react'
import adminLogoImage from "../../assets/Images/adminsign.svg"
import "../../assets/Styles/LoginStyle/LoginStyle.css"
import "../../assets/Styles/bootstrap.css"
import Form from 'react-bootstrap/Form'
import {useRef,forwardRef,useEffect} from 'react';

function LoginPage() {
    
    const emailRef = useRef();
    const passwordRef = useRef();

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
                type="email"
                className="inplog"
                placeholder="Email"
                value = {userName  || ''}
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
                value = {passWord || ''}
                name="password"
                required=""
                ref={passwordRef}
              />
              <br />
              <br />
              <button
                    className="inplog btn btn-primary"
                    style={{ borderRadius: 15 }}
                    onClick = {(e)=>
                        {
                            e.preventDefault();

                        }
                    }
              >
                    Sign In
              </button>
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
