import { Route, Switch } from 'react-router-dom';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import JoinPage from './pages/JoinPage/index';

function App() {
  return (
    <Switch>
      <Route path='/' exact component={MainPage} />
      <Route path='/login' exact component={LoginPage} />
      <Route path='/join' exact component={JoinPage} />
    </Switch>
  );
}

export default App;
