// import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {Dashboard, Products} from './Routes'





function App() {
  return (
    <BrowserRouter>
    <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/products" element={<Products />} />
          </Routes>
    </BrowserRouter>
  )
}

export default App
