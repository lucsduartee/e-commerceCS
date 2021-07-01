import ProductsByCategory from '../../components/ProductsByCategory'
import Footer from '../../components/Footer';
import Header from '../../components/Header';

function M_Polos() {
    return(
        <div className="section__products">
            <Header />
            <ProductsByCategory category1="male" category2="polos"/>
            <Footer />
        </div>
    );
}

export default M_Polos;