import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadProducts, loadUserProducts } from '../redux-store/thunks';
import styled from 'styled-components';
import CardMedium from './CardMedium';
import { addProductToUserRequest } from '../redux-store/thunks';
import { userProducts, userProductsLoading } from '../redux-store/reducers';

function AllProducts({ products=[], isLoading, startLoadingProducts, onAddToCartPressed, userProducts={}, userProductsLoading, startLoadingUserProducts }: any){
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
                            userId={userProducts._id} 
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
    userProducts: state.userProducts,
    userProductsLoading: userProductsLoading
});

const mapDispatchToProps = (dispatch : any) => ({
    startLoadingUserProducts: (username : string) => dispatch(loadUserProducts(username))
  })

export { AllProducts };
export default connect(mapStateToProps, mapDispatchToProps)(AllProducts);