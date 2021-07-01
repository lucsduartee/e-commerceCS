import ProductsByCategory from '../../components/ProductsByCategory';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

function F_BlusasECamisetas() {
    return(
        <div className="section__products">
            <Header />
            <ProductsByCategory category1="female" category2="blusas-e-camisetas"/>
            <Footer />
        </div>
    );
}

export default F_BlusasECamisetas;