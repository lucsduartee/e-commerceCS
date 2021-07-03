import { useState } from 'react';
import styled from 'styled-components';
import logomenu from '../img/logomenu.svg';
import lupa from '../img/lupa.svg';
import perfil from '../img/perfil.svg';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function Header({currentUser} : any) {

    const [showUserInfos, setShowUserInfos] = useState(false);
    const [showSearchBar, setShowSearchBar] = useState(false);
    const [searchInput, setSearchInput] = useState('');

    return (
        <HeaderStyle>   
            <div className="cabecalho">
                <div className="icon-logo-container">
                    <Link to="/home"><img className="menu__logo" src={logomenu} alt="Logomarca da loja"/></Link>
                </div>
                <ul className="menu__navigation">
                    <li className="menu__item">
                        <Link to="/home" className="menu__link">Home</Link>
                    </li>
                    <li className="menu__item menu__item--drop">
                    <Link to="#" className="droplink">Seu Estilo</Link>
                        <ul className="dropdown__sections">
                            <li><Link to="/pages/female/index" className="dropdown__sections--link">Feminino</Link>
                                <ul className="dropdown__list">
                                    <li className="dropdown__products--item"><Link to="/pages/female/bermudas-e-shorts" className="dropdown__products--link">Bermudas e Shorts</Link></li>
                                    <li className="dropdown__products--item"><Link to="/pages/female/blusas-e-camisetas" className="dropdown__products--link">Blusas e Camisetas</Link></li>
                                    <li className="dropdown__products--item"><Link to="/pages/female/sueters" className="dropdown__products--link">Suéters</Link></li>
                                    <li className="dropdown__products--item"><Link to="/pages/female/calcados" className="dropdown__products--link">Calçados</Link></li>
                                    <li className="dropdown__products--item"><Link to="/pages/female/camisas" className="dropdown__products--link">Camisas</Link></li>
                                    <li className="dropdown__products--item"><Link to="/pages/female/conjuntos" className="dropdown__products--link">Conjuntos</Link></li>
                                    <li className="dropdown__products--item"><Link to="/pages/female/moda-intima" className="dropdown__products--link">Moda Íntima</Link></li>
                                    <li className="dropdown__products--item"><Link to="/pages/female/moda-praia" className="dropdown__products--link">Moda Praia</Link></li>
                                    <li className="dropdown__products--item"><Link to="/pages/female/esportivo" className="dropdown__products--link">Esportivo</Link></li>
                                    <li className="dropdown__products--item"><Link to="/pages/female/saias" className="dropdown__products--link">Saias</Link></li>
                                    <li className="dropdown__products--item"><Link to="/pages/female/curve-plus-size" className="dropdown__products--link">Curve {'&'} Plus Size</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/pages/male/index" className="dropdown__sections--link">Masculino</Link> 
                                <ul className="dropdown__list">
                                    <li className="dropdown__products--item"><Link to="/pages/male/bermudas-e-shorts" className="dropdown__products--link">Bermudas e Shorts</Link></li>
                                    <li className="dropdown__products--item"><Link to="/pages/male/blusas-e-sueters" className="dropdown__products--link">Blusas e Suéters</Link></li>
                                    <li className="dropdown__products--item"><Link to="/pages/male/calcas" className="dropdown__products--link">Calças</Link></li>
                                    <li className="dropdown__products--item"><Link to="/pages/male/calcados" className="dropdown__products--link">Calçados</Link></li>
                                    <li className="dropdown__products--item"><Link to="/pages/male/camisas-e-camisetas" className="dropdown__products--link">Camisas e Camisetas</Link></li>
                                    <li className="dropdown__products--item"><Link to="/pages/male/casacos-e-jaquetas" className="dropdown__products--link">Casacos e Jaquetas</Link></li>
                                    <li className="dropdown__products--item"><Link to="/pages/male/cuecas" className="dropdown__products--link">Cuécas</Link></li>
                                    <li className="dropdown__products--item"><Link to="/pages/male/moda-praia" className="dropdown__products--link">Moda Praia</Link></li>
                                    <li className="dropdown__products--item"><Link to="/pages/male/polos" className="dropdown__products--link">Polos</Link></li>
                                    <li className="dropdown__products--item"><Link to="/pages/male/geek" className="dropdown__products--link">Geek</Link></li>
                                    <li className="dropdown__products--item"><Link to="/pages/male/pluz-size" className="dropdown__products--link">Plus Size</Link></li>
                                </ul>
                            </li>    
                            <li><Link to="/" className="dropdown__sections--link">Acessórios</Link>
                                <ul className="dropdown__list">
                                    <li className="dropdown__products--item"><Link to="/" className="dropdown__products--link">Mochilas</Link></li>
                                    <li className="dropdown__products--item"><Link to="/" className="dropdown__products--link">Bolsas</Link></li>
                                    <li className="dropdown__products--item"><Link to="/" className="dropdown__products--link">Nécessaires</Link></li>
                                    <li className="dropdown__products--item"><Link to="/" className="dropdown__products--link">Cintos</Link></li>
                                    <li className="dropdown__products--item"><Link to="/" className="dropdown__products--link">Óculos</Link></li>
                                    <li className="dropdown__products--item"><Link to="/" className="dropdown__products--link">Colares</Link></li>
                                    <li className="dropdown__products--item"><Link to="/" className="dropdown__products--link">Pulseiras</Link></li>
                                    <li className="dropdown__products--item"><Link to="/" className="dropdown__products--link">Anéis</Link></li>
                                    <li className="dropdown__products--item"><Link to="/" className="dropdown__products--link">Bijuterias</Link></li>
                                    <li className="dropdown__products--item"><Link to="/" className="dropdown__products--link">Relógios</Link></li>
                                    <li className="dropdown__products--item"><Link to="/" className="dropdown__products--link">Chapéus</Link></li>
                                </ul>
                            </li>
                        </ul>                        
                    </li>
                
                    <li className="menu__item">
                        <Link to="/products" className="menu__link">Ofertas</Link>
                    </li>

                    <li className="search-avatar-icon-container">
                        <Link to="/filtered-products-list">
                            <img className="icon icon__search" src={lupa} alt="pesquisa"/>
                        </Link>
                        <div onMouseOver={() => setShowUserInfos(true)}>
                            <img className="icon icon__perfil" src={perfil} alt="avatar"/>
                        </div>
                    </li>
                    {
                        showUserInfos
                            ?
                                <div onMouseOut={() => setShowUserInfos(false)} className="user-infos-menu">
                                    <p>{currentUser.username}</p>
                                    <p>R$300</p>
                                    <p>Configurações</p>
                                    <Link to="/"><p>Sair</p></Link>
                                </div>
                            :
                                null
                    }
                </ul>
            </div>
        </HeaderStyle>
    );
}

