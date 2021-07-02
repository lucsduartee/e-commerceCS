import ProductsByCategory from '../../components/ProductsByCategory';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

function F_Saias() {
    return(
        <div className="section__products">
            <Header />
            <h1> Saias </h1>
            <ProductsByCategory category1="female" category2="saias" />
            <Footer />
        </div>
    );
}

export default F_Saias;