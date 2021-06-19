import streetStyle from '../img/street-style.svg';
import styled from 'styled-components';

function Carousel(props: { image1 : string, image2 : string, image3: string, image4 : string}){
    return(
        <Slider>
            <figure>
                <div>
                    <h1>Street Style</h1>
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo et eveniet quae possimus fugit iusto.</h2>
                    <img src={props.image1} alt="stree-style" />
                </div>
                <div>
                    <h1>Street Style</h1>
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo et eveniet quae possimus fugit iusto.</h2>
                    <img src={props.image2} alt="stree-style" />
                </div>
                <div>
                    <h1>Street Style</h1>
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo et eveniet quae possimus fugit iusto.</h2>
                    <img src={props.image3} alt="stree-style" />
                </div>
                <div>
                    <h1>Street Style</h1>
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo et eveniet quae possimus fugit iusto.</h2>
                    <img src={props.image4} alt="stree-style" />
                </div>
            </figure>
        </Slider>
    );
}

const Slider = styled.div`
    overflow: hidden;

    img {
        filter: brightness(50%);
    }

    figure {
        display: flex;
        position: relative;
        height: calc(150px + 50vw);
        max-height: 90vh !important;
        width: 400vw;
        margin: 0%;
        left: 0;
        animation: 8s slider infinite;
    }
    figure div {
        display: grid;
        height: 100%;
        grid-template-rows: 10% 10% 10% 10% 10% 10% 10% 10% 10% 10%;
        width: calc(100% / 4);
    }
    figure div img {
        display: flex;
        width: 100vw;
    }
    figure div h2,
    figure div h1 {
        margin-left: 3vw;
        color: white;
        z-index: 1;
        font-weight: 100;
    }
    figure div h2 {
        max-width: 24ch;
        grid-row: 2/4;
        font-size: min(max(calc(8vw - 25px), 16px), 50px);
    }
    figure div h1 {
        grid-row: 6/9;
        font-size: min(calc(26vw - 50px), 130px);
    }

    @keyframes slider {
        0% {
            left: 0;
        }
        31% {
            left: 0;
        }
        33% {
            left: -100vw;
        }
        65% {
            left: -100vw;
        }
        67% {
            left: -200vw;
        }
        98% {
            left: -200vw;
        }
        100%{
            left: -300vw;
        } 
    }
`;


export default Carousel;