import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import blue from '@material-ui/core/colors/blue'
const theme = createMuiTheme({
  palette: {
    primary: { main: '#3f51b5' },
    secondary: { main: blue[200] },
    type: 'dark',
  },
})

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
)
