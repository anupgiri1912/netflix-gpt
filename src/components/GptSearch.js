import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BG_URL } from '../utils/constants'

const GptSearch = () => {
  return (
    <>
    
      <div className='absolute -z-10'>
      <img className=' object-cover'
      src={BG_URL} alt='logo'/>
      </div> 
      <div className=''>
      <GptSearchBar/>
      <GptMovieSuggestion/>
    </div>
    </>
  );
};

export default GptSearch;