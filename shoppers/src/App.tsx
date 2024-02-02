// import './App.css'
import React, { Suspense, lazy } from 'react';
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
import { Suspense, lazy } from 'react';
import PageLoader from './components/PageLoader';
import React from 'react';

// const Home = lazy(() => import('./pages/landing-page'));

const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/cart" element={
              <Suspense fallback={<PageLoader />}>
                {React.createElement(
                  lazy(() => Promise.resolve({ default: Cart }))
                )}
              </Suspense>
            }
            />
            <Route path="/checkout/shipping" element={
              <Suspense fallback={<PageLoader />}>
                {React.createElement(
                  lazy(() => Promise.resolve({ default: Shipping }))
                )}
              </Suspense>
            }
            />
            <Route path="/checkout/address/:productId" element={
              <Suspense fallback={<PageLoader />}>
                {React.createElement(
                  lazy(() => Promise.resolve({ default: Address }))
                )}
              </Suspense>
            }
            />
            <Route path="/checkout/payment" element={
              <Suspense fallback={<PageLoader />}>
                {React.createElement(
                  lazy(() => Promise.resolve({ default: Payment }))
                )}
              </Suspense>
            }
            />
            <Route path="/" element={
              <Suspense fallback={<PageLoader />}>
                {React.createElement(
                  lazy(() => Promise.resolve({ default: LandingPage }))
                )}
              </Suspense>
            }
            />
            <Route path="/login" element={
              <Suspense fallback={<PageLoader />}>
                {React.createElement(
                  lazy(() => Promise.resolve({ default: Login }))
                )}
              </Suspense>
            }
            />
            <Route path="/sign-up" element={
              <Suspense fallback={<PageLoader />}>
                {React.createElement(
                  lazy(() => Promise.resolve({ default: Signup }))
                )}
              </Suspense>
            }
            />
            <Route path="/product-catalogue/:categoryName" element={
              <Suspense fallback={<PageLoader />}>
                {React.createElement(
                  lazy(() => Promise.resolve({ default: ProductCatalogue }))
                )}
              </Suspense>
            }
            />
            <Route path="/product/:productId" element={
              <Suspense fallback={<PageLoader />}>
                {React.createElement(
                  lazy(() => Promise.resolve({ default: Product }))
                )}
              </Suspense>
            }
            />
          </Routes>
        </BrowserRouter>
      </Provider>
    </QueryClientProvider>
  )
}

export default App
