import React from 'react'

const App = () => {
  const username = 'Vite React'
  return (
    <div>Vite React {username}</div>
  )
}

// javascript is used inside the curly braces is evaluated expression , not normal js , since at the end the whole jsx is converted to js object for evaluation and js object does not have any concept of conditionals , so no if else can be used in jsx

export default App