import { useState } from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom'


function CardMedium({ product, userProducts, onAddToCartPressed } : any) : JSX.Element {

    const [hoverDescription, setHoverDescription] = useState(false);

    const image = 
        (
            <Link className="section__link" to="/">
                <img className="section__image" src={product.image1} alt="1" />
                <img className="section__image2" src={product.image2} alt="2" />
            </Link>
        );
    const smallInfoSection = 
        (
            <Link className="section__description" to="/" onMouseOver={() => setHoverDescription(true)}>
                <p className="section__description--item">{product.title}</p>
                <p className="section__description--valor">R${product.price}</p>
            </Link>
        );

    const contentWithoutHover =
        <CardMediumStyle>
            <div className="section__card">
                    {image}
                    {smallInfoSection}
            </div>
        </CardMediumStyle>;

    const contentWithHover = 
        <CardMediumStyleHover onMouseLeave={() => setHoverDescription(false)}>
            <h2>{product.description}</h2>
            <button
                className="add-to-cart-button"
                onClick={()=>onAddToCartPressed(userProducts._Id, product._id)}    
            >
                Adicionar ao carrinho
            </button>
            {smallInfoSection}
        </CardMediumStyleHover>;

    return (
        <> {
            product !== undefined
            ? (
                hoverDescription
                    ? contentWithHover
                    : contentWithoutHover
            )
            : null
        }</>
    );

}

export default CardMedium;

const CardMediumStyle = styled.div`
    .section__card{
        display: flex;
        flex-direction: column;
    }

    .section__image {
        display: flex;
        width: 28.5vw;
        position: relative;
        z-index: 5;
        transition: z-index 1.5s , opacity 1.5s;
        transition-timing-function: ease-in-out;
    }

    .section__image2 {
        position: absolute;
        display: flex;
        width: 28.5vw;
        height: 33vw;
        z-index: 3;
        overflow: scroll;
        transition: z-index 1.5s;
        transition-timing-function: ease-in-out;
        
    }

    .section__image:hover {
        z-index: 0;
        opacity: 0;
        transition-timing-function: ease-in-out;
    }

    .section__description {
        display: flex;
        height: 5vw;
        align-items: center;
        justify-content: space-between;
        background: #000;
        color: #FFF;
        margin: 0;
        width: 28.5vw;
        height: 5vw;
        text-decoration: none;
        font-size: calc( ((6vw * 360) / 1000));
        
    }

    .section__description--card {
        position: absolute;
        display: block;
        z-index: 0;
        color: #f00;
    }

    .section__description:hover .section__description--card {
        z-index: 4;
    }

    a {
        display: flex;
        color: white;
        width: 100%;
    }
`
const CardMediumStyleHover = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 38vw;
    background-color: #111;
    color: white;

    & h2 {
        margin: 0;
        font-size: calc(8px + 2vw);
        height: 56%;
    }
    & .section__description {
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
    }
    & button {
        background-color: green;
        color: white;
        padding: 4px;
        font-size: 10px;
        height: 29px;
        border: none;
    }
    & a {
        display: flex;
        color: white;
        width: 100%;
        text-decoration: none;
        font-size: calc(8px + 1.5vw);
        height: calc(44% - 29px);
    }
    & p {
        margin: 0;
    }
`
