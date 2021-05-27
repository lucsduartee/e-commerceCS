import Header from './components/Header';
import Carousel from './components/Carousel';
import styled from 'styled-components';
import FemaleSection from './components/FemaleSection'

function FemalePage() {
    return(
        <>
            <Header /> 
            <Carousel />
            <FemaleSection />
        </>
    );
}

const StreetStyleContainer = styled.div``;

export default FemalePage;