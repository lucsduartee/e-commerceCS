import ProductsByCategory from '../../components/ProductsByCategory';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

function F_ModaPraia() {
    return(
        <div className="section__products">
            <Header />
            <ProductsByCategory category1="female" category2="moda-praia" />
            <Footer />
        </div>
    );
}

export default F_ModaPraia;