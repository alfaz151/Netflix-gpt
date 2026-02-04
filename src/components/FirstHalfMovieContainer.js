import { useSelector } from "react-redux";
import VideoPlaying from "./VideoPlaying";
import VideoTitle from "./VideoTitle";
import { useEffect } from "react";
import callRest from "../utils/callRest";
import { TMDB_CONFIG } from "../utils/constants";
import { addNowPlayingTrailer } from "../utils/movieSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import Loading from "./Loading";

const FirstHalfMovieContainer = () => {
    const [loading, setLoading] = useState(true);
    
    const movies = useSelector(state => state.movie.nowPlayingMovies.results);
    const displayMovie = movies[0];
    
    const dispatch = useDispatch();
    useEffect(() => {
        const url = `https://api.themoviedb.org/3/movie/${displayMovie.id}/videos?language=en-US`;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${TMDB_CONFIG.READ_ACCESS_TOKEN}`
            }
        };
        callRest(url, options.method, options.headers).then((res) => dispatch(addNowPlayingTrailer(res))).finally(() => setLoading(false));
    }, [])

    if (loading) {
        return <Loading isLoading={true}/>;
    }

    return (<>
        <div className="relative">
            <VideoPlaying />
            <VideoTitle movie={displayMovie}/>
        </div>
    </>)
}

export default FirstHalfMovieContainer;