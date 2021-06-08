import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addProductRequest } from './redux-store/thunks';

const NewProductForm = ({ products, onCreatePressed } : any) => {
    const [inputTitle, setInputTitle] = useState('');
    const [inputDescription, setInputDescription] = useState('');
    const [inputPrice, setInputPrice] = useState('');
    const [inputStockAmount, setInputStockAmount] = useState('');

    return(
        <div>
            <input
                type="text"
                value={inputTitle}
                placeholder="title"
                onChange={(e => setInputTitle(e.target.value))}
            />
            <input
                type="text"
                value={inputDescription}
                placeholder="description"
                onChange={(e => setInputDescription(e.target.value))}
            />
            <input
                type="text"
                value={inputPrice}
                placeholder="price"
                onChange={(e => setInputPrice(e.target.value))}
            />
            <input
                type="text"
                value={inputStockAmount}
                placeholder="stock amount"
                onChange={(e => setInputStockAmount(e.target.value))}
            />
            <button
                onClick={() => {
                    onCreatePressed(
                        inputTitle,
                        inputDescription,
                        inputPrice,
                        inputStockAmount
                    );
                    setInputTitle('');
                    setInputDescription('');
                    setInputPrice('');
                    setInputStockAmount('');
                }}
            >
                criar produto
            </button>
        </div>
    );
}

const mapStateToProps = (state : any) => ({
    products: state.products
})

const mapDispatchToProps = (dispatch : any) => ({
    onCreatePressed: (title : string, description : string, price : string, stockAmount : number) => dispatch(addProductRequest(title, description, price, stockAmount))
})

export { NewProductForm };
export default connect(mapStateToProps, mapDispatchToProps)(NewProductForm);