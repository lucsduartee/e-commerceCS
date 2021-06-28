import styled from 'styled-components';
import Header from '../components/Header';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import CartItem from '../components/CartItem';
import { connect } from 'react-redux';
import { loadUserProducts } from '../redux-store/thunks';
import { userProductsLoading } from '../redux-store/reducers';

function CartPage({ userProducts={}, userProductsLoading, startLoadingUserProducts } : any){



        console.log(userProducts);
        console.log(userProducts._id);
    
            const content = (
              <CartPageContainer>
                  <>{
                      userProducts.products.map((product : any) =>
                        <CartItem userProducts={userProducts} product={product} userId={userProducts._id} key={product._id}/>
                      )
                  }</>
                  <div className="frete">
                      <form action="#">
                          <label> Simule Frete e Prazo de entrega
                              <input type="number" />
                              <button type="submit">Calcular</button>
                          </label>
                      </form>
                  </div>
                  <div className="resumo__compra">
                      <div className="resumo__compra--aside">
                          <div className="aside__items">
                              <p>Subtotal</p>
                              <p>{
                                  userProducts.products.reduce((acc : number, product : any) => {
                                      return acc + product.price;
                                  }, 0)
                              }</p>
                          </div>
                          <div className="aside__items">
                              <p>Descontos</p>
                              <p>R$ 0,00</p>
                          </div>
                          <div className="aside__items">
                              <p>Valor total</p>
                              <p>{
                                  userProducts.products.reduce((acc : number, product : any) => {
                                  return acc + product.price;
                                  }, 0)
                              }</p>
                          </div>
                      </div>
                      <Link className="btn" to="cart">Finalizar compra</Link>
                  </div>
              </CartPageContainer>)
    return (
      <>
        <Header />
        {/* {userProductsLoading ? <div>carregando carrinho</div> : content} */}
        {content}
        <Footer />
      </>
    )
}

const CartPageContainer = styled.div`
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

const mapStateToProps = (state : any) => ({
    userProducts: state.userProducts,
    userProductsLoading: userProductsLoading
});

const mapDispatchToProps = (dispatch : any) => ({
  startLoadingUserProducts: (username : string) => dispatch(loadUserProducts(username))
})

export { CartPage };
export default connect(mapStateToProps, mapDispatchToProps)(CartPage);