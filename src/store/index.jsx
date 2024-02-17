import { configureStore, createSlice, createAction } from '@reduxjs/toolkit'

// const reset

const moviesSlice = createSlice({
    name: 'movie',
    initialState: [],
    reducers: {
        addMovie(state, action) {
            state.push(action.payload)
        },
        removeMovie(state, action) {
             const index = state.indexOf(action.payload)
             state.splice(index, 1)
        },
        searchMovies(state, action) {
            const searchText = action.payload.toLowerCase(); // Case-insensitive search
            return state.searchResults = state.movies.filter((movie) => movie.toLowerCase().includes(searchText));
          },
    }
})

const songsSlice = createSlice({
    name: 'song',
    initialState: [],
    reducers: {
        addSong(state, action) {
            state.push(action.payload)
        },
        removeSong(state, action) {
            const index = state.indexOf(action.payload)
            state.splice(index, 1)
        },
        // extraReducers(builder) {
        //     builder.addCase(moviesSlice.actions.reset.toString(), (state, action) => {
        //     return []
        //     })
        // }
    }
})

const store = configureStore({
    reducer: {
        songs: songsSlice.reducer,
        movies: moviesSlice.reducer
    }
})

console.log(store.getState())

// console.log(songsSlice.actions.addSong('song!'))

// const startingState = store.getState()
// console.log("0", JSON.stringify(startingState))

// store.dispatch({
//     type: 'song/addSong',
//     payload: 'New Song!'
// })

// const finalState = store.getState()
// console.log("1", JSON.stringify(finalState))


export { store }
export const { addSong, removeSong } = songsSlice.actions
export const { addMovie, removeMovie, searchMovies } = moviesSlice.actions

// console.log(moviesSlice.actions.reset.toString())
