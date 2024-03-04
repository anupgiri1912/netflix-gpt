import React, { useEffect } from 'react'
import {  signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {  onAuthStateChanged } from "firebase/auth";
import { addUser,removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGE } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const user=useSelector(store => store.user); 
  const showGptsearch=useSelector(store => store.gpt.showGptsearch);

 const handleSignOut = () =>{
  signOut(auth)
  .then(() => {
  }).catch((error) => {
    navigate("/error");
  });
  
 };

 useEffect(() =>{
 const unsubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,displayName,photoURL }= user;
        dispatch(
          addUser(
             {uid:uid,
              email:email,
              displayName:displayName,
              photoURL:photoURL,
      })
        );
     navigate("/browse");
      } else {
        // User is signed out
      dispatch(removeUser());
     navigate("/");
     
      }
    });
    // Unsubscribe when components unmounts
return () => unsubscribe();

},[])

const handleGptSearchClick = () =>{
 dispatch(toggleGptSearchView);
 
}

const handleLanguageChange =(e)=>{
  dispatch(changeLanguage(e.target.value)) 

}

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
    <img 
    className='w-44'
    src={LOGO}
    alt="logo" />
      
    { user && <div className='flex p-2'> 

    { !showGptsearch &&(<select className='p-2 m-2 bg-gray-900 text-white' onChange={handleLanguageChange}>
      {SUPPORTED_LANGUAGE.map((lang)=> (
      <option key={lang.identifier} value={lang.identifier}>{lang.name}
      </option>
        ))}
    </select>)}

     <button
     
    className='px-4 py-2 mx-4 my-2 bg-purple-800 text-white rounded-lg'
    onClick={handleGptSearchClick} 
   >
   {!showGptsearch?"Homepage":"GPT Search"}
      </button>

        <img 
        className='w-12 h-12'
        src= {user?.photoURL}   
         alt="usericon" />

        <button onClick={handleSignOut}
        className='font-bold text-white'>(Sign Out)</button>
      </div>
}
    </div>
  )
}

export default Header

 