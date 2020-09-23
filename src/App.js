import React, { useEffect, useRef, useState } from 'react'
import './App.scss'
import Main from './Main/Main'
import Nav from './Nav/Nav'
import Project from './Project/Project'
import Skills from './Skills/Skills'

function App() {
  /* 
  TODO 

  nav 각 버튼을 누르면 해당 위치로 스크롤 -> OK 

  스크롤 할때마다 해당 위치를 받아와서 해당 위치가 되면 appbar state 변경 
  */

  /* 
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("myP").className = "test";
  } else {
    document.getElementById("myP").className = "";
  }
  */
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
