import styled from 'styled-components';

function CartProduct() {
    return(
        <CartProduct>
            <h1>Title</h1>
            <h2>Description</h2>
            <h3>Preço</h3>
        </CartProduct>
    );
}
const CartProduct = styled.div`
    display: flex;
    height: 10vh;
    background-color: #EEE;
    border: 1px solid #111;
`;

export default CartProduct;