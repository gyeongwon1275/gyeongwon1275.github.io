import React, { useEffect, useRef, useState } from 'react'
import './Nav.scss'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { makeStyles } from '@material-ui/core'

function Nav() {
  const [value, setValue] = useState(0)

  function handleChange(event, newValue) {
    setValue(newValue)
  }

  let appBar = useRef(null)
  useEffect(() => {
    window.addEventListener('scroll', getScrollPosition, true)
  }, [])

  function getScrollPosition() {
    var locations = [
      document.querySelector(`.main-text-container`).offsetTop,
      document.querySelector(`.skills-container`).offsetTop,
      document.querySelector(`.project-container`).offsetTop,
    ]
    if (window.scrollY < locations[1] && window.scrollY >= locations[0]) {
      setValue(0)
    }
    if (window.scrollY < locations[2] && window.scrollY >= locations[1] * 0.8) {
      setValue(1)
    }
    if (window.scrollY >= locations[2] * 0.8) {
      setValue(2)
    }
    //
  }

  // TODO
  /* 스크롤 할때마다 
  scroll 할때마다 위치를 파악하고 파악한 위치를 바탕으로 tab 의 위치를 변경 
  */

  const useStyles = makeStyles((theme) => ({
    appbar: {
      backgroundColor: theme.palette.background.paper,
    },
  }))

  function handleScroll(seletor) {
    var location = document.querySelector(`.${seletor}`).offsetTop

    window.scrollTo({ top: location, left: 0, behavior: 'smooth' })
  }
  const colors = useStyles()

  return (
    <AppBar className={colors.appbar}>
      <Tabs value={value} ref={appBar} onChange={handleChange}>
        <Tab
          label="MAIN"
          onClick={() => {
            handleScroll('main-text-container')
          }}
        />
        <Tab
          label="SKILLS"
          onClick={() => {
            handleScroll('skills-container')
          }}
        />
        <Tab label="WORKS" onClick={() => handleScroll('project-container')} />
        <Tab label="RESUME" />

        <Tab label="CONTACT" />
      </Tabs>
    </AppBar>
  )
}

export default Nav
