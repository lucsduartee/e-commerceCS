import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { removeProductFromUserRequest } from "../redux-store/thunks";
import { Fill } from 'react-slot-fill';

function CartItem({ totalValueCallback, currentUser, product, onRemovePressed, userId } : any) {
  console.log(userId);
  const [amount, setAmount] = useState(0);
  const value : number = product.price * amount;

  return (
    <CartItemStyle>
      <div className="card">
        <img className="img__product" src={product.image1} alt="" />
        <div className="product__description">
          <h2>{product.title}</h2>
          <p className="description">{product.description}</p>
          <div className="drops">
            <p className="size">Tamanho</p>
            <form action="#">
              <select id="tamanho"> 
                <option value="">PP</option>
                <option value="">P</option>
                <option value="">M</option>
                <option value="">G</option>
                <option value="">GG</option>
              </select>
            </form>
          </div>
          <div className="drops">
            <p className="size">Quantidade</p>
            <form action="#">
                <input value={amount} onChange={(e : any) => setAmount(e.target.value)} />
            </form>
          </div>
          <hr />
          <button onClick={() => onRemovePressed(currentUser._id, product._id)}>Apagar</button>
          <p className="price">{product.price}</p>
          <Fill name="TotalPrice">{value}</Fill>
        </div>
      </div>
    </CartItemStyle>
  );
}

const mapStateToProps = (state : any) => ({
  currentUsers: state.currentUsers,
})

const mapDispatchToProps = (dispatch : any) => ({
  onRemovePressed: (userId : string, productId : string) => dispatch(removeProductFromUserRequest(userId, productId))
})

export { CartItem }
export default connect(mapStateToProps, mapDispatchToProps)(CartItem);

const CartItemStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 30%) 40%;
  grid-template-areas:
    "produto produto resumo"
    "produto produto resumo"
    "frete frete .";
  width: 60%;
  margin: 75px auto 0 auto;
  grid-gap: 20px;
  
  .card {
    grid-area: produto;
    background-color: #EEE;
    min-width: 400px;
    display: flex;
    justify-content: space-around;
    border-radius: 15px;
    padding-top: 10px;
    padding-bottom: 10px;
    box-shadow: 5px 5px 5px 2px rgba(0, 0, 0, 0.3);
  }

  .description {
    font-style: italic;
  }

  .product__description {
    display: inline-block;
    vertical-align: top;
    width: 60%;
  }

  h2 {
    font-weight: bold;
    margin-bottom: 8px;
    font-size: 18px;
  }

  img {
    width: 20%;
    min-width: 150px;
  }

  .product__description p {
    margin-bottom: 8px;
  }

  .price {
    font-size: 20px;
    font-weight: bold;
    text-align: end;
  }

  .drops {
    display: flex;
    justify-content: space-between;
  }

  .resumo__compra {
    grid-area: resumo;
    background-color: #EEE;
    border-radius: 15px;
 
    box-shadow: 5px 5px 5px 2px rgba(0, 0, 0, 0.3);
  }

  .resumo__compra--aside {
    padding: 10px;
  }

  .aside__items {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    font-weight: 500;
    font-size: 20px;
  }

  .btn {
    width: 100%;
    padding: 20px 0;
    display: block;
    text-align: center;
    margin: 0 auto;
    text-decoration: none;
    color: #FFF;
    background-color: #000; 
    font-weight: bold;
    font-size: 20px;
    border-radius: 15px;

  }

  input {
    display:block;
    margin-top: 10px;
    padding: 10px;
  }

  button {
    width: 200px;
    color: #FFF;
    background-color: #000; 
    font-weight: bold;
    font-size: 18px;
    border: none;
    border-radius: 3px;
    margin-top: 10px;
    padding: 7.5px 0;
    
  }

  label {
    font-weight: bold;
    font-size: 18px;
    padding-bottom: 20px;
  }



`;
