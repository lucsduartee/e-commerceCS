import LoginPage from './LoginPage';
import MainPage from './MainPage';
import NotFoundPage from './NotFoundPage';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={LoginPage} exact></Route>
        <Route path="/main" component={MainPage}></Route>
        <Route path="" component={NotFoundPage}></Route>
      </Switch>
      </Router>
  );
}
export default App;
