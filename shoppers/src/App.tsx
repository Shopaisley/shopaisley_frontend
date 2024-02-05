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
  LandingPage,
  Success
} from './Routes'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from 'react-redux';
import { store } from './store/store';
import PageLoader from './components/PageLoader';

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
            <Route path="/checkout/shipping/:productId" element={
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
            <Route path="/checkout/payment/:productId" element={
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
            <Route path="/success" element={
              <Suspense fallback={<Success />}>
                {React.createElement(
                  lazy(() => Promise.resolve({ default: Product }))
                )}
              </Suspense>
            }
            />
          </Routes>
          {/* <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            // transition= "Bounce",
/> */}
        </BrowserRouter>
      </Provider>
    </QueryClientProvider>
  )
}

export default App
