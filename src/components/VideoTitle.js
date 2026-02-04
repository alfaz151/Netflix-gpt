const VideoTitle = ({ movie }) => {
    const { original_title, overview } = movie;
    return <>
        <div className="w-screen aspect-video z-1 absolute bottom-17 text-white bg-linear-to-r from-black">
            <div className="w-4/12 pt-[18%]">
                <h1 className="p-2 m-2 text-5xl font-bold">{original_title}</h1>
                <h1 className="p-2 m-2">{overview}</h1>
                <div className="p-2 m-2">
                    <button className="bg-white p-3 font-bold text-black hover: bg-opacity-80 rounded">Play Now</button>
                    <button className="bg-gray-500 ml-1 p-3 font-bold text-white rounded">More Info</button>
                </div>
            </div>
        </div>
    </>
}

export default VideoTitle;