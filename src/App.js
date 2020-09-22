import React from 'react'
import './App.scss'
import Main from './Main/Main'
import Nav from './Nav/Nav'
import Project from './Project/Project'
import Skills from './Skills/Skills'

function App() {
  return (
    <div className="app">
      <Nav />
      <Main />
      <Skills />
      <Project />
    </div>
  )
}

export default App
