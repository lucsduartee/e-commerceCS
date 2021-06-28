import React from "react";
import styled from "styled-components";

function CartItem({ product } : any) {

  return (
    <CartItemStyle>
      <div className="card">
        <img className="img__product" src={product.image1} alt="" />
        <div className="product__description">
          <h2>Conjunto Esportivo Feminino</h2>
          <p className="description">Camisa e Shorts Dri-Fit</p>
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
              <select id="qtd"> 
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </form>
          </div>
          <hr />
          <p className="price">{product.price}</p>
        </div>
      </div>
      <div className="resumo__compra">
        <div className="resumo__compra--aside">
          <div className="aside__items">
            <p>Subtotal</p>
            <p>{product.price}</p>
          </div>
          <div className="aside__items">
            <p>Descontos</p>
            <p>R$ 0,00</p>
          </div>
          <div className="aside__items">
            <p>Valor total</p>
            <p>{product.price}</p>
          </div>
        </div>
        <a className="btn" href="#">Finalizar compra</a>
      </div>
      <div className="frete">
        <form action="#">
          <label> Simule Frete e Prazo de entrega
            <input type="number" />
            <button type="submit">Calcular</button>
          </label>
        </form>
      </div>
    </CartItemStyle>
  );
}


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
  
  .frete {
    grid-area: frete;
    display: flex;
    flex-direction: column;
    background-color: #EEE;
    border-radius: 15px;
    padding: 10px;
    box-shadow: 5px 5px 5px 2px rgba(0, 0, 0, 0.3);
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

export default CartItem;