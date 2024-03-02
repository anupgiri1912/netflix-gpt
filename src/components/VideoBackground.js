
import { useSelector } from 'react-redux';
import useMovieTraler from '../hooks/useMovieTrailer';


const VideoBackground = ({movieId}) => {

    const trailerVideo=useSelector(store => store.movies?.trailerVideo);
    
     useMovieTraler(movieId);

  return (
    <div className='w-screen'>
    <iframe 
    className='w-screen aspect-video'
    // width="560"
    //  height="315" 
     src={"https://www.youtube.com/embed/"+trailerVideo?.key + "?&autoplay=1&mute=1"}
      title="YouTube video player" 
      frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    >
 
      </iframe>
    </div>
  )
}

export default VideoBackground


