import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { loadProducts } from "../redux-store/thunks";
import styled from "styled-components";
import CardMedium from "./CardMedium";

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

  const contentForMainSections =
    <>
       {products
        .filter((product : any) => category2 === undefined && category1 === product.category1)
        .map((product: any, index : number) =>
          index < 3
            ? (
                <>
                  <CardMedium key={product._id} product={product} />
                </>
              )
            :
              null
          )
        }
    </>;

  const contentForSpecificSections = 
    <>
      {products.map((product: any) =>
        product.category1 === category1 && product.category2 === category2
          ? 
            <>
              <CardMedium key={product._id} product={product} /> 
            </> 
          :
            null
      )}
    </>;

  const content =
    <AllProductsStyle>
      {contentForMainSections}
      {contentForSpecificSections}
    </AllProductsStyle>;

  return isLoading ? loadingMessage : content;
}

const AllProductsStyle = styled.div`
  display: grid;
  width: 90vw;
  margin: 0 auto;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 0.5rem;
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
