import CardBig from './CardBig';
import CardMedium from './CardMedium'
import styled from 'styled-components'
import image1 from '../img/image1.png'
import image2 from '../img/image2.png'
import image3 from '../img/image3.png'
import image4 from '../img/image4.png'
import image7 from '../img/image7.png'

function FemaleSection() {
    return(
        <>
            <PopularesStyle>
                <div>
                    <p className="section__name"><span>Populares</span></p>
                </div>
                <div className="section__products">
                    <CardMedium image={image1} />
                    <CardMedium image={image2} />
                    <CardMedium image={image3} />
        
                </div>
            </PopularesStyle>
            <NovidadesStyle>
                <div>
                    <p className="section__name"><span>Novidades</span></p>
                </div>
                <div className="section__products">
                    <CardBig image={image4} />
                    <CardBig image={image7} />
                </div>
            </NovidadesStyle>   
        </>    
    );
}


export default FemaleSection;


const PopularesStyle = styled.div`

    margin: 40px 20px 20px 20px;

    & .section__name {
        width: 100%; 
        text-align: left; 
        border-bottom: 2px solid #000; 
        line-height: 0.1em;
        margin: 10px 0 20px; 
        font-size: calc(10px + ((6vw * 360) / 1000));
        text-transform: uppercase;
    }

    & .section__name span {
        background:#fff; 
        padding:0 10px 0 0;     
    }

    & .section__products {
        display: grid;
        grid-gap: .5rem;
        grid-template-columns: repeat(3, 1fr); 
    }

`;


const NovidadesStyle = styled.div`

    margin: 40px 20px 20px 20px;

    & .section__name {
        width: 100%; 
        text-align: left; 
        border-bottom: 2px solid #000; 
        line-height: 0.1em;
        margin: 10px 0 20px; 
        font-size: calc(10px + ((6vw * 360) / 1000));
        text-transform: uppercase;
    }

    & .section__name span {
        background:#fff; 
        padding:0 10px 0 0;     
    }

    & .section__products {
        display: grid;
        grid-gap: .5rem;
        grid-template-columns: repeat(2, 1fr); 
    }

`;
