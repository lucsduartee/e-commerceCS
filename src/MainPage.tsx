import Header from './components/Header';
import HomeButton from './HomeButton';
import maleImage from './img/imagetype2.png';
import femaleImage from './img/image2.png';
import accImage from './img/image3.png';
import styled from 'styled-components';

function MainPage() {
    return(
        <WrapperHomePage>
            <Header /> 
            <HomeButtonsWrapper>
                <HomeButton title={"Homens"} image={maleImage} />
                <HomeButton title={"Mulheres"} image={femaleImage} />
                <HomeButton title={"Acessórios"} image={accImage} />
            </HomeButtonsWrapper>
        </WrapperHomePage>
    );
};

const WrapperHomePage = styled.div``;

const HomeButtonsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    margin-top: 20px;

    @media (min-width: 1000px) {
        flex-direction: row;
    }
`;

export default MainPage;