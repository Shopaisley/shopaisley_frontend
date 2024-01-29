// import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {
  Cart,
  Login,
  Shipping,
  Signup,
  Payment,
  Address,
  ProductCatalogue,

} from './Routes'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout/shipping" element={<Shipping />} />
        <Route path="/checkout/address" element={<Address />} />
        <Route path="/checkout/payment" element={<Payment />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/product-catalogue" element={<ProductCatalogue />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
