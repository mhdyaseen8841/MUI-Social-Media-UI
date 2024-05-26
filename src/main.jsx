import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider } from '@emotion/react'
import {myTheme} from './theme.js'
import { ThemeContextProvider } from './context/ThemeContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeContextProvider>

    <ThemeProvider theme={myTheme}>
    <App />
    </ThemeProvider>
    </ThemeContextProvider>
  </React.StrictMode>,
)
