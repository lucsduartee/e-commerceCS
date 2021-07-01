import ProductsByCategory from '../../components/ProductsByCategory'
import Footer from '../../components/Footer';
import Header from '../../components/Header';

function M_Calcados() {
    return(
        <div className="section__products">
            <Header />
            <h1>askmdoadsmaodmasdomadas</h1>
            <ProductsByCategory category1="male" category2="calcados" />
            <Footer />
        </div>
    );
}

export default M_Calcados;