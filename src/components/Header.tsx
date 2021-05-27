import styled from 'styled-components';
import logomenu from '../img/logomenu.svg';
import lupa from '../img/lupa.svg';
import perfil from '../img/perfil.svg';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <HeaderStyle>   
            <div className="cabecalho">
                <div className="icon-logo-container">
                    <Link to="/"><img className="menu__logo" src={logomenu} alt="Logomarca da loja"/></Link>
                </div>
                <ul className="menu__navigation">
                    <li className="menu__item">
                        <Link to="/" className="menu__link">Home</Link>
                    </li>
                    <li className="menu__item menu__item--drop">
                    <Link to="/" className="droplink">Estilo</Link>
                        <ul className="dropdown__sections">
                            <li><Link to="/pages/female" className="dropdown__sections--link">Feminino</Link>
                                <ul className="dropdown__list">
                                    <li className="dropdown__products--item"><Link to="/" className="dropdown__products--link">Bermudas e Shorts</Link></li>
                                    <li className="dropdown__products--item"><Link to="/" className="dropdown__products--link">Blusas e Camisetas</Link></li>
                                    <li className="dropdown__products--item"><Link to="/" className="dropdown__products--link">Suéters</Link></li>
                                    <li className="dropdown__products--item"><Link to="/" className="dropdown__products--link">Calçados</Link></li>
                                    <li className="dropdown__products--item"><Link to="/" className="dropdown__products--link">Camisas</Link></li>
                                    <li className="dropdown__products--item"><Link to="/" className="dropdown__products--link">Conjuntos</Link></li>
                                    <li className="dropdown__products--item"><Link to="/" className="dropdown__products--link">Moda Íntima</Link></li>
                                    <li className="dropdown__products--item"><Link to="/" className="dropdown__products--link">Moda Praia</Link></li>
                                    <li className="dropdown__products--item"><Link to="/" className="dropdown__products--link">Esportivo</Link></li>
                                    <li className="dropdown__products--item"><Link to="/" className="dropdown__products--link">Saias</Link></li>
                                    <li className="dropdown__products--item"><Link to="/" className="dropdown__products--link">Curve {'&'} Plus Size</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/pages/male" className="dropdown__sections--link">Masculino</Link> 
                                <ul className="dropdown__list">
                                    <li className="dropdown__products--item"><Link to="/" className="dropdown__products--link">Bermudas e Shorts</Link></li>
                                    <li className="dropdown__products--item"><Link to="/" className="dropdown__products--link">Blusas e Suéters</Link></li>
                                    <li className="dropdown__products--item"><Link to="/" className="dropdown__products--link">Calças</Link></li>
                                    <li className="dropdown__products--item"><Link to="/" className="dropdown__products--link">Calçados</Link></li>
                                    <li className="dropdown__products--item"><Link to="/" className="dropdown__products--link">Camisas e Camisetas</Link></li>
                                    <li className="dropdown__products--item"><Link to="/" className="dropdown__products--link">Casacos e Jaquetas</Link></li>
                                    <li className="dropdown__products--item"><Link to="/" className="dropdown__products--link">Cuécas</Link></li>
                                    <li className="dropdown__products--item"><Link to="/" className="dropdown__products--link">Moda Praia</Link></li>
                                    <li className="dropdown__products--item"><Link to="/" className="dropdown__products--link">Polos</Link></li>
                                    <li className="dropdown__products--item"><Link to="/" className="dropdown__products--link">Geek</Link></li>
                                    <li className="dropdown__products--item"><Link to="/" className="dropdown__products--link">Plus Size</Link></li>
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
                        <Link to="/" className="menu__link">Ofertas</Link>
                    </li>

                    <li className="search-avatar-icon-container">
                        <Link to="/"><img className="icon icon__search" src={lupa} alt="pesquisa"/></Link>
                        <Link to="/"><img className="icon icon__perfil" src={perfil} alt="avatar"/></Link>
                    </li>
                </ul>
            </div>
        </HeaderStyle>
    );
}

const HeaderStyle = styled.div`
    width: 100vw;
   
    & .cabecalho {
        display: flex;
        width: 100vw;
        overflow: hidden;
        background-color: #000000;
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
    }
    & .dropdown__sections {
        display: none;
        background-color: #CCC;
        justify-content: space-around;   
        text-align: left;
        font-size: min(calc(10px + 3vw), 40px);
        position: absolute;
        z-index: 1;
        top: calc(40px + 3vw);
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
`;

export default Header;