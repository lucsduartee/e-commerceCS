import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import CardMedium from './CardMedium';
import { currentUserLoading } from '../redux-store/reducers';

function AllProducts({ products=[], isLoading, currentUser={} }: any){
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

            <AllProductsStyle>
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
            </AllProductsStyle>
        </>
    );

    return <> {isLoading ? loadingMessage : content} </>;
}

const Input = styled.input`
    width: 100vw;
`;

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

export { AllProducts };
export default connect(mapStateToProps)(AllProducts);