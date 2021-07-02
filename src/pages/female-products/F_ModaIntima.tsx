import ProductsByCategory from '../../components/ProductsByCategory';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

function F_ModaIntima() {
    return(
        <div className="section__products">
            <Header />
            <h1> Moda Íntima Feminina </h1>
            <ProductsByCategory category1="female" category2="moda-intima" />
            <Footer />
        </div>
    );
}

export default F_ModaIntima;