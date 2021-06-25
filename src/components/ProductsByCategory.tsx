import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadProducts } from '../redux-store/thunks';
import styled from 'styled-components';
import CardMedium from './CardMedium';

function ProductsByCategory({ products=[], isLoading, startLoadingProducts, category1, category2 }: any){
    useEffect(() => {
        startLoadingProducts();
    }, [startLoadingProducts]);

    const loadingMessage = <div>carregando produtos</div>;

    const content = (
        <AllProductsStyle>
            {
                products.map((product : any) =>
                    product.category2 === null
                    ?
                    (product.category1 === category1
                        ?
                            <CardMedium
                                key={product._id}
                                product={product}
                            />
                        : null
                    )
                    :
                    (product.category1 === category1 && product.category2 === category2
                        ?
                            <CardMedium
                                key={product._id}
                                product={product}
                            />
                        : null
                    )
                )
            }
        </AllProductsStyle>
    );

    return isLoading ? loadingMessage : content;
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
    products: state.products
});

const mapDispatchToProps = (dispatch : any) => ({
    startLoadingProducts: () => dispatch(loadProducts())
});

export { ProductsByCategory };
export default connect(mapStateToProps, mapDispatchToProps)(ProductsByCategory);