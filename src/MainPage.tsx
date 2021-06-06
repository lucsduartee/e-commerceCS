import Header from './components/Header';
import HomeButton from './HomeButton';
import maleImage from './img/imagetype2.png';
import femaleImage from './img/image2.png';
import accImage from './img/mochila-masculina.jpg';
import styled from 'styled-components';
import Footer from './components/Footer';

function MainPage() {
    return(
        <WrapperHomePage>
            <Header /> 
            <HomeButtonsWrapper>
                <HomeButton path="/pages/male" title={"Homens"} image={maleImage} />
                <HomeButton path="/pages/female" title={"Mulheres"} image={femaleImage} />
                <HomeButton path="/pages/acc" title={"Acessórios"} image={accImage} />
            </HomeButtonsWrapper>
            <Footer />
        </WrapperHomePage>
    );
};

const WrapperHomePage = styled.div`
    background-color: #111;
`;

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