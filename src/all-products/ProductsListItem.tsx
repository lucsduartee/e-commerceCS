import React from 'react';
import styled from 'styled-components';

const ProductsListItem = ({ product, onRemovePressed, onUpdatePressed } : any) => {
    return(
        <ProductsListItemStyle>
            <div>    
                <h2>{product.title}</h2>
                <h3>{product.description}</h3>
                <h4>{product.price}</h4>
            </div>
            <div>
                <h4>{product.image1}</h4>
                <h4>{product.image2}</h4>
            </div>
            <div>
            <h5>{product.category1}</h5>
            <h5>{product.category2}</h5>
            </div>

            <button
                onClick={() => onRemovePressed(product._id)}
            >
                remover produto
            </button>
        </ProductsListItemStyle>
    );
}

export default ProductsListItem;

const ProductsListItemStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 90vw;
    justify-content: space-between;
    align-items: center;
    margin: 10px auto;
    padding: 2px;
    border: 1px solid #000;
    border-radius: 3px;

    @media screen and (max-width: 800px) {
        display: flex;
        flex-direction: column;
        width: 50vw;
        min-width: 270px;
        height: 180px;
    }

    button {
        background: #000;
        border: none;
        border-radius: 2px;
        box-shadow: 3px 3px 5px 1px rgba(0, 0, 0, 0.5);
        color: #FFF;
        font-weight: bold;
        padding: 5px;
    }
`;