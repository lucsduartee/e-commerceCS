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
            <input />
            <button
                onClick={() => {
                    onCreatePressed(
                        generateId(),
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
const generateId = () => {
    function _p8(s : boolean) {
        var p = (Math.random().toString(16)+"000000000").substr(2, 8);
        return s ? "-" + p.substr(0, 4) + "-" + p.substr(4, 4) : p ;
    }
    return _p8(false)+_p8(true)+_p8(true)+_p8(false);
}

const mapStateToProps = (state : any) => ({
    products: state.products
})

const mapDispatchToProps = (dispatch : any) => ({
    onCreatePressed: (id : string, title : string, description : string, price : string, stockAmount : number) => dispatch(addProductRequest(id, title, description, price, stockAmount))
})

export default connect(mapStateToProps, mapDispatchToProps)(NewProductForm);