import styled from 'styled-components';
import { Link } from 'react-router-dom';

function HomeButton(props : {path : string, image : string, title: string}) {
    return(
        <HomeButtonContainer>
                <img src={props.image} alt="selecionar pagina"/>
                <h1>{props.title}</h1>
                    <Link to={props.path}>
                        <div></div>
                    </Link>
        </HomeButtonContainer>
    );
}

const HomeButtonContainer = styled.button`
    display: grid;
    grid-template-rows: 2fr 1fr;
    grid-template-columns: 100%;
    width: 70vw;
    min-width: 250px;
    height: 100%;
    margin-bottom: 3%;
    background: none;
    border: none;
    padding: 0;

    & img {
        display: flex;
        width: 100%;
        height: 82vw;
        grid-row: 1/3;
        grid-column: 1;
    }
    & h1 {
        display: flex;
        width: 100%;
        height: 100%;
        grid-row: 2/3;
        grid-column: 1;
        font-size: max(10vw, 40px);
        text-align: flex-start;
        color: white;
        -webkit-text-stroke: 0.6px rgba(0, 0, 0, 0.7);
        background: none;
        z-index: 2;
    }
    :hover {
        & a {
            display: flex;
            grid-row: 1/3;
            grid-column: 1;
            width: 100%;
            height: 100%;
            background-color: rgba(100, 100, 100, 0.2);
            z-index: 1;
        }
        & div {
            display: flex;
        }
    }

    @media (min-width: 1000px) {
        width: calc(100%/3);
        margin: 0;

        & h1 {
            font-size: 6vw;
        }
        & img {
            height: 39vw;
        }
    }
`;

export default HomeButton;