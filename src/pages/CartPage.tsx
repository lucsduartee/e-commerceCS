import styled from 'styled-components';
import Header from '../components/Header';

function CartPage(){
    return(
        <CartPageContainer>
            <Header />
        </CartPageContainer>
    )
}

const CartPageContainer = styled.div`
    display: flex;
`;

export default CartPage;