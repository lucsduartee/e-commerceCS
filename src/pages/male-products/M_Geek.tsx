import ProductsByCategory from '../../components/ProductsByCategory';
import styled from 'styled-components';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

function M_Geek() {
    return(
        <div className="section__products">
            <Header />
            <h1>askmdoadsmaodmasdomadas</h1>
            <ProductsByCategory category1="male" category2="geek" />
            <Footer />
        </div>
    );
}

export default M_Geek;