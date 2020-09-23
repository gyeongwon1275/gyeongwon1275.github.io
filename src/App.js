import React from 'react'
import './App.scss'
import Main from './Main/Main'
import Nav from './Nav/Nav'
import Project from './Project/Project'
import Skills from './Skills/Skills'

function App() {
  const [Navvalue, setValue] = React.useState(0)

  function handleChange(event, newValue) {
    setValue(newValue)
  }
  return (
    <div className="app">
      <Nav Navvalue={Navvalue} handleChange={handleChange} />
      <Main />
      <Skills />
      <Project />
    </div>
  )
}

export default App
