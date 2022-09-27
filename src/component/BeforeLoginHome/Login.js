import React, { useState } from 'react'
import './CSS/Login.css'
import { Link } from 'react-router-dom'
import LoginFooter from './LoginFooter';


const Login = () => {
  const [initialValue, setInitialValue] = useState({ email: "", password: "", check: false });
  const [InpErr, setInpErr] = useState({ email: "", password: "" });


  const inpfldchcnge = (e) => {
    setInitialValue({ ...initialValue, [e.target.name]: e.target.value })
  }
  const btnclick = (e) => {
    e.preventDefault();
    // check error 
    if (initialValue.email.length < 7) {
      setInpErr({ email: "Please enter a valid email or phone number.", password: "" })
    }
    else if (initialValue.password.length < 6) {
      setInpErr({ email: "", password: "Password must be greater than 6 character" })
    }
    else {
      setInpErr({ email: "", password: "" })
    }
  }


  return (
    <>
      <div id='LoginPage'>
        <div className="logincard">
          <h1>Sign In</h1>
          <form action="#">
            <input type="text" name="email" id="email" placeholder='Email or Phone number' value={initialValue.email} onChange={inpfldchcnge} />
            <p className='ErrorInpfld' style={InpErr.email.length > 1 ? { marginBottom: "10px" } : { marginBottom: "15px" }}>{InpErr.email}</p>
            <input type="password" name="password" id="password" placeholder='Password' value={initialValue.password} onChange={inpfldchcnge} />
            <p className='ErrorInpfld'>{InpErr.password}</p>
            <button onClick={btnclick}>Sign In</button>
            <div className="extracon">
              <div className="firstcontent">
                <input type="checkbox" name="rememberme" id="rememberme" value={initialValue.check} onChange={inpfldchcnge} /><span>Remember me</span>
              </div>
              <Link to="/">Need help?</Link>
            </div>
            <div className="signup">
              <span>New to Netflix? <Link to='/' id='singupnoe'>Sign Up now.</Link></span>
            </div>
            <p>This page is protected by Google reCAPTCHA to ensure you're not a bot. <Link to='/' className='learnMore'> Learn more.</Link></p>
          </form>
        </div>
      </div>
        <LoginFooter />
    </>
  )
}

export default Login
