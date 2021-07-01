import ProductsByCategory from '../../components/ProductsByCategory'
import Footer from '../../components/Footer';
import Header from '../../components/Header';

function M_Calcas() {
    return(
        <div className="section__products">
            <Header />
            <h1>askmdoadsmaodmasdomadas</h1>
            <ProductsByCategory category1="male" category2="calcas" />
            <Footer />
        </div>
    );
}

export default M_Calcas;