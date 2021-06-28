import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadProducts } from '../redux-store/thunks';
import styled from 'styled-components';
import CardMedium from './CardMedium';
import { addProductToUserRequest } from '../redux-store/thunks';

function AllProducts({ products=[], isLoading, startLoadingProducts, onAddToCartPressed, userProducts }: any){
    products = Array.from(products)

    // useEffect(() => {
    //     startLoadingProducts();
    // }, [startLoadingProducts]);

    const loadingMessage = <div>carregando produtos</div>;

    const content = (
        <AllProductsStyle>
            <>{
                products.map((product : any) =>
                    (
                        <CardMedium
                            key={product._id}
                            product={product}
                            onAddToCartPressed={onAddToCartPressed}
                            userProducts={userProducts}
                        />
                    )
                )
            }</>
        </AllProductsStyle>
    );

    return <> {isLoading ? loadingMessage : content} </>;
}

const AllProductsStyle = styled.div`
    display: grid;
    width: 80vw;
    margin: 5vh 5vw;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: .5rem;
`;

const mapStateToProps = (state : any) => ({
    isLoading: state.isLoading,
    products: state.products,
    userProducts: state.userProducts
});

const mapDispatchToProps = (dispatch : any) => ({
    startLoadingProducts: () => dispatch(loadProducts()),
    onAddToCartPressed: (userId : string, productId : string) => dispatch(addProductToUserRequest(userId, productId))
});

export { AllProducts };
export default connect(mapStateToProps, mapDispatchToProps)(AllProducts);