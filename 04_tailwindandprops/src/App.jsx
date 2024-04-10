import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const arr1 = ["#Macbook","#Apple","#Laptop"];
  const arr2 = ["#ChromeBook","#Google","#Laptop"];
  const arr3 = ["#LenovoBook","#Lenovo","#Laptop"];
  return (
    <>
       <h2>Reading Props in React</h2>
       <Card objName="Macbook" hash={arr1}/>
       <Card objName="ChromeBook" hash={arr2}/>
       <Card objName="LenovoBook" hash={arr3}/>
    </>
  )
}

export default App
