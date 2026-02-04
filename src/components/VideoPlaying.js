import { useSelector } from "react-redux";

const VideoPlaying = () => {
    const nowPlayingVideoData = useSelector(state => state.movie.nowPlayingTrailer)

    let trailer = nowPlayingVideoData.results.filter((ele) => ele.type === 'Trailer')
    trailer = trailer.length ? trailer : [nowPlayingVideoData.results[0]];

    const url = `https://www.youtube.com/embed/${trailer[0].key}?si=S4wENEbnCQSsCdYU&autoplay=1&mute=1`

    return <>
        <div className="w-screen z-0 relative bottom-17">
            <iframe className = "w-screen aspect-video" src={url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
    </>
}

export default VideoPlaying;