import React,{useState} from 'react'
import './App.css'

const App = () => {
  let [counter,setCounter] = useState(0);

  const increaseValue = () => {
    if(counter<20){
      setCounter(counter+1)
    }else{
      alert("Counter is already at maximum value")
    }
  }

  const decreaseValue = () => {
    if(counter>0){
      setCounter(counter-1)
    }else{
      alert("Counter is already at minimum value")
    }
  }
  return (
    <>
    <h3>Counter Project</h3>
    <h1>{counter}</h1>
    <button onClick={increaseValue}>Increment</button>
    <button onClick={decreaseValue}>Decrement</button>
    </>
  )
}

export default App