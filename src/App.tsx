import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import FemalePage from './pages/FemalePage';
import OfertasPage from './pages/OfertasPage';
import MalePage from './pages/MalePage';
import AccPage from './pages/AccPage';
import M_BermudasEShorts from './pages/male-products/M_BermudasEShorts';
import M_BlusasESueters from './pages/male-products/M_BlusasESueters';
import M_Calcas from './pages/male-products/M_Calcas';
import M_Calcados from './pages/male-products/M_Calcados';
import M_CamisasECamisetas from './pages/male-products/M_CamisasECamisetas';
import M_CasacosEJaquetas from './pages/male-products/M_CasacosEJaquetas';
import M_Cuecas from './pages/male-products/M_Cuecas';
import M_ModaPraia from './pages/male-products/M_ModaPraia';
import M_Polos from './pages/male-products/M_Polos';
import M_Geek from './pages/male-products/M_Geek';
import M_PlusSize from './pages/male-products/M_PlusSize';
import F_BermudasEShorts from './pages/female-products/F_BermudasEShorts';
import CartPage from './pages/CartPage';
import NotFoundPage from './pages/NotFoundPage';
import ProductsList from './all-products/ProductsList';
import CurrentUserDetails from './current-user/CurrentUserDetails';
import UsersList from './users/UsersList';
import NewUserForm from './users/NewUserForm';
import LoadCurrentUserForm from './current-user/LoadCurrentUserForm';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import F_BlusasECamisetas from './pages/female-products/F_BlusasECamisetas';
import F_Calcados from './pages/female-products/F_Calcados';
import F_Camisas from './pages/female-products/F_Camisas';
import F_Conjuntos from './pages/female-products/F_Conjuntos';
import F_CurveEPlusSize from './pages/female-products/F_CurveEPlusSize';
import F_Esportivo from './pages/female-products/F_Esportivo';
import F_ModaIntima from './pages/female-products/F_ModaIntima';
import F_ModaPraia from './pages/female-products/F_ModaPraia';
import F_Saias from './pages/female-products/F_Saias';
import F_Sueters from './pages/female-products/F_Sueters';
import FilteredProductsList from './components/FilteredProductsList';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={LoginPage} exact />
        <Route path="/ofertas" component={OfertasPage} />
        <Route path="/pages/female/index" component={FemalePage} />
        <Route path="/pages/male/index" component={MalePage} />
        <Route path="/pages/acc" component={AccPage} />
        <Route path="/pages/male/bermudas-e-shorts" component={M_BermudasEShorts} />
        <Route path="/pages/male/blusas-e-sueters" component={M_BlusasESueters} />
        <Route path="/pages/male/calcas" component={M_Calcas} />
        <Route path="/pages/male/calcados" component={M_Calcados} />
        <Route path="/pages/male/camisas-e-camisetas" component={M_CamisasECamisetas} />
        <Route path="/pages/male/casacos-e-jaquetas" component={M_CasacosEJaquetas} />
        <Route path="/pages/male/cuecas" component={M_Cuecas} />
        <Route path="/pages/male/moda-praia" component={M_ModaPraia} />
        <Route path="/pages/male/polos" component={M_Polos} />
        <Route path="/pages/male/geek" component={M_Geek} />
        <Route path="/pages/male/pluz-size" component={M_PlusSize} />
        <Route path="/pages/female/bermudas-e-shorts" component={F_BermudasEShorts} />
        <Route path="/pages/female/blusas-e-camisetas" component={F_BlusasECamisetas} />
        <Route path="/pages/female/calcados" component={F_Calcados} />
        <Route path="/pages/female/camisas" component={F_Camisas} />
        <Route path="/pages/female/conjuntos" component={F_Conjuntos} />
        <Route path="/pages/female/curve-plus-size" component={F_CurveEPlusSize} />
        <Route path="/pages/female/esportivo" component={F_Esportivo} />
        <Route path="/pages/female/moda-intima" component={F_ModaIntima} />
        <Route path="/pages/female/moda-praia" component={F_ModaPraia} />
        <Route path="/pages/female/saias" component={F_Saias} />
        <Route path="/pages/female/sueters" component={F_Sueters} />
        <Route path="/cart" component={CartPage} />
        <Route path="/home" component={HomePage} />
        <Route path="/login" component={LoginPage} />        
        <Route path="/products-list" component={ProductsList} />
        <Route path="/filtered-products-list" component={FilteredProductsList} />
        <Route path="/user-products-list" component={CurrentUserDetails} />
        <Route path="/users-list" component={UsersList} />
        <Route path="/new-account" component={NewUserForm} />
        <Route path="/load-user-products" component={LoadCurrentUserForm} />
        <Route path="" component={NotFoundPage} />
      </Switch>
    </Router>
  );
}
export default App;
