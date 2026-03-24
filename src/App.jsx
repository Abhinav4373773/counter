import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Car } from './comnents/Car'
import Mychild from './comnents/Mychild'

function App() {
  const [count, pila] = useState(0)

  // useEffect(()=>{
  //   setTimeout(()=>{setCount(prev=>prev+1)},5000)
  // })

  function handleIncreament ()
  {
    if (count<10)
    {
      pila(count+1)
      console.log(count)
      console.log(count)
      console.log(count)
      console.log(count)
      console.log(count)
      console.log(count)
    }
    // else
    // {
    //   pila(10)
    //   alert("Count value cannot be greater than 10")
    // }
    console.log("Increment",count)
  }
  function handleDecreament(){
    if (count>0){
      pila((prev)=>prev-1)
      pila((prev)=>prev-1)
      console.log(count);
    }
    else if (count==0){
      pila(0)
      alert("Count Value Cannot be less than zero")
    }
    console.log(count)
  }
  return (
    <>
      <Car name="Harsh" game="Abhinav">My name is Abhinmav Singh</Car>
      <p>Count: {count}</p>
      <button disabled={false} onClick={handleIncreament}>Incrase</button>
      <button onClick={handleDecreament}>Decrease</button>
      <Mychild/>
    </>
  )
}

export default App
