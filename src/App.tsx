import LoginPage from './LoginPage';
import MainPage from './MainPage';
import FemalePage from './FemalePage';
import AllProductsPage from './AllProductsPage';
import MalePage from './MalePage';
import AccPage from './AccPage';
import CartPage from './CartPage';
import NotFoundPage from './NotFoundPage';
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
