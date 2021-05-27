import LoginPage from './LoginPage';
import MainPage from './MainPage';
import FemalePage from './FemalePage';
import AllProductsPage from './AllProductsPage';
import MalePage from './MalePage';
import NotFoundPage from './NotFoundPage';
import Carousel from './components/Carousel';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={LoginPage} exact></Route>
        <Route path="/products" component={AllProductsPage}></Route>
        <Route path="/pages/female" component={FemalePage}></Route>
        <Route path="/pages/male" component={MalePage}></Route>
        <Route path="/carousel" component={Carousel}></Route>
        <Route path="/home" component={MainPage}></Route>
        <Route path="" component={NotFoundPage}></Route>
      </Switch>
    </Router>
  );
}
export default App;
