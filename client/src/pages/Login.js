import React, {useState} from "react";
//add css import
import Axios from 'axios'
//import { Redirect } from "react-router";


function Login(){

    // statehook 
    const[username, setUsername] = useState('')
    const[password, setPassword] = useState('')
    //const[email, setEmail] = useState('')

    const login = () => {
        Axios.post("http://localhost:3000/user/login", {
            username: username, password: password
        }).then((response) =>{
            if( response.status == "200" ) {
                alert("SUccessfull login")

                //redirect him to dashboard
            } else {
                alert("Wrong username / password")
            }
            console.log(response)
        })
    }
    return(
        <div className="Login">
            <h1>Login</h1>
            <div className="LoginForm">
                <input type="text" placeholder="Username"
                 onChange={(event)=>{
                     setUsername(event.target.value)
                     }}/>
                <input type="text" placeholder="Password"
                onChange={(event)=>{ 
                    setPassword(event.target.value)
                    }}/>
                {/* <input type="text" placeholder="email"
                onChange={(event)=>{
                    setEmail(event.target.value)
                    }}/> */}
                <button onClick={login}>Login</button>
                <a href="/register">Register</a>
            </div>
        </div>
    );
}

export default Login;

// import React from 'react'
// import axios from 'axios'

// function Login(){
//     return(
//         <form onSumbit={(e) => auth}>
//         <div className="Login">
//             <h1>Login</h1>
//             <div className="LoginForm">
//                 <input type="text" placeholder="Username" id="username"/>
//                 <input type="text" placeholder="Password" id="password"/>    
//                     <button>login</button>
//                     <a href="/register">Register</a>
//                 </div>
//         </div>
//         </form>
//     );
// }
// function auth(e) {
//     e.preventDefault();
    
//     const request = {
//         username: document.getElementById('username').value,
//         password: document.getElementById('password').value
//     }
//     axios.post("http://localhost:3000/user/login",request) 
//     .then(res =>{
//         alert(res.data.message);
//     }) 
//     .catch (error =>{
//         console.log(error)
//     })
        
    
// }

// export default Login;
