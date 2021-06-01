import styled from 'styled-components';

function HomeButton(props : {image : string, title: string}) {
    return(
        <HomeButtonContainer>
            <img src={props.image} alt="selecionar pagina"/>
            <h1>{props.title}</h1>
            <div></div>
        </HomeButtonContainer>
    );
}

const HomeButtonContainer = styled.button`
    display: grid;
    grid-template-rows: 1fr 1fr;
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
        height: 100%;
        grid-row: 1/3;
        grid-column: 1;
    }
    & h1 {
        display: flex;
        width: 100%;
        height: 100%;
        grid-row: 2/3;
        grid-column: 1;
        font-size: max(15%, 40px);
        text-align: flex-start;
        color: white;
        -webkit-text-stroke: 0.6px rgba(0, 0, 0, 0.7);
        background: none;
        z-index: 2;
    }
    :hover {
        & div {
            display: flex;
            grid-row: 1/3;
            grid-column: 1;
            width: 100%;
            height: 100%;
            background-color: rgba(100, 100, 100, 0.2);
            z-index: 1;
        }
    }

    @media (min-width: 1000px) {
        width: calc(100%/3);
        margin: 0;
    }
`;

export default HomeButton;