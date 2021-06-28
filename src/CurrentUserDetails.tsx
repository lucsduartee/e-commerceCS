import React from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';
import CurrentUserDetailsItem from './CurrentUserDetailsItem';
import { addProductToUserRequest, removeProductFromUserRequest } from './redux-store/thunks';

const CurrentUserDetails = ({ currentUser=[], currentUserLoading, onAddPressed, onRemovePressed } : any) => {
    currentUser = Array.from(currentUser);

    const loadingMessage = <div>carregando produtos</div>;

    const content = (
        <div>
            {
                currentUser.map((product : any) => 
                    <CurrentUserDetailsItem
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
            {currentUserLoading ? loadingMessage : content}
        </>
    );
}

const mapStateToProps = (state : any) => ({
    currentUser: state.currentUser
});


const mapDispatchToProps = (dispatch : any) => ({
    onAddPressed: ({ userId, productId } : any) => dispatch(addProductToUserRequest(userId, productId)),
    onRemovePressed: ({ userId, productId } : any) => dispatch(removeProductFromUserRequest(userId, productId))
})

export { CurrentUserDetails };
export default connect(mapStateToProps)(CurrentUserDetails);