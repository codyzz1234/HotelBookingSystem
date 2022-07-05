import React from 'react'
import adminLogoImage from "../../assets/Images/adminsign.svg"
import "../../assets/Styles/LoginStyle.css"
import "../../assets/bootstrap.css"
import Form from 'react-bootstrap/Form'
function Login() {
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
            <form method="POST" action="actions/signincont.php">
              <input
                type="text"
                className="inplog"
                placeholder="Username"
                name="username"
                required=""
              />
              <br />
              <br />
              <input
                type="password"
                className="inplog"
                placeholder="Password"
                name="password"
                required=""
              />
              <br />
              <br />
              <button
                type="submit"
                className="inplog btn btn-primary"
                name="signin"
                style={{ borderRadius: 15 }}
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
  export default Login;
  