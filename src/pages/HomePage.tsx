import { useEffect } from 'react';
import Header from '../components/Header';
import HomeButton from '../components/HomeButton';
import maleImage from '../img/imagetype2.png';
import femaleImage from '../img/image2.png';
import accImage from '../img/mochila-masculina.jpg';
import styled from 'styled-components';
import Footer from '../components/Footer';
import { connect } from 'react-redux';
import { loadCurrentUser, loadUsers, loadProducts } from '../redux-store/thunks';

function HomePage({ username, startLoadingProducts, startLoadingUsers, startLoadingCurrentUser } : any) {
    useEffect(() => {
        startLoadingProducts();
    }, [startLoadingProducts]);
    useEffect(() => {
        startLoadingUsers();
    }, [startLoadingUsers]);
    useEffect(() => {
        startLoadingCurrentUser(username);
    }, [startLoadingCurrentUser, username]);

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

const mapStateToProps = (state : any) => ({
    currentUser: state.currentUser,
    users: state.users,
    products: state.products
});

const mapDispatchToProps = (dispatch : any) => ({
    startLoadingCurrentUser: (username : string) => dispatch(loadCurrentUser(username)),
    startLoadingUsers: () => dispatch(loadUsers()),
    startLoadingProducts: () => dispatch(loadProducts())
})

export { HomePage };
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);