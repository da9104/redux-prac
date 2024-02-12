import { configureStore, createSlice } from '@reduxjs/toolkit'

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
        }
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
        }
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
export const { addMovie, removeMovie } = moviesSlice.actions

console.log(songsSlice.actions.addSong())