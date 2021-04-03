import React, {useState} from "react";
//add css import
import Axios from 'axios'


function Register(){

    // statehook for axios?
    const[username, setUsername] = useState('')
    const[password, setPassword] = useState('')
    const[email, setEmail] = useState('')

    const register = () => {
        Axios.post("http://localhost:3000/user/register", {
            username: username, password: password, email: email
        }).then((response) =>{
            console.log(response)
        })
    }
    return(
        <div className="Register">
            <h1>Registration</h1>
            <div className="RegisterForm">
                <input type="text" placeholder="Username"
                 onChange={(event)=>{
                     setUsername(event.target.value)
                     }}/>
                <input type="text" placeholder="Password"
                onChange={(event)=>{ 
                    setPassword(event.target.value)
                    }}/>
                <input type="text" placeholder="email"
                onChange={(event)=>{
                    setEmail(event.target.value)
                    }}/>
                <button onClick={register}>Register</button>
            </div>
        </div>
    );
}

export default Register;