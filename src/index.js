import React from 'react'
import ReactDOM from 'react-dom'
import "./style.css";

const welcome = 'welcome to 30 days of React' // declaring for injecting data into jsx elements
const author = {
  firstName: 'prince', 
  lastName : 'Hope',
}
const header = (
  <header class = 'header'>
    <h1>{welcome}</h1>
    <h2>Getting Started with React</h2>
    <h3>{author.firstName} {author.lastName}</h3>
    <p>Leuel Tesfaye</p>
    <small>Oct 2, 2020</small>
  </header>
)

// jsx element , Main 
const main = (
  <main class= 'main'>
    <p>Prerequisite to get started with react.js </p>
  <ul>
  <li><a href=" #">HTML</a></li>
  <li><a href=" #">Css</a></li>
  <li><a href=" #">JavaScript</a></li>
  <li><a href=" #">React</a></li>
    
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

// importing media files in jsx 

/*  import asabenehImage from './images/asabeneh.jpg'

const user = (
  <div>
    <img src={asabenehImage} alt='asabeneh image' />
  </div> 
)*/
const rootElement = document.getElementById('root')

ReactDOM.render(app, rootElement)

