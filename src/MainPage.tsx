import Header from './components/Header';
import HomeButton from './HomeButton';
import maleImage from './img/image1.png';
import femaleImage from './img/image2.png';
import accImage from './img/image3.png';
import styled from 'styled-components';

function MainPage() {
    return(
        <WrapperHomePage>
            <Header /> 
            <HomeButton title={"Página Masculina"} image={maleImage} />
            <HomeButton title={"Página Feminina"} image={femaleImage} />
            <HomeButton title={"Página de Acessórios"} image={accImage} />
        </WrapperHomePage>
    );
};

const WrapperHomePage = styled.div``;

export default MainPage;