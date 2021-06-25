import styled from 'styled-components'
import {Link} from 'react-router-dom'


function CardMedium(props: { product ?: any }){

    return (
        props.product !== undefined
        ? <CardMediumStyle>
            <div className="section__card">
                <Link className="section__link" to="/">
                    <img className="section__image" src={props.product.image1} alt="1" />
                    <img className="section__image2" src={props.product.image2} alt="2" />
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
