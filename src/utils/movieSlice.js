import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movie",
    initialState: {
        nowPlayingMovies: {},
        nowPlayingTrailer: {}
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addNowPlayingTrailer: (state, action) => {
            state.nowPlayingTrailer = action.payload
        }
    }
})

export const { addNowPlayingMovies, addNowPlayingTrailer } = movieSlice.actions;

export default movieSlice.reducer;