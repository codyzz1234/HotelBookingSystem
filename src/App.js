import LoginPage from '../src/Pages/LoginPage/LoginPage'
import React from 'react';
import ReactDOM from 'react-dom';
import { SignUpPage } from './Pages/SignUpPage/SignUpPage';
import{BrowserRouter, Route,Routes} from "react-router-dom";
import ProtectedRoutes from './Components/ProtectedRoutes';

function App() {
  return(
     <BrowserRouter>
        <Routes>
        
          <Route element = {<ProtectedRoutes/>}>
              <Route element = {<LoginPage/>} exact path = "/LoginPage"></Route>
          </Route>
          <Route element = {<SignUpPage/>} exact path = "SignUpPage"></Route>

        
          {/* <Route exact path="/LoginPage" element={<LoginPage/>}></Route>
          <Route exact path="/SignUpPage" element = {<SignUpPage></SignUpPage>}></Route> */}
        </Routes>
     </BrowserRouter>

   
  )
}
export default App;
