import LoginPage from './LoginPage';
import MainPage from './MainPage';
import NotFoundPage from './NotFoundPage';
import MalePage from './MalePage'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={LoginPage} exact></Route>
        <Route path="/home" component={MainPage} exact></Route>
        <Route path="/MalePage" component={MalePage}></Route>
        <Route path="" component={NotFoundPage}></Route>
      </Switch>
      </Router>
  );
}
export default App;
