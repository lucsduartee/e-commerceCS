import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import FemalePage from './pages/FemalePage';
import AllProductsPage from './pages/AllProductsPage';
import MalePage from './pages/MalePage';
import AccPage from './pages/AccPage';
import CartPage from './pages/CartPage';
import NotFoundPage from './pages/NotFoundPage';
import ProductsList from './ProductsList';
import UserProductsList from './UserProductsList';
import UsersList from './users/UsersList';
import NewUserForm from './users/NewUserForm';
import LoadUserProductsForm from './LoadUserProductsForm';
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
        <Route path="/home" component={HomePage} />
        <Route path="/products-list" component={ProductsList} />
        <Route path="/user-products-list" component={UserProductsList} />
        <Route path="/users-list" component={UsersList} />
        <Route path="/new-account" component={NewUserForm} />
        <Route path="/load-user-products" component={LoadUserProductsForm} />
        <Route path="" component={NotFoundPage} />
      </Switch>
    </Router>
  );
}
export default App;
