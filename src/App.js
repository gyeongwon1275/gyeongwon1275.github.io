import React from 'react'
import './App.scss'
import Educations from './Educations/Educations'
import Main from './Main/Main'
import Nav from './Nav/Nav'
import Project from './Project/Project'
import Skills from './Skills/Skills'

function App() {
  /* 
 #ff9500;
 */
  return (
    <div className="app">
      <Nav />
      <Main />
      <Skills />
      <Project />
      <Educations />
    </div>
  )
}

export default App
