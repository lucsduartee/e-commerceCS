import ProductsByCategory from '../../components/ProductsByCategory';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

function F_Esportivo() {
    return(
        <div className="section__products">
            <Header />
            <h1> Esportivos Femininos </h1>
            <ProductsByCategory category1="female" category2="esportivo" />
            <Footer />
        </div>
    );
}

export default F_Esportivo;