import LoginPage from '../src/Pages/LoginPage/LoginPage'
import React from 'react';
import ReactDOM from 'react-dom';
import { SignUpPage } from './Pages/SignUpPage/SignUpPage';
import{Route,Routes} from "react-router-dom";
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return(
    <AuthProvider>
      <div className='App'>
        <Routes>
          <Route exact path="/" element={<LoginPage></LoginPage>}></Route>
          <Route exact path="/signup" element = {<SignUpPage></SignUpPage>}></Route>
        </Routes>
      </div>
    </AuthProvider>
   
  )
}
export default App;
