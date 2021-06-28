import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadProducts, loadCurrentUser } from '../redux-store/thunks';
import styled from 'styled-components';
import CardMedium from './CardMedium';
import { addProductToUserRequest } from '../redux-store/thunks';
import { currentUser, currentUserLoading } from '../redux-store/reducers';

function AllProducts({ products=[], isLoading, startLoadingProducts, onAddToCartPressed, currentUser={}, currentUserLoading, startLoadingCurrentUser }: any){
    products = Array.from(products)

    const loadingMessage = <div>carregando produtos</div>;


    const content = (
        <AllProductsStyle>
            <>{
                products.map((product : any) =>
                    (
                        <CardMedium
                            key={product._id}
                            product={product}
                            userId={currentUser._id} 
                            onAddToCartPressed={onAddToCartPressed}
                            currentUser={currentUser}
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
    currentUser: state.currentUser,
    currentUserLoading: currentUserLoading
});

const mapDispatchToProps = (dispatch : any) => ({
    startLoadingCurrentUser: (username : string) => dispatch(loadCurrentUser(username))
  })

export { AllProducts };
export default connect(mapStateToProps, mapDispatchToProps)(AllProducts);