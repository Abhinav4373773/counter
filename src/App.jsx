import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function handleIncreament ()
  {
    if (count<10)
    {
      setCount((prev)=>prev+1)
    }
    else
    {
      setCount(10)
      alert("Count value cannot be greater than 10")
    }
    console.log(count)
  }
  function handleDecreament(){
    if (count>0){
      setCount((prev)=>prev-1)
    }
    else if (count==0){
      setCount(0)
      alert("Count Value Cannot be less than zero")
    }
    console.log(count)
  }
  console.log(count)
  return (
    <>
      <p>Count: {count}</p>
      <p>Count: {count}</p>
      <button onClick={handleIncreament}>Incrase</button>
      <button onClick={handleDecreament}>Decrease</button>
    </>
  )
}

export default App
