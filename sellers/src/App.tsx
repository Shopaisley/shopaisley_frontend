// import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Dashboard, Products, Orders, Notifications, Login, Signup, Order } from './Routes';


function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path="/order" element={<Order/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App



