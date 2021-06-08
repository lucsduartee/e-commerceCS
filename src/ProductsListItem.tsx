import React from 'react';

const ProductsListItem = ({ product, onRemovePressed, onUpdatePressed } : any) => {
    return(
        <div>
            <h2>{product.title}</h2>
            <h3>{product.description}</h3>
            <h4>{product.price}</h4>
            <h5>{product.stockAmount}</h5>
            <button
                onClick={() => onRemovePressed(product._id)}
            >
                remover produto
            </button>
        </div>
    );
}

export default ProductsListItem;