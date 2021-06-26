import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';
import UserProductsListItem from './UserProductsListItem';
import { loadUserProducts, addProductToUserRequest, removeProductFromUserRequest } from './redux-store/thunks';

const UserProductsList = ({ userProducts=[], userProductsLoading, startLoadingUserProducts, onAddPressed, onRemovePressed, email, password } : any) => {
    useEffect(() => {
        startLoadingUserProducts(email, password);
    }, [startLoadingUserProducts(email, password)]);

    const loadingMessage = <div>carregando produtos</div>;

    const content = (
        <div>
            {
                userProducts.map((product : any) => 
                    <UserProductsListItem
                        product={product}
                        key={product._id}
                        onAddPressed={onAddPressed}
                        onRemovePressed={onRemovePressed}
                    />
                )
            }
        </div>
    );

    return (
        <>
            <Header />
            {userProductsLoading ? loadingMessage : content}
        </>
    );
}

const mapStateToProps = (state : any) => ({
    userProductsLoading: state.userProductsLoading,
    userProducts: state.userProducts
});

const mapDispatchToProps = (dispatch : any) => ({
    startLoadingUserProducts: ({ email, password } : any) => dispatch(loadUserProducts(email, password)),
    onAddPressed: ({ userId, productId } : any) => dispatch(addProductToUserRequest(userId, productId)),
    onRemovePressed: ({ userId, productId } : any) => dispatch(removeProductFromUserRequest(userId, productId))
})

export { UserProductsList };
export default connect(mapStateToProps, mapDispatchToProps)(UserProductsList);