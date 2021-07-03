import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import CardMedium from './CardMedium';
import { currentUserLoading } from '../redux-store/reducers';

function FilteredProductsList({ products=[], isLoading, currentUser={} }: any){
    products = Array.from(products)

    const [searchInput, setSearchInput] = useState('');

    const loadingMessage = <div>carregando produtos</div>;

    const content = (
        <>
            <Input
                className="search-input"
                value={searchInput}
                onChange={(e : any) => setSearchInput(e.target.value)}
            />

            <FiltredProductsStyle>
                <>{
                    products
                    .filter((product : any) =>
                        product['title']
                        .toLowerCase()
                        .includes(searchInput.toLowerCase())
                        ||
                        product['description']
                        .toLowerCase()
                        .includes(searchInput.toLowerCase())
                    )
                    .map((product : any) =>
                        (
                            <CardMedium
                                key={product._id}
                                product={product}
                                userId={currentUser._id} 
                                currentUser={currentUser}
                            />
                        )
                    )
                }</>
            </FiltredProductsStyle>
        </>
    );

    return <> {isLoading ? loadingMessage : content} </>;
}

const Input = styled.input`
    width: 100vw;
`;

const FiltredProductsStyle = styled.div`
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

export { FilteredProductsList };
export default connect(mapStateToProps)( FilteredProductsList );