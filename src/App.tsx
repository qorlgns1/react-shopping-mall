import { Route, Switch } from 'react-router-dom';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import JoinPage from './pages/JoinPage/index';
import ProductDetailPage from './pages/\bProductDetailPage';

function App() {
  return (
    <Switch>
      <Route path='/' exact component={MainPage} />
      <Route path='/login' exact component={LoginPage} />
      <Route path='/join' exact component={JoinPage} />
      <Route path='/product/:product_id' exact component={ProductDetailPage} />
    </Switch>
  );
}

export default App;
