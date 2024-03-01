import React, { useRef, useState } from 'react'
import Header from './Header';
import { checkValidData } from '../utils/validate';

const Login = () => {
const [isSignInForm,setIsSignInForm]=useState(true);
const [errorMessage,setErrorMessage]=useState(null);
const name=useRef(null);
const email=useRef(null);
const password=useRef(null);

const handleButtonClick =() =>{
//validate the form data
console.log(name.current.value); 
console.log(email.current.value);
console.log(password.current.value);


 const message=checkValidData(email.current.value,password.current.value,name.current.value);
console.log(message);
setErrorMessage(message); 
};

const toggleSignInForm =() => {
   setIsSignInForm(!isSignInForm);
};


  return (
    <div>
        <Header/>
        <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg" 
        alt="logo" />
        </div>
        <form onSubmit={(e) =>e.preventDefault()} className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
            <h1 className='font-bold text-3xl py-4'>
              {isSignInForm ? "Sign In":"Sign Up"}
              </h1>

              {
             !isSignInForm && (<input
             ref={name}
              type='text' 
             placeholder='Full Name'
             className='p-4 my-4 w-full bg-gray-700'/>
             )}
            
            <input
            ref={email}
             type='text' 
            placeholder='Email Address'
            className='p-4 my-4 w-full bg-gray-700'/>

     
             

            <input
            ref={password}
             type='password'
            placeholder='Password'
            className='p-4 my-4 w-full bg-gray-700'
            />
            <p className='text-red-500 font-bold text-lg py-3'>{errorMessage}</p>
            <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>
            {isSignInForm ? "Sign In":"Sign Up"}
            </button>
           <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
            {isSignInForm 
            ? "New to Netflix? Sign Un Now"
            :"Already registered? Sign In Now"}
            </p>   
        </form>
    </div>
  )
}

export default Login;