import ProductsByCategory from '../../components/ProductsByCategory';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

function F_Conjuntos() {
    return(
        <div className="section__products">
            <Header />
            <h1> Conjuntos Femininos </h1>
            <ProductsByCategory category1="female" category2="conjuntos" />
            <Footer />
        </div>
    );
}

export default F_Conjuntos;