import React from 'react'
import './Nav.scss'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { makeStyles } from '@material-ui/core'

function Nav({ Navvalue, handleChange }) {
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
      <Tabs value={Navvalue} onChange={handleChange}>
        <Tab label="MAIN" onClick={() => handleScroll('main-text-container')} />
        <Tab label="SKILLS" onClick={() => handleScroll('skills-container')} />
        <Tab label="WORKS" onClick={() => handleScroll('project-container')} />
        <Tab label="RESUME" />

        <Tab label="CONTACT" />
      </Tabs>
    </AppBar>
  )
}

export default Nav
