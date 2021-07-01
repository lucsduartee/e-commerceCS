import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadProducts } from "../redux-store/thunks";
import styled from "styled-components";
import CardMedium from "./CardMedium";
import Header from "./Header";
import Footer from "./Footer";

function ProductsByCategory({
  products = [],
  isLoading,
  startLoadingProducts,
  category1,
  category2,
}: any) {
  products = Array.from(products);

  useEffect(() => {
    startLoadingProducts();
  }, [startLoadingProducts]);

  const loadingMessage = <div>carregando produtos</div>;
  console.log(category2);

  const content = (
    <>
      <AllProductsStyle>
        {products.map((product: any) =>
          category2 === undefined ? (
            product.category1 === category1 ? (
              <CardMedium key={product._id} product={product} />
            ) : null 
          ) : ( 
            <>
              <Header />
              {
                product.category1 === category1 && product.category2 ===
                category2 ? 
                <CardMedium key={product._id} product={product} />  : null
              }     
            </> 
          )
        )}
      </AllProductsStyle>
      <Footer />
    </>
  );

  return isLoading ? loadingMessage : content;
}

const AllProductsStyle = styled.div`
  // display: grid;
  // width: 80vw;
  // margin: 5vh 5vw;
  // grid-template-columns: 1fr 1fr 1fr;
  // grid-gap: 0.5rem;
`;

const mapStateToProps = (state: any) => ({
  isLoading: state.isLoading,
  products: state.products,
});

const mapDispatchToProps = (dispatch: any) => ({
  startLoadingProducts: () => dispatch(loadProducts()),
});

export { ProductsByCategory };
export default connect(mapStateToProps, mapDispatchToProps)(ProductsByCategory);
