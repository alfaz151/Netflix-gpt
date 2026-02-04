import FirstHalfMovieContainer from "./FirstHalfMovieContainer";
import Header from "./Header";
import SecondHalfMovieContainer from "./SecondHalfMovieContainer";
import useGetNowPlayingMovies from "../hooks/useGetNowPlayingMovies";

const Browse = () => {
    const { loading } = useGetNowPlayingMovies()

    if (loading) {
        return <div>Loading...</div>;
    }

    return <>
        <div className="relative">
            <Header />
            <div className="pt-20">
                <FirstHalfMovieContainer />
                <SecondHalfMovieContainer />
            </div>
        </div>
    </>;
};

export default Browse;
