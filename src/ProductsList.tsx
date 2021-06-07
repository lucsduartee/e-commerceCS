import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ProductsListItem from './ProductsListItem';
import NewProductForm from './NewProductForm';
import { displayAlert, loadProducts, removeProductRequest } from './redux-store/thunks';

const ProductsList = ({ products=[], onRemovePressed, isLoading, startLoadingProducts } : any) => {
    useEffect(() => {
        startLoadingProducts();
    }, []);

    const loadingMessage = <div>carregando produtos</div>;
    const content = (
        <div>
            <NewProductForm />
            {
                products.map((product : any) => 
                    <ProductsListItem
                        product={product}
                        onRemovePressed={onRemovePressed}
                    />
                )
            }
        </div>
    );
    return isLoading ? loadingMessage : content;
}

const mapStateToProps = (state : any) => ({
    isLoading: state.isLoading,
    products: state.products
})

const mapDispatchToProps = (dispatch : any) => ({
    startLoadingProducts: () => dispatch(loadProducts()),
    onRemovePressed: (id : string) => dispatch(removeProductRequest(id)),
    onDisplayAlertFired: (text : string) => dispatch(displayAlert(text))
})

export { ProductsList };
export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);