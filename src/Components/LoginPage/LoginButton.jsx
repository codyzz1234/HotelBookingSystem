import React from 'react'
import PropTypes from 'prop-types'


const LoginButton = (props) => {
    let username = props.username;
    let password = props.password;
    let clearUserBox = props.clearUserBox;
    let clearPassBox = props.clearPassbox

    console.log(props.changeState);


    return(
        <button
        className="inplog btn btn-primary"
        style={{ borderRadius: 15 }}
        onClick = {(e)=>
            {
                e.preventDefault();
                clickedButton(username,password,clearUserBox,clearPassBox,props);
            }
        }
>
        Sign In
        </button>
    )    
}
function clickedButton(username,password,clearUserBox,clearPassBox,props){
    console.log("Username is + " +  username)
    console.log("Password is + " +  password)
    clearUserBox("");
    clearPassBox("");


}


export default LoginButton