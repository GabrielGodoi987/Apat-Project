import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react'
import { ThemeCustomized } from './theme/material.theme.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
        <ThemeProvider theme={ThemeCustomized}>
            <App />
        </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
