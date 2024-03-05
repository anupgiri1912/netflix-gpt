import React from 'react'
import Header from './Header'
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"; 
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import useTrendingMovies from '../hooks/useTrending';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';

const Browse = () => {
  
const showGptsearch=useSelector(store => store)
//console.log(showGptsearch.gpt.showGptSearch);
const sgs=showGptsearch .gpt.showGptSearch
;

  useNowPlayingMovies()
   usePopularMovies();
  useUpcomingMovies();
useTrendingMovies();
  return (

    <div>
      <Header/>
      {
      sgs?(<GptSearch/>) : (
        <>
        <MainContainer/>
      <SecondaryContainer/>
        </>
        )
       }
        {/* {
        showGptsearch ? (
        <>
        <MainContainer/>
      <SecondaryContainer/>
        </>
        ):(<GptSearch/>) 
       } */}
        
    </div>
  )
}

export default Browse