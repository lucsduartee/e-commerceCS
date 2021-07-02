import ProductsByCategory from '../../components/ProductsByCategory';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

function F_BermudasEShorts() {
    return(
        <div className="section__products">
            <Header />
            <h1> Bermudas e Shorts Femininos </h1>
            <ProductsByCategory category1="female" category2="bermudas-e-shorts" />
            <Footer />
        </div>
    );
}

export default F_BermudasEShorts;