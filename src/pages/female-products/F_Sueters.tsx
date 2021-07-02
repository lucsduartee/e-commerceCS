import ProductsByCategory from '../../components/ProductsByCategory';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

function F_Sueters() {
    return(
        <div className="section__products">
            <Header />
            <h1> Suéteres Femininos </h1>
            <ProductsByCategory category1="female" category2="sueters" />
            <Footer />
        </div>
    );
}

export default F_Sueters;