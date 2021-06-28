import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ProductsListItem from './ProductsListItem';
import Header from '../components/Header';
import NewProductForm from './NewProductForm';
import { loadProducts, removeProductRequest } from '../redux-store/thunks';

const ProductsList = ({ products=[], onRemovePressed, isLoading, startLoadingProducts } : any) => {
    products = Array.from(products)

    useEffect(() => {
        startLoadingProducts();
    }, [startLoadingProducts]);

    const loadingMessage = <div>carregando produtos</div>;
    const content = (
        <div>
            <NewProductForm />
            {
                products.map((product : any) => 
                    <ProductsListItem
                        product={product}
                        key={product._id}
                        onRemovePressed={onRemovePressed}
                    />
                )
            }
        </div>
    );
    return (
        <>
            <Header />
            {isLoading ? loadingMessage : content}
        </>
    );
}

const mapStateToProps = (state : any) => ({
    isLoading: state.isLoading,
    products: state.products
})

const mapDispatchToProps = (dispatch : any) => ({
    startLoadingProducts: () => dispatch(loadProducts()),
    onRemovePressed: (id : string) => dispatch(removeProductRequest(id))
})

export { ProductsList };
export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);