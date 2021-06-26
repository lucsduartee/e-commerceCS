import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';
import UserProductsListItem from './UserProductsListItem';
import { loadUserProducts } from './redux-store/thunks';

const UserProductsList = ({ userProducts=[], userProductsLoading, startLoadingUserProducts } : any) => {
    useEffect(() => {
        startLoadingUserProducts();
    }, [startLoadingUserProducts]);

    const loadingMessage = <div>carregando produtos</div>;

    const content = (
        <div>
            {
                userProducts.map((product : any) => 
                    <UserProductsListItem
                        product={product}
                        key={product._id}
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
})

const mapDispatchToProps = (dispatch : any) => ({
    startLoadingUserProducts: () => dispatch(loadUserProducts('60d6812910940c33ac435c5d')),
})

export { UserProductsList };
export default connect(mapStateToProps, mapDispatchToProps)(UserProductsList);