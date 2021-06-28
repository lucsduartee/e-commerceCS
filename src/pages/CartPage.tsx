import styled from 'styled-components';
import Header from '../components/Header';
import React from 'react';
import Footer from '../components/Footer';
import CardBig from '../components/CardBig';
import CartItem from '../components/CartItem';
import { connect } from 'react-redux';

function CartPage({ userProducts } : any){
    return(
        <CartPageContainer>
            <Header />
            {
                userProducts.map((product : any) =>
                    <CartItem product={product} />
                )
            }
            <Footer />
        </CartPageContainer>
    )
}

const CartPageContainer = styled.div``;

const mapStateToProps = (state : any) => ({
    userProducts: state.userProducts
});

export { CartPage };
export default connect(mapStateToProps)(CartPage);