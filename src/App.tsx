import LoginPage from './LoginPage';
import MainPage from './MainPage';
import FemalePage from './FemalePage';
import NotFoundPage from './NotFoundPage';
import MalePage from './MalePage'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={LoginPage} exact></Route>
        <Route path="/pages/female" component={FemalePage}></Route>
        <Route path="/pages/male" component={MalePage}></Route>
        <Route path="/home" component={MainPage}></Route>
        <Route path="" component={NotFoundPage}></Route>
      </Switch>
    </Router>
  );
}
export default App;
