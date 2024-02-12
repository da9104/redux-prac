import { useState } from 'react'
import Calendar from 'react-calendar'
import './App.css'
import 'react-calendar/dist/Calendar.css';

function App() {
  const [value, setDate] = useState(new Date())

  const onChange = (value) => {
    setDate(value)
  }

  return (
    <>
      <h1>Vite + React</h1>
      <Calendar value={value} onChange={onChange} />
   
    {value.toString()}

    </>
  )
}

export default App
