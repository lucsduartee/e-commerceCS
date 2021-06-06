import { useState } from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom'


function CardMedium(props: {image1: string, image2: string}) {
    
    const [mouseOnImage, setMouseOnImage] = useState(false);
    const [mouseOnDescription, setMouseOnDescription] = useState(false);

    return (
        <CardMediumStyle>
            <div className="section__card">
                <Link className="img__link" to="/"
                    onMouseEnter={()=> setMouseOnImage(true)}
                    onMouseLeave={()=> setMouseOnImage(false)}
                >
                {
                    mouseOnImage
                    ? <img src={props.image1} alt="roupa"/>
                    : <img src={props.image2} alt="roupa"/>
                }
                </Link>
                <Link className="description__link" to="/"
                    onMouseEnter={()=> setMouseOnDescription(true)}
                    onMouseLeave={()=> setMouseOnDescription(false)}
                >
                {
                    mouseOnDescription
                    ? <div className="section__description">Descrição</div>
                    : <div className="section__description-large">Descrição grande</div>
                }
                </Link>
            </div>
        </CardMediumStyle>
    )
}

export default CardMedium;

const CardMediumStyle = styled.div`
    display: flex;

    .section__card{
        display: flex;
        flex-direction: column;
    }
    a {
        display: flex;
        background-color: #111;
        color: white;
        width: 100%;
    }
    img {
        display: flex;
        width: 35vw;
    }
`
