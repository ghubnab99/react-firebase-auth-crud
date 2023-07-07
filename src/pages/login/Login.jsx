import React from 'react'
import "./login.scss"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../firebase"
import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';

const Login = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("john_smith@ecomadmin.com");
  const [password, setPassword] = useState("123456");
  const [isProcessing, setIsProcessing] = useState(false);

  const navigate = useNavigate();

  const {dispatch} = useContext(AuthContext)



  const handleLogin = (e) => {    
    e.preventDefault();
    setIsProcessing(true);

    setError(false);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch({type:"LOGIN", payload:user})
        navigate("/")
      })
      .catch((error) => {
        setError(true);
      });

      setIsProcessing(false);
  };

  return (
    <div className="login">
      <form onSubmit={handleLogin}>
        <input type="email" required placeholder='Email Address' value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" required placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>

        <button type='submit'>
          {isProcessing ? "Logging In..." : "Login" }
        </button>


        {error && <span>Wrong email or password!</span>}
      </form>
    </div>
  )
}

export default Login