import React from 'react';
import logo from '../img/logo.svg';
import background from '../img/background.svg';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { loadCurrentUser, loadUsers, loadProducts } from '../redux-store/thunks';

class LoginPage extends React.Component<{ startLoadingProducts : any, startLoadingUsers : any, startLoadingCurrentUser : any }, { username : string, password : string }> {

    constructor(props : any){
        super(props);
      
    
        this.state = {
        username: 'nome ',
        password: 'password'
      }
        this.handleChange = this.handleChange.bind(this);
      }
      handleChange(e : any){
        this.setState({
          username: e.target.value,
          password: e.target.value
        })
      }

    render(){
        return(
            <LoginPageWrapper>
                <div className="background-container"><img className="background" src={background} alt="background" /></div>
                <div className="logo-container"><img className="logo" src={logo} alt="logo" /></div>
                <input
                    className="input-username"
                    type="text"
                    placeholder="username"
                    value={this.state.username}
                    onChange={this.handleChange}
                ></input>
                <input
                    type="password"
                    className="input-senha"
                    placeholder="senha"
                    value={this.state.password}
                    onChange={this.handleChange}
                >
                </input>
                <Link to="novasenha">
                    <h4 className="esqueci-senha">Esqueci minha senha</h4>
                </Link>
                <div className="button-entrar-container">
                    <Link to="home">
                        <button className="button-entrar" onClick={() => {
                                this.props.startLoadingCurrentUser(this.state.username);
                                this.props.startLoadingUsers();
                                this.props.startLoadingProducts();
                                
                            }}>
                            Entrar
                        </button>
                    </Link>
                </div>
                <Link className="registre-se" to="/new-account"><h4>Registre-se</h4></Link>
                <Link className="adm-page-link" to="/products-list">Adm Page</Link>
            </LoginPageWrapper>
        );
    }
}

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

export { LoginPage };
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);

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
    & .adm-page-link {
        position: absolute;
        top: 2vw;
        left: 3vh;
        background-color: #000;
        color: #FFF;
        padding: 7px;
        border-radius: 3px;
    }
    @media screen and (min-width: 600px){
        & .background-container {
            top: -50vw;
        }
    }
`;
