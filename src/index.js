import React from 'react'
import ReactDOM from 'react-dom'

const header = (
  <header>
    <h1>Welcome to 30 Days Of React</h1>
    <h2>Getting Started React</h2>
    <h3>JavaScript Library</h3>
    <p>Leuel Tesfaye</p>
    <small>Oct 2, 2020</small>
  </header>
)

// jsx element , Main 
const main = (
  <main>
    <p>Prerequisite to get started with react.js </p>
  <ul>
    <li>HTML</li>
    <li>css</li>
    <li>Javascript</li>
  </ul>
  </main>
)

// footer 
const footer = (
  <footer>
  <p>copy right 2020 </p>
</footer>
)

const app = (
  <div>
    {header}
    {main}
    {footer}
  </div>
)
const rootElement = document.getElementById('root')

ReactDOM.render(app, rootElement)