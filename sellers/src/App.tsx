// import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Dashboard, Products, Orders, Notifications } from './Routes';



function App() {
  return (
    <BrowserRouter>
    <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/products" element={<Products />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/notifications" element={<Notifications />} />
          </Routes>
    </BrowserRouter>
  )
}

export default App
