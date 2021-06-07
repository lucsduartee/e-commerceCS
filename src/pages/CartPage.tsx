import styled from 'styled-components';
import Header from '../components/Header';
import CartProduct from '../components/CartProduct';

function CartPage(){
    return(
        <CartPageContainer>
            <Header />
            <CartProduct />
        </CartPageContainer>
    )
}

const CartPageContainer = styled.div`
    display: flex;
`;

export default CartPage;