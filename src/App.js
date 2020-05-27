import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import AppProvider from './hooks'
import Routes from './routes'
import GlobalStyle from './styles/globalStyles'

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes />
      </AppProvider>
      <GlobalStyle />
      <ToastContainer autoClose={3000} />
    </BrowserRouter>
  )
}

export default App
