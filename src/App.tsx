import LoginPage from './LoginPage';
import Carousel from './Carousel';
import NotFoundPage from './NotFoundPage';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={LoginPage} exact></Route>
        <Route path="/carousel" component={Carousel}></Route>
        <Route path="" component={NotFoundPage}></Route>
      </Switch>
      </Router>
  );
}

export default App;
