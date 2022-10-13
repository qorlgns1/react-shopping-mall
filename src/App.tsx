import { Route, Switch } from 'react-router-dom';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Switch>
      <Route path='/' exact component={MainPage} />
      <Route path='/login' exact component={LoginPage} />
    </Switch>
  );
}

export default App;
