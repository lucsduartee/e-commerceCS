import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { removeProductFromUserRequest } from "../redux-store/thunks";

function CartItem({ totalValueCallback, currentUser, product, onRemovePressed, userId } : any) {
  console.log(userId);
  const [amount, setAmount] = useState(1);
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
                <input className="input-qtd" value={amount} onChange={(e : any) => setAmount(e.target.value)} />
            </form>
          </div>
          <hr />
          <div className="delete-price">
            <button className="delete" onClick={() => onRemovePressed(currentUser._id, product._id)}>Apagar</button>
            <p className="price">{value}</p>
          </div>
          
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
  width: 60%;
  margin: 0 auto;

  form {
    width: 65px;
  }

  .card {
    background-color: #EEE;
    min-width: 275px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    border-radius: 15px;
    padding-top: 10px;
    padding-bottom: 10px;
    box-shadow: 5px 5px 5px 2px rgba(0, 0, 0, 0.3);
    margin-bottom: 10px;
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
    margin-bottom: 0;
  }

  .delete-price {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .drops {
    display: flex;
    justify-content: space-between;
  }

  .resumo__compra {
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

  .input-qtd {
    width: 40%;
    height: 5px;
    display: inline-block;
    margin-top: 0px;
    padding: 7px;
  }

  .delete {
    display: inline;
    width: 70px;
    font-size: 16px;
    margin-top: 0;
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
