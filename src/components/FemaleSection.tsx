import CardBig from './CardBig';
import CardMedium from './CardMedium'
import styled from 'styled-components'
import esportivo from '../img/esportivo.png'
import esportivo2 from '../img/esportivo2.png'
import top from '../img/top.png'
import top2 from '../img/top2.png'
import vestido from '../img/vestido.png'
import vestido2 from '../img/vestido2.png'
import casaco from '../img/casaco.png'
import casaco2 from '../img/casaco2.png'
import carteira from '../img/carteira.png'
import carteira2 from '../img/carteira2.png'


function FemaleSection() {
    return(
        <>
            <PopularesStyle>
                <div>
                    <p className="section__name"><span>Populares</span></p>
                </div>
                <div className="section__products">
                    <CardMedium image1={esportivo} image2={esportivo2} description1="Conjunto Esportivo" description2="camisar" price="$99.90" />
                    <CardMedium image1={top} image2={top2} description1="Cropped Jeans" description2="camisar" price="$79.90" />
                    <CardMedium image1={vestido} image2={vestido2} description1="Vestido Florido" description2="camisar" price="$89.90" />
        
                </div>
            </PopularesStyle>
            <NovidadesStyle>
                <div>
                    <p className="section__name"><span>Novidades</span></p>
                </div>
                <div className="section__products">
                    <CardBig image1={casaco} image2={casaco2} description1="Sobretudo Basics" description2="camisar" preco="$184.90" />
                    <CardBig image1={carteira} image2={carteira2} description1="Carteira de Couro" description2="camisar" preco="$62.90"/>
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
