import LoginPage from './LoginPage';
import MainPage from './MainPage';
import StreetStyle from './StreetStyle';
import NotFoundPage from './NotFoundPage';
import MalePage from './MalePage'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={LoginPage} exact></Route>
<<<<<<< HEAD
        <Route path="/streetstyle" component={StreetStyle}></Route>
=======
        <Route path="/MalePage" component={MalePage}></Route>
        <Route path="/carousel" component={Carousel}></Route>
>>>>>>> cf241d4d37d478226fd10e1de9f36a369e1c3a0f
        <Route path="/home" component={MainPage}></Route>
        <Route path="" component={NotFoundPage}></Route>
      </Switch>
    </Router>
  );
}
export default App;
