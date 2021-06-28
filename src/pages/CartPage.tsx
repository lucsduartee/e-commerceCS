import styled from 'styled-components';
import Header from '../components/Header';
import React from 'react';
import Footer from '../components/Footer';
import CardBig from '../components/CardBig';

import CartDescription from '../components/CartDescription';

function CartPage(){
    return(
        <CartPageContainer>
            <Header />
            <CartDescription />
            <Footer />
        </CartPageContainer>
    )
}

const CartPageContainer = styled.div`
   

`;

export default CartPage;