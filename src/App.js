import LoginPage from '../src/Pages/LoginPage/LoginPage'
import React from 'react';
import ReactDOM from 'react-dom';
import { SignUpPage } from './Pages/SignUpPage/SignUpPage';
import{BrowserRouter, Route,Routes} from "react-router-dom";
import ProtectedRoutes from './Components/ProtectedRoutes';
import HomePage from './Pages/HomePage/HomePage';

function App() {
  return(
     <BrowserRouter>
        <Routes>
          <Route Path></Route>
          {/* public routes*/}
            <Route element = {<LoginPage/>} path = "/"></Route>
            <Route element = {<SignUpPage/>} path = "/SignUpPage"></Route>
      
          {/* {protected routes} */}
          <Route element = {<ProtectedRoutes/>}>
              <Route element = {<HomePage/>} path = "/HomePage"></Route>
          </Route>
        </Routes>
     </BrowserRouter>
  )
}
export default App;
