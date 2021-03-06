import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import CardMedium from './CardMedium';
import { currentUserLoading } from '../redux-store/reducers';

function Ofertas({ products=[], isLoading, currentUser={} }: any){
    products = Array.from(products)

    const loadingMessage = <div>carregando produtos</div>;
    const [searchInput, setSearchInput] = useState('');
    const [sortAttribute, setSortAttribute] = useState('title');
    const [sortOption, setSortOption] = useState(1);

    const content = (
        <>
            <Input
                className="search-input"
                value={searchInput}
                onChange={(e : any) => setSearchInput(e.target.value)}
            />
            <label>Ordenar por 
                <select value={sortAttribute} onChange={(e)=>setSortAttribute(e.target.value)}>
                    <option value="title">Título</option>
                    <option value="value">Valor</option>
                </select>
                <select value={sortOption} onChange={(e : any)=>setSortOption(e.target.value)}>
                    <option value={1}>/\</option>
                    <option value={-1}>\/</option>
                </select>
            </label>

            <OfertasStyle>
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
                    .filter((product : any) =>
                        product['price'] <= 65
                    )
                    .sort((a : any, b : any) =>
                        (a.sortAttribute < b.sortAttribute)
                        ?
                            -1 * sortOption
                        :
                            1 * sortOption
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
            </OfertasStyle>
        </>
    );

    return <> {isLoading ? loadingMessage : content} </>;
}

const Input = styled.input`
    width: 100vw;
`;

const OfertasStyle = styled.div`
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

export { Ofertas };
export default connect(mapStateToProps)(Ofertas);