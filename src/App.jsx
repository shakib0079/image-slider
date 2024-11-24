
import { useState } from 'react'
import './App.css'
import Tempcard from './components/Tempcard'

function App() {

  let [temp, setTemp] = useState(23)

  function increase(){
    if(temp < 28) setTemp(temp + 1)
    return;
  }

  function decrease(){
    if(temp > 0) setTemp(temp - 1)
    return;
  }

  return (
    <>
      <Tempcard temp={temp} incHandler={increase} decHandler={decrease}/>
    </>
  )
}

export default App
