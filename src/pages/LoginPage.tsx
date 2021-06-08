import logo from '../img/logo.svg';
import background from '../img/background.svg';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function LoginPage() {
    return(
        <LoginPageWrapper>
            <div className="background-container"><img className="background" src={background} alt="background" /></div>
            <div className="logo-container"><img className="logo" src={logo} alt="logo" /></div>
            <input className="input-email" placeholder="usuario@email.com"></input>
            <input className="input-senha" placeholder="senha"></input>
            <Link to="novasenha"><h4 className="esqueci-senha">Esqueci minha senha</h4></Link>
            <div className="button-entrar-container"><Link to="home"><button className="button-entrar">Entrar</button></Link></div>
            <Link className="registre-se" to="registrese"><h4>Registre-se</h4></Link>
        </LoginPageWrapper>
    );
}

const LoginPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-image: url('/img/background.svg');
    object-fit: cover;
    overflow: none;
    
    & > * {
        z-index: 1;
    }
    & .background-container {
        position: fixed;
        top: -30vw;
        z-index: 0;
        width: 100%;
    }
    & .background {
        width: 100%;
    }
    & > .logo-container {
        margin-top: 10vh;
        width: 250px;
        height: 250px;
    }
    & .logo {
        /*object-fit: contain;*/
        width: 100%;
        height: 100%;
    }
    & input {
        border-radius: 2%;
        background-color: #FFF;
        border: 1px solid #111;
        padding: 10px 20px;
        margin-top: 1vh;
    }
    & a {
        text-decoration: none;
        color: #111;
    }
    & .esqueci-senha {
        margin-top: 1vh;
    }
    & .button-entrar-container {
        display: flex;
        width: 75vw;
        margin-top: 4vh;
        align-items: center;
        justify-content: center;
    }
    & .button-entrar {
        background-color: #111;
        color: #FFF;
        font-size: 15px;
        font-weight: bold;
        border-radius: 5%;
        border: none;
        cursor: poiner;
        padding: 10px 20px;
    }
    & .registre-se{
        margin-bottom: 20vh;
    }
    & .registre-se > h4 {
        margin-top: 1vh;
    }
    @media screen and (min-width: 600px){
        & .background-container {
            top: -50vw;
        }
    }
`;

export {};
export default LoginPage;