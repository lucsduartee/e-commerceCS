import Header from './components/Header';
import Carousel from './components/Carousel';
import styled from 'styled-components';

function StreetStyle() {
    return(
        <StreetStyleContainer>
            <Header />
            <Carousel />
        </StreetStyleContainer>
    );
}

const StreetStyleContainer = styled.div``;

export default StreetStyle;