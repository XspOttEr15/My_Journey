import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Leva } from 'leva'
import { BrowserRouter,  Route, Routes } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<App />}/>
      </Routes>
    </BrowserRouter>
    <Leva hidden/>
  </React.StrictMode>
)
