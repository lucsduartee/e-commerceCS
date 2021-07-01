import CardBig from './CardBig';
import CardMedium from './CardMedium'
import styled from 'styled-components'
import cbranca from '../img/cbranca.png'
import cbranca2 from '../img/cbranca2.png'
import magneto from '../img/magneto.png'
import magneto2 from '../img/magneto2.png'
import moletom from '../img/moletom.png'
import moletom2 from '../img/moletom2.png'
import blusaflorida from '../img/blusaflorida.png'
import blusaflorida2 from '../img/blusaflorida2.png'
import oculos from '../img/oculos.png'
import oculos2 from '../img/oculos2.png'
import ProductsByCategory from './ProductsByCategory';


function MaleSection() {
    return(
        <>
            <PopularesStyle>
                <div>
                    <p className="section__name"><span>Populares</span></p>
                </div>
                <div className="section__products">
                    <ProductsByCategory category1="male"/>
                </div>
            </PopularesStyle>
            <NovidadesStyle>
                <div>
                    <p className="section__name"><span>Novidades</span></p>
                </div>
                <div className="section__products">
                    <CardBig image1={blusaflorida} image2={blusaflorida2} description1="Camisa Pós-Impressionismo" description2="camisar" preco="$89.90" />
                    <CardBig image1={oculos} image2={oculos2} description1="Óculos New Summer" description2="camisar" preco="$59.90" />
                </div>
            </NovidadesStyle>   
        </>    
    );
}


export default MaleSection;


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
        display: flex;
        // display: grid;
        // grid-gap: .5rem;
        // grid-template-columns: repeat(3, 1fr); 
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
