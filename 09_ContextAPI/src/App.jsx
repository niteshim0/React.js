import { useState } from 'react'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {

  return (
    <UserContextProvider>
      <div>
        <h1>Context API</h1>
        <h2>Open the console to see the output</h2>
      </div>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
