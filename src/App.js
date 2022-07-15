import LoginPage from '../src/Pages/LoginPage/LoginPage'
import React from 'react';
import ReactDOM from 'react-dom';
import { SignUpPage } from './Pages/SignUpPage/SignUpPage';
import{Route,Routes} from "react-router-dom";

function App() {
  return(
    <div className='App'>
      <Routes>
        <Route exact path="/" element={<LoginPage></LoginPage>}></Route>
        <Route exact path="/signup" element = {<SignUpPage></SignUpPage>}></Route>
      </Routes>
    </div>
  )
}
export default App;
