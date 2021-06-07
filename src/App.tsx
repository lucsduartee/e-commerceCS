import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import FemalePage from './pages/FemalePage';
import AllProductsPage from './pages/AllProductsPage';
import MalePage from './pages/MalePage';
import AccPage from './pages/AccPage';
import CartPage from './pages/CartPage';
import NotFoundPage from './pages/NotFoundPage';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={LoginPage} exact />
        <Route path="/products" component={AllProductsPage} />
        <Route path="/pages/female" component={FemalePage} />
        <Route path="/pages/male" component={MalePage} />
        <Route path="/pages/acc" component={AccPage} />
        <Route path="/cart" component={CartPage} />
        <Route path="/home" component={MainPage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
    </Router>
  );
}
export default App;
