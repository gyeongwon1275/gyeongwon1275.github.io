import React from 'react'
import './Nav.scss'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { makeStyles } from '@material-ui/core'

function Nav() {
  const useStyles = makeStyles((theme) => ({
    appbar: {
      backgroundColor: theme.palette.background.paper,
    },
  }))

  const colors = useStyles()

  const [value, setValue] = React.useState(0)

  function handleChange(event, newValue) {
    setValue(newValue)
  }

  return (
    <AppBar className={colors.appbar}>
      <Tabs value={value} onChange={handleChange}>
        <Tab label="MAIN" />
        <Tab label="SKILLS" />
        <Tab label="RESUME" />
        <Tab label="WORKS" />
        <Tab label="CONTACT" />
      </Tabs>
    </AppBar>
  )
}

export default Nav
