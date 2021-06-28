import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addProductRequest } from '../redux-store/thunks';
import styled from 'styled-components';

const NewProductForm = ({ products, onCreatePressed } : any) => {
    const [inputTitle, setInputTitle] = useState('');
    const [inputDescription, setInputDescription] = useState('');
    const [inputPrice, setInputPrice] : [number, any] = useState(0);
    const [inputStockAmount, setInputStockAmount] : [number, any] = useState(0);
    const [inputCategory1, setInputCategory1] = useState('');
    const [inputCategory2, setInputCategory2] = useState('');
    const [inputImageUrl1, setInputImageUrl1] =  useState('');
    const [inputImageUrl2, setInputImageUrl2] =  useState('');

    return(
        <NewProductFormStyle>
            <label> Título
                <input
                    id="title"
                    className="title-field"
                    type="text"
                    value={inputTitle}
                    placeholder=""
                    onChange={(e => setInputTitle(e.target.value))}
                />
            </label>
            <label> Descrição
                <input
                    className="description-field"
                    type="text"
                    value={inputDescription}
                    placeholder=""
                    onChange={(e => setInputDescription(e.target.value))}
                />
            </label>
            <label> Preço
                <input
                    className="price-field"
                    type="number"
                    value={inputPrice}
                    placeholder="ex: R$XX,XX"
                    onChange={(e => setInputPrice(e.target.value))}
                />
            </label>
            <label> Estoque
                <input
                    className="stock-field"
                    type="number"
                    value={inputStockAmount}
                    placeholder=""
                    onChange={(e => setInputStockAmount(e.target.value))}
                />
            </label>




            <label> Categoria 1
                <select
                    value={inputCategory1}
                    onChange={(e => setInputCategory1(e.target.value))}
                > 
                    <option value="female">female</option>
                    <option value="male">male</option>                
                </select>
            </label>
            <label> Categoria 2
                <select
                    value={inputCategory2}
                    onChange={(e => setInputCategory2(e.target.value))}
                > 
                    <option value="bermudas-e-shorts">f-bermudas-e-shorts</option>
                    <option value="blusas-e-sueters">f-blusas-e-sueters</option>
                    <option value="calcas">f-calcas</option>
                    <option value="calcados">f-calcados</option>
                    <option value="camisas-e-camisetas">f-camisas-e-camisetas</option>
                    <option value="casacos-e-jaquetas">f-casacos-e-jaquetas</option>
                    <option value="bermudas-e-shorts">m-bermudas-e-shorts</option>
                    <option value="blusas-e-sueters">m-blusas-e-sueters</option>
                    <option value="calcas">m-calcas</option>
                    <option value="calcados">m-calcados</option>
                    <option value="camisas-e-camisetas">m-camisas-e-camisetas</option>
                    <option value="casacos-e-jaquetas">m-casacos-e-jaqueta</option>
                    <option value="cuecas">m-cuecas</option>
                    <option value="moda-praia">m-moda-praia</option>
                    <option value="polos">m-polos</option>
                    <option value="geek">m-geek</option>
                    <option value="plus-size">m-plus-size</option>
                </select>
            </label>
            <label> Imagem 1
                <input 
                    className="image-field-url1"
                    type="text"
                    value={inputImageUrl1}
                    placeholder="caminho da imagem 1"
                    onChange={(e => setInputImageUrl1(e.target.value))}
                />
            </label>
            <label> Imagem 2
                <input 
                    className="image-field-url2"
                    type="text"
                    value={inputImageUrl2}
                    placeholder="caminho da imagem 2"
                    onChange={(e => setInputImageUrl2(e.target.value))}
                />
            </label>
            <button
                onClick={() => {
                    onCreatePressed(
                        inputTitle,
                        inputDescription,
                        inputPrice,
                        inputStockAmount,
                        inputCategory1,
                        inputCategory2,
                        inputImageUrl1,
                        inputImageUrl2,
                    );
                    setInputTitle('');
                    setInputDescription('');
                    setInputPrice('');
                    setInputStockAmount('');
                    setInputCategory1('');
                    setInputCategory2('none');
                    setInputImageUrl1('');
                    setInputImageUrl2('');
                }}
            >
                Criar produto
            </button>
        </NewProductFormStyle>
    );
}

const mapStateToProps = (state : any) => ({
    products: state.products
})

const mapDispatchToProps = (dispatch : any) => ({
    onCreatePressed: (title : string, description : string, price : string, stockAmount : number, category1 : string, category2 : string, image1 : string, image2 : string) => dispatch(addProductRequest(title, description, price, stockAmount, category1, category2, image1, image2))
})

export { NewProductForm };
export default connect(mapStateToProps, mapDispatchToProps)(NewProductForm);

const NewProductFormStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 60vw;
    min-width: 220px;
    max-width: 600px;
    height: 300px;
    margin: 10% auto 10% auto;
    padding: 15px;
    border: 2px solid #000;
    border-radius: 5px;
    box-shadow: 15px 15px 5px 5px rgba(0, 0, 0, 0.5);

    .title-field,
    .description-field,
    .price-field,
    .stock-field {
        display: block;
        width: 100%;
        padding: 5px 0;
        margin: 0 auto;
        border: 2px solid rgba(0, 0, 0, 0.3);
        border-radius: 2px;
    }  

    label {
        font-weight: bold;
    }

    button {
        background: #000;
        border: none;
        border-radius: 5px;
        box-shadow: 3px 3px 5px 1px rgba(0, 0, 0, 0.5);
        color: #FFF;
        font-weight: bold;
        padding: 3%;
    }


`;