import ProductsByCategory from '../../components/ProductsByCategory';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

function F_CurveEPlusSize() {
    return(
        <div className="section__products">
            <Header />
            <h1> Curve e Plus Size Feminino </h1>
            <ProductsByCategory category1="female" category2="curve-e-plus-size" />
            <Footer />
        </div>
    );
}

export default F_CurveEPlusSize;