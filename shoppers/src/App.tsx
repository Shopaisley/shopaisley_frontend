import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  Cart,
  Login,
  Shipping,
  Signup,
  Payment,
  Address,
  ProductCatalogue,
  Product,
} from './Routes';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/cart" component={Cart} />
        <Route path="/checkout/shipping" component={Shipping} />
        <Route path="/checkout/address" component={Address} />
        <Route path="/checkout/payment" component={Payment} />
        <Route path="/login" component={Login} />
        <Route path="/sign-up" component={Signup} />
        <Route path="/product-catalogue/:categoryName" component={ProductCatalogue} />
        <Route path="/product/:productId" component={Product} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
