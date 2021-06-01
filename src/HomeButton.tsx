import styled from 'styled-components';

function HomeButton(props : {image : string, title: string}) {
    return(
        <HomeButtonWrapper>
            <img src={props.image} alt="selecionar pagina"/>
            <h1>{props.title}</h1>
        </HomeButtonWrapper>
    );
}

const HomeButtonWrapper = styled.button`
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 100%;
    width: 100%;
    height: 100%;
    padding: 6%;

    img {
        display: flex;
        grid-row: 1/3;
        grid-column: 1;
    }
    h1 {
        display: flex;
        grid-row: 2/3;
        grid-column: 1;
        align-items: flex-end;
        justify-content: flex-start;
        background: none;
        z-index: 1;
    }
`;

export default HomeButton;