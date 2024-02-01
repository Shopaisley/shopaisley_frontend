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
  LandingPage
} from './Routes'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from 'react-redux';
import { store } from './store/store';

const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout/shipping" element={<Shipping />} />
            <Route path="/checkout/address" element={<Address />} />
            <Route path="/checkout/payment" element={<Payment />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<Signup />} />
            <Route path="/product-catalogue/:categoryName" element={<ProductCatalogue />} />
            <Route path="/product/:productId" element={<Product />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </QueryClientProvider>
  )
}

export default App
