import styled from 'styled-components'
import {Link} from 'react-router-dom'

function CardBig(props: {image: string}) {
    
    return (
        <CardBigStyle>
            <div className="section__card">
                <Link className="section__link" to=""><img className="section__image" src={props.image} alt="" /></Link>
                <p className="section__description">Descrição</p>
            </div>
        </CardBigStyle>
    )
}

export default CardBig;

const CardBigStyle = styled.div`
    & .section__card {
        width: 100%;
        display: grid;
        grid-template-areas: 
            "card-image" 
            "card-description";
        grid-template-rows: 5fr 1fr;
        
    }
    
    & .section__link {
        display: flex;
    }

    & .section__image {
        grid-area: card-image;
        width: 100%;
    
    }

    & .section__description {
        grid-area: card-description;
        color: white;
        height: 100%;
        margin: 0;
        background: black;
        font-size: calc(10px + ((6vw * 360) / 1000));
    }
`
