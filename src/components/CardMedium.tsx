import styled from 'styled-components'
import {Link} from 'react-router-dom'


function CardMedium(props: { image1 : string, image2 : string, description1 ?: string, description2 ?: string, price ?: string, product ?: any }){
    const contentIfNotUsingProductsAPI = (
        <CardMediumStyle>
            <div className="section__card">
                <Link className="section__link" to="/">
                    <img className="section__image" src={props.image1} alt="" />
                    <img className="section__image2" src={props.image2} alt="" />
                    <p className="section__description--card">{props.description2}
                    </p>
                </Link>
                <Link className="section__description" to="/">
                    <p className="section__description--item">{props.description1}</p>
                    <p className="section__description--valor">{props.price}</p>
                </Link>
            </div>
        </CardMediumStyle>
    );

    const contentIfUsingProductsAPI = (
        props.product !== undefined
        ? <CardMediumStyle>
            <div className="section__card">
                <Link className="section__link" to="/">
                    <img className="section__image" src={props.image1} alt="" />
                    <img className="section__image2" src={props.image2} alt="" />
                    <p className="section__description--card">{props.product.description}
                    </p>
                </Link>
                <Link className="section__description" to="/">
                    <p className="section__description--item">{props.product.title}</p>
                    <p className="section__description--valor">{props.product.price}</p>
                </Link>
            </div>
        </CardMediumStyle>
        : null
    );

    return props.product ? contentIfUsingProductsAPI : contentIfNotUsingProductsAPI;
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
