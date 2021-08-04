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

  const [searchInput, setSearchInput] = useState('');
  const [sortAttribute, setSortAttribute] = useState('title');
  const [sortOption, setSortOption] = useState(1);
  const loadingMessage = <div>carregando produtos</div>;
  console.log(category2);

  const Input =
    <InputStyle
        className="search-input"
        value={searchInput}
        onChange={(e : any) => setSearchInput(e.target.value)}
    />;
  <label>Ordenar por:
    <select value={sortAttribute} onChange={(e)=>setSortAttribute(e.target.value)}>
        <option value="title">Título</option>
        <option value="value">Valor</option>
    </select>
    <select value={sortOption} onChange={(e : any)=>setSortOption(e.target.value)}>
        <option value={1}>/\</option>
        <option value={-1}>\/</option>
    </select>
  </label>

  const contentForMainSections =
    <>
       {products
       .filter((product : any) =>
          product['title']
          .toLowerCase()
          .includes(searchInput.toLowerCase())
          ||
          product['description']
          .toLowerCase()
          .includes(searchInput.toLowerCase())
        )
        .sort((a : any, b : any) =>
            (a.sortAttribute < b.sortAttribute)
            ?
              -1 * sortOption
            :
              1 * sortOption
        )
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
  <>
     {Input}

    <ProductsByCategoryStyle>
      {contentForMainSections}
      {contentForSpecificSections}
    </ProductsByCategoryStyle>
  </>;
     

  return isLoading ? loadingMessage : content;
}

const InputStyle = styled.input`
    width: 100vw;
`;

const ProductsByCategoryStyle = styled.div`
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