const mapStateToProps = (state : any)  => ({
    currentUser: state.currentUser
});

export { Header };
export default connect(mapStateToProps)(Header);

const HeaderStyle = styled.div`
    width: 100vw;
   
    & .cabecalho {
        display: flex;
        width: 100vw;
        overflow: hidden;
        background-color: #111;
    }
    & .menu__logo {
        margin-left: 20px;
        padding-top: 15px;
        padding-bottom: 15px;
        width: calc(30px + 3vw);
    }
    & .menu__navigation {
        display: flex;
        flex-grow: 1;
        justify-content: space-between;
        margin: 0 calc(5vw);
        text-align: center;   
    }
    & .menu__link {
        color: #FFFFFF;
        font-size: calc(10px + ((6vw * 360) / 1000));
        text-decoration: none;
    }
    & .menu__link:hover {
        text-decoration: underline;
    }
    & .droplink{
        display: flex;
        font-size: calc(10px + ((6vw * 360) / 1000));
        align-items: center;
        color: #FFFFFF;
        text-decoration: none;
    }
    & .droplink:hover {
        text-decoration: underline;
    }
    & .dropdown__list {
        display: flex;
        flex-direction: column;
        list-style: none;
        padding: 0;
    }
    & .dropdown__sections {
        display: none;
        list-style: none;
        background-color: #CCC;
        justify-content: space-around;   
        text-align: left;
        font-size: min(calc(10px + 3vw), 40px);
        position: absolute;
        z-index: 10;
        top: calc(40px + 2.65vw);
        left: 0;
        padding: 10px 0;
        margin: 0 auto;
        width: 100vw;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    }
    .dropdown__sections > li {
        margin: 10px;
    }
    .menu__item,
    .icon-logo-container,
    .search-avatar-icon-container {
        display: flex;
        align-items: center;
    }
    .search-avatar-icon-container {
        min-width: 40px;
        width: 9vw;
        justify-content: space-between;
    }

    & .menu__item--drop:hover .dropdown__sections {
        display: flex;

    }
    & .dropdown__sections--link {
        text-decoration: none;
        text-transform: uppercase;
        color: #000000;
        font-size: calc(6px + 2.5vw);
        font-weight: bold;
    }
    & .dropdown__products--link {
        text-decoration: none;
        color: #000000;
        font-size: calc(7px + 2vw);
    }
    .icon {
        width: calc(10px + ((6vw * 360) / 1000));
    }

    .user-infos-menu {
        display: flex;
        flex-direction: column;
        color: white;
        position: fixed;
        top: 45px;
        background-color: #222;
        width: 15%;
        right: 0;
        height: 70px;
        border-radius: 4px;
    }
    .user-infos-menu > * {
        margin: 0;
    }
`;
