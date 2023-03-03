import { Route, Switch } from 'react-router-dom';
import MainPage from './pages/MainPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ShoppingCartPage from './pages/ShoppingCartPage';

function App() {
  return (
    <Switch>
      <Route path='/' exact component={MainPage} />
      <Route path='/login' exact component={SignInPage} />
      <Route path='/join' exact component={SignUpPage} />
      <Route path='/shoppingCart' exact component={ShoppingCartPage} />
      <Route path='/product/:product_id' exact component={ProductDetailPage} />
    </Switch>
  );
}

export default App;
