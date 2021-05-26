import streetStyle from './img/street-style.svg';
import styled from 'styled-components';

function Carousel(){
    return(
        <Slider>
            <figure>
                <div>
                    <h1>Street Style</h1>
                    <img src={streetStyle} alt="stree-style" />
                </div>
                <div><img src={streetStyle} alt="stree-style" /></div>
                <div><img src={streetStyle} alt="stree-style" /></div>
                <div>
                    <h1>Street Style</h1>
                    <img src={streetStyle} alt="stree-style" />
                </div>
            </figure>
        </Slider>
    );
}

const Slider = styled.div`
    overflow: hidden;

    figure {
        display: flex;
        position: relative;
        height:88vh;
        width: 400vw;
        margin: 0%;
        left: 0;
        animation: 8s slider infinite;
    }
    figure div {
        display: grid;
        grid-template-rows: 10vh 10vh 10vh 10vh 10vh 10vh 10vh 10vh 10vh 10vh;
        width: calc(100% / 4);
    }
    figure div img {
        width: 100%;
    }
    figure div h1 {
        color: white;
        grid-row: 5/8;
        font-size: 150px;
        font-weight: 100;
        z-index: 1;
    }

    @keyframes slider {
        0% {
            left: 0;
        }
        31% {
            left: 0;
        }
        33% {
            left: -100%;
        }
        65% {
            left: -100%;
        }
        67% {
            left: -200%;
        }
        98% {
            left: -200%;
        }
        100%{
            left: -300%;
        } 
    }
`;


export default Carousel;