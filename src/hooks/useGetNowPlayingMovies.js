import { useEffect, useState } from "react";
import callRest from "../utils/callRest";
import { TMDB_CONFIG } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";

const useGetNowPlayingMovies = () => {
    const [loading, setLoading] = useState(true);

    const dispatch = useDispatch()

    const getNowPlayingMovies = () => {
        const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${TMDB_CONFIG.READ_ACCESS_TOKEN}`
            }
        };

        callRest(url, options.method, options.headers).then((result) => dispatch(addNowPlayingMovies(result))).catch(console.error).finally(() => setLoading(false));
    }   

    useEffect(() => {
        console.log("useEffect called")
        getNowPlayingMovies();
    }, []);

    return { loading };
}

export default useGetNowPlayingMovies;