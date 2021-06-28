import React from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';
import UserProductsListItem from './UserProductsListItem';
import { addProductToUserRequest, removeProductFromUserRequest } from './redux-store/thunks';

const UserProductsList = ({ userProducts=[], userProductsLoading, onAddPressed, onRemovePressed } : any) => {
    userProducts = Array.from(userProducts);

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
    userProducts: state.userProducts
});


const mapDispatchToProps = (dispatch : any) => ({
    onAddPressed: ({ userId, productId } : any) => dispatch(addProductToUserRequest(userId, productId)),
    onRemovePressed: ({ userId, productId } : any) => dispatch(removeProductFromUserRequest(userId, productId))
})

export { UserProductsList };
export default connect(mapStateToProps)(UserProductsList);