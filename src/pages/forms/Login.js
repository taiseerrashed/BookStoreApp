import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Forms.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    
    // Form Submit Handler
    const formSubmitHandler = (e) => {
        e.preventDefault();

        if(email.trim() === "") {
            return toast.error("Email is required!!");
        }
        if(password.trim() === "") {
            return toast.error("Password is required!!");
        } else {
            toast.success("Success Login");
        }
        
        console.log({email, password});
    }

    // Show Password Handler
    const ShowPassWordHandler=()=>{
        setShowPassword((prev) => !prev)
    }

  return (
    <div className='form-wrapper'>
        <ToastContainer style={{whiteSpace:"nowrap"}} />
        <h1 className='form-title'>Login to your account</h1>
        <form onSubmit={formSubmitHandler} className='form'>
            <input 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type='email' placeholder='Email'
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? "text" : "password"}
              placeholder='Password'
            />

            {showPassword ? (
                <i onClick={ShowPassWordHandler} className="bi bi-eye-slash-fill show-password-icon"></i>
            ) : (
                <i onClick={ShowPassWordHandler} className="bi bi-eye-fill show-password-icon"></i>
            )}

            <button className='form-btn'>Login</button>
        </form>
        <div className='form-footer'>
            Don't have an account? {" "}
            <Link to="/register" className='form-link'>Register Now</Link>
        </div>
    </div>
  );
};

export default Login;