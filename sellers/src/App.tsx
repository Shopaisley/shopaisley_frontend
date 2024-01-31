/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import{ Notification}from './routes'

function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/not" element={<Notification />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
