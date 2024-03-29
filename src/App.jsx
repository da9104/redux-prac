import { useState } from 'react'
import { useDispatch } from 'react-redux'

import Calendar from './components/Calendar'
import Counter from './components/Counter';
import SongPlayList from './components/SongPlayList'
import MoviePlayList from './components/MoviePlayList'

// import Calendar from 'react-calendar'
import './App.css'
import 'react-calendar/dist/Calendar.css';
import './store'

function App() {
  const dispatch = useDispatch()
  const handleResetButton = () => {
    // dispatch(reset())
  }


  return (  
    <div className="bg-gradient-to-r from-violet-100 to-indigo-100 flex items-center justify-center h-screen w-screen">
    <h2 className='absolute top-5 underline font-medium'> Add your favorites  <button onClick={() => handleResetButton()}> Reset </button> </h2>
   

      <MoviePlayList />
      <SongPlayList />


    </div>
  )
}

export default App
