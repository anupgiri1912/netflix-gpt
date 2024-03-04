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
const showGptsearch=useSelector(store => store.gpt.showGptsearch);
//console.log("Anup",showGptsearch);
  useNowPlayingMovies()
   usePopularMovies();
  useUpcomingMovies();
useTrendingMovies();
  return (

    <div>
      <Header/>
      {/* {
        showGptsearch ?(<GptSearch/>) : (
        <>
        <MainContainer/>
      <SecondaryContainer/>
        </>
        )
       } */}
        {
        showGptsearch ? (
        <>
        <MainContainer/>
      <SecondaryContainer/>
        </>
        ):(<GptSearch/>) 
       }
        
    </div>
  )
}

export default Browse