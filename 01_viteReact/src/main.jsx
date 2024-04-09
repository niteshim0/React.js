import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

function CustomApp() {
  return (
    <div>
      <h1>Custom App</h1>
    </div>
  )
}

// const ReactElement = {
//   type: 'a',
//   props: { 
//     href: 'https://www.google.com',
//     target : '_blank',
//   },
//   children: ['Click me to visit google']
// }

const anotherReactElement = (
  <a href="https://www.google.com" target="_blank">Click me to visit google</a>
);

const user = '->variable in jsx';
const ReactElement = React.createElement('a', { href: 'https://www.google.com', target: '_blank' }, 'Click me to visit google',user);

ReactDOM.createRoot(document.getElementById('root')).render(
    ReactElement
)



// ReactDOM.createRoot(document.getElementById('root')).render(
//    anotherReactElement
// )
// ReactDOM.createRoot(document.getElementById('root')).render(
//     CustomApp()
// )
