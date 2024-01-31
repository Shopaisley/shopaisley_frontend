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
  Product,

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
        <Route path="/product-catalogue/:categoryName" element={<ProductCatalogue />} />
        <Route path="/product/:productId" element={<Product />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
