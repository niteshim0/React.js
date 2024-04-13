import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from './Layout.jsx'
import { Route,RouterProvider,createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { About, Contact, Github, Home, User } from './components/components.js'

const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/niteshim0')
  const data = await response.json()
  console.log(data)
  return data
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path = "user/:userId" element={<User/>}/>
      <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github/>}
       />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>,
)
