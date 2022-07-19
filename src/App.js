import LoginPage from '../src/Pages/LoginPage/LoginPage'
import React from 'react';
import ReactDOM from 'react-dom';
import { SignUpPage } from './Pages/SignUpPage/SignUpPage';
import{BrowserRouter, Route,Routes} from "react-router-dom";
import ProtectedRoutes from './Components/ProtectedRoutes';
import HomePage from './Pages/HomePage/HomePage';
import ReservationPage from './/Pages//ReservationPage//ReservationPage';

function App() {
  return(
     <BrowserRouter>
        <Routes>
          {/* public routes*/}
            <Route element = {<LoginPage/>} path = "/"></Route>
            <Route element = {<SignUpPage/>} path = "/SignUpPage"></Route>
          {/* {protected routes} */}
          <Route element = {<ProtectedRoutes/>}>
              {/*Home Page Routes*/}
              <Route path = "/HomePage">
                  <Route element = {<HomePage/>} exact path = "/HomePage"></Route>
                  <Route element = {<ReservationPage/>} exact path = "/HomePage/Reservation"></Route>
              </Route>
          </Route>
        </Routes>
     </BrowserRouter>
  )
}
export default App;
