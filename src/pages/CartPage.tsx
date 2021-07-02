import styled from "styled-components";
import Header from "../components/Header";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import CartItem from "../components/CartItem";
import { connect } from "react-redux";
import { loadCurrentUser } from "../redux-store/thunks";
import { currentUserLoading } from "../redux-store/reducers";

function CartPage({
  value = 0,
  currentUser = {},
  currentUserLoading,
  startLoadingCurrentUser,
}: any) {

  useEffect(() => {
    startLoadingCurrentUser(currentUser.username);
  }, [startLoadingCurrentUser, currentUser.username]);

  console.log(currentUser);
  console.log(currentUser._id);

  const content = (
    <CartPageContainer>
      <>
        {currentUser.products.map((product: any) => (
          <CartItem
            value={value}
            currentUser={currentUser}
            product={product}
            userId={currentUser._id}
            key={product._id}
          />
        ))}
      </>
      <div className="frete">
        <form action="#">
          <label>
            {" "}
            Simule Frete e Prazo de entrega
            <input type="number" />
            <button type="submit">Calcular</button>
          </label>
        </form>
      </div>
      <div className="resumo__compra">
        <div className="resumo__compra--aside">
          <div className="aside__items">
            <p>Subtotal</p>
            <p>
              R$
              {currentUser.products.reduce(
                (acc: number, product: { price: string, amount : string }) => {
                  return acc + (parseFloat(product.price) * parseFloat(product.amount));
                },
                0
              )}
            </p>
          </div>
          <div className="aside__items">
            <p>Descontos</p>
            <p>R$0</p>
          </div>
          <div className="aside__items">
            <p>Valor total</p>
            <p>
              R$
              {currentUser.products.reduce(
                (acc: number, product: { price: string, amount : string }) => {
                  return acc + (parseFloat(product.price) * parseFloat(product.amount));
                },
                0
              )}
            </p>
          </div>
        </div>
        <Link className="btn" to="cart">
          Finalizar compra
        </Link>
      </div>
    </CartPageContainer>
  );
  return (
    <>
      <Header />
      {content}
      <Footer />
    </>
  );
}

const CartPageContainer = styled.div`

  .resumo__compra {
    width: 70%;
    margin: 0 auto;
    background-color: #eee;
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
    color: #fff;
    background-color: #000;
    font-weight: bold;
    font-size: 20px;
    border-radius: 15px;
  }

  input {
    display: block;
    margin-top: 10px;
    padding: 10px;
  }

  button {
    width: 200px;
    color: #fff;
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

const mapStateToProps = (state: any) => ({
  currentUser: state.currentUser,
  currentUserLoading: currentUserLoading,
});

const mapDispatchToProps = (dispatch: any) => ({
  startLoadingCurrentUser: (username: string) =>
    dispatch(loadCurrentUser(username)),
});

export { CartPage };
export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
