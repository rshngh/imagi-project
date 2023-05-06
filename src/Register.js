import {useRef, useState, useEffect } from "react";
import React from 'react'
import './Register.css'

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = () => {
const userRef=useRef();
const errRef=useRef();

const [user, setUser]=useState('');
const [validName, setValidName]=useState(false);
const [userFocus, setUserFocus]=useState(false);

const [pwd, setPwd]=useState('');
const [validPwd, setValidPwd]=useState(false);
const [pwdFocus, setPwdFocus]=useState(false);

const [matchPwd, setMatchPwd]=useState('');
const [validMatch, setValidMatch]=useState(false);
const [matchFocus, setMatchFocus]=useState(false);

const [errMsg, setErrMsg] = useState('');
const [success, setSuccess] = useState(false);

useEffect(()=>{
    userRef.current.focus();
},[] //there's no dependency here so it only happns when the component loads for the first time
)

useEffect(()=>{
const result = USER_REGEX.test(user);
console.log(result);
console.log(user);
setValidName(result);
},[user]);

useEffect(()=>{
    const result = PWD_REGEX.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
    },[pwd, matchPwd]);

    useEffect(()=>{
      setErrMsg('');
        },[user,pwd, matchPwd]);
        
    const handleSubmit = async(e)=>{
      e.preventDefault();
      //if button enabled with js hack
      const v1= USER_REGEX.test(user);
      const v2=PWD_REGEX.test(pwd);
      if(!v1 || !v2){
        setErrMsg("Invalid Entry");
        return;
      }
}

  return (
    <div>
    <h1>Register</h1>
    <form onSubmit={handleSubmit}>
      <label>Username:</label>
      <input
        type="text"
        id="username"
        ref={userRef}
        autoComplete="off"
        onChange={(e)=>setUser(e.target.value)}
        required
        aria-invalid={validName ? "false" : "true"}
        aria-describedby="uidnote"
        onFocus={()=>setUserFocus(true)}
        onBlur={()=>setUserFocus(false)}
      />

    <p id="uidnote" className={userFocus && user && !validName ? "instruction" : "offscreen"}>
    4 to 24 characters. <br />
    Must begin with a letter. <br />
    Letters, numbers, underscores, - allowed.
    </p>

    <p id="uidnote" className={userFocus && user && !validName ? "instruction" : "offscreen"}>
    4 to 24 characters. <br />
    Must begin with a letter. <br />
    Letters, numbers, underscores, - allowed.
    </p>

    <label>Password:</label>
      <input 
        type="password"
        id="password"
        ref={userRef}
        onChange={(e)=>setPwd(e.target.value)}
        required
        aria-invalid={validPwd ? "false" : "true"}
        aria-describedby="pwdnote"
        onFocus={()=>setPwdFocus(true)}
        onBlur={()=>setPwdFocus(false)}  
      />
<p id="uidnote" className={pwdFocus && !validPwd ? "instruction" : "offscreen"}>
    8 to 24 characters. <br />
    Must include uppercase, lowercase letters, a number and a special character. <br />
    
    </p>

    <label>Confirm Password:</label>
      <input
        type="password"
        id="confirm_pwd"
        onChange={(e)=>setMatchPwd(e.target.value)}
        required
        aria-invalid={validMatch ? "false" : "true"}
        aria-describedby="confirmnote"
        onFocus={()=>setMatchFocus(true)}
        onBlur={()=>setMatchFocus(false)}  
      />
<p id="confirmnote" className={matchFocus && !validMatch ? "instruction" : "offscreen"}>
   Must match the password.
    </p>

<button disabled= {!validName || !validPwd || !validMatch ? true : false}>
{/* since there's only one button we need not to provide type=submit */}
Sign up 
</button> 
    </form>
    <p>
      Already registered?  <br />
      <span className="line">
        {/* put router link here */}
        <a href="#">Sign in</a>
      </span>
    </p>
    </div>
    
  )
}

export default Register