import { Route, Switch } from 'react-router-dom';
import MainPage from './pages/MainPage';

function App() {
  return (
    <Switch>
      <Route path='/' exact component={MainPage} />
    </Switch>
  );
}

export default App;
