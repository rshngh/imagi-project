
import {useRef, useState, useEffect } from "react";

import React from 'react'

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

const [macthPwd, setMatchPwd]=useState('');
const [validMatch, setValidMatch]=useState(false);
const [matchFocus, setMatchFocus]=useState(false);

const [errMsg, setErrMsg] = useState('');
const [success, setSuccess] = useState(false);

useEffect(()=>{
    useRef.current.focus();
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
    setValidName(result);
    const match = pwd === macthPwd;
    setValidMatch(match);
    },[pwd, macthPwd]);

    useEffect(()=>{
      setErrMsg('');
        },[user,pwd, macthPwd]);
        
    

  return (
    <div>Register
    <h1>Register</h1>
    </div>
    
  )
}

export default Register