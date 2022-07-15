import React from 'react'
import "../../assets/Styles/SignUpPageStyle/SignUpStyle.css";
import SignUpLogo from "../../assets/Images/SignUpPageImages/SignUpImage.png"
export const SignUpPage = () => {
  return (
    <>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link
    rel="stylesheet"
    href="../src/assets/Styles/SignUpPageStyle/SignUpStyle.css"
  />
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
          />
        </div>
        <button type="submit" className="btn btn-primary signUpButton">
          Submit
        </button>
      </form>
    </div>
  </div>
  </>

  )
}
