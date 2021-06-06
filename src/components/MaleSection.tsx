import CardBig from './CardBig';
import CardMedium from './CardMedium'
import styled from 'styled-components'
import imagetype1 from '../img/imagetype1.png'
import imagetype2 from '../img/imagetype2.png'
import imagetype3 from '../img/imagetype3.png'
import imagetype4 from '../img/imagetype4.png'
import imagetype5 from '../img/imagetype5.png'

function MaleSection() {
    return(
        <>
            <PopularesStyle>
                <div>
                    <p className="section__name"><span>Populares</span></p>
                </div>
                <div className="section__products">
                    <CardMedium image1={imagetype1} image2={imagetype1} />
                    <CardMedium image1={imagetype2} image2={imagetype2} />
                    <CardMedium image1={imagetype3} image2={imagetype3} />
        
                </div>
            </PopularesStyle>
            <NovidadesStyle>
                <div>
                    <p className="section__name"><span>Novidades</span></p>
                </div>
                <div className="section__products">
                    <CardBig image={imagetype4} />
                    <CardBig image={imagetype5} />
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
