import styled from 'styled-components';
import logomenu from '../img/logomenu.svg';
import lupa from '../img/lupa.svg';
import perfil from '../img/perfil.svg';


function Header() {
    return (
        <HeaderStyle>   
            <div className="cabecalho">
                <a href="#"><img className="menu__logo" src={logomenu} alt="Logomarca da loja"/></a>
                <ul className="menu__navigation">
                    <li className="menu__item">
                        <a href="#" className="menu__link">Home</a>
                    </li>
                    <li className="menu__item menu__item--drop">
                        <a href="#" className="dropbtn">Estilo</a>
                        <ul className="dropdown__sections">
                            <li><a className="dropdown__sections--link" href="#">Feminino</a>
                                <ul className="dropdown__list">
                                    <li className="dropdown__products--item"><a href="#" className="dropdown__products--link">Bermudas e Shorts</a></li>
                                    <li className="dropdown__products--item"><a href="#" className="dropdown__products--link">Blusas e Camisetas</a></li>
                                    <li className="dropdown__products--item"><a href="#" className="dropdown__products--link">Suéters</a></li>
                                    <li className="dropdown__products--item"><a href="#" className="dropdown__products--link">Calçados</a></li>
                                    <li className="dropdown__products--item"><a href="#" className="dropdown__products--link">Camisas</a></li>
                                    <li className="dropdown__products--item"><a href="#" className="dropdown__products--link">Conjuntos</a></li>
                                    <li className="dropdown__products--item"><a href="#" className="dropdown__products--link">Moda Íntima</a></li>
                                    <li className="dropdown__products--item"><a href="#" className="dropdown__products--link">Moda Praia</a></li>
                                    <li className="dropdown__products--item"><a href="#" className="dropdown__products--link">Esportivo</a></li>
                                    <li className="dropdown__products--item"><a href="#" className="dropdown__products--link">Saias</a></li>
                                    <li className="dropdown__products--item"><a href="#" className="dropdown__products--link">Curve & Plus Size</a></li>
                                </ul>
                            </li>
                            <li><a className="dropdown__sections--link" href="#">Masculino</a> 
                                <ul className="dropdown__list">
                                    <li className="dropdown__products--item"><a href="#" className="dropdown__products--link">Bermudas e Shorts</a></li>
                                    <li className="dropdown__products--item"><a href="#" className="dropdown__products--link">Blusas e Suéters</a></li>
                                    <li className="dropdown__products--item"><a href="#" className="dropdown__products--link">Calças</a></li>
                                    <li className="dropdown__products--item"><a href="#" className="dropdown__products--link">Calçados</a></li>
                                    <li className="dropdown__products--item"><a href="#" className="dropdown__products--link">Camisas e Camisetas</a></li>
                                    <li className="dropdown__products--item"><a href="#" className="dropdown__products--link">Casacos e Jaquetas</a></li>
                                    <li className="dropdown__products--item"><a href="#" className="dropdown__products--link">Cuécas</a></li>
                                    <li className="dropdown__products--item"><a href="#" className="dropdown__products--link">Moda Praia</a></li>
                                    <li className="dropdown__products--item"><a href="#" className="dropdown__products--link">Polos</a></li>
                                    <li className="dropdown__products--item"><a href="#" className="dropdown__products--link">Geek</a></li>
                                    <li className="dropdown__products--item"><a href="#" className="dropdown__products--link">Plus Size</a></li>
                                </ul>
                            </li>    
                            <li><a className="dropdown__sections--link" href="#">Acessórios</a>
                                <ul className="dropdown__list">
                                    <li className="dropdown__products--item"><a href="#" className="dropdown__products--link">Mochilas</a></li>
                                    <li className="dropdown__products--item"><a href="#" className="dropdown__products--link">Bolsas</a></li>
                                    <li className="dropdown__products--item"><a href="#" className="dropdown__products--link">Nécessaires</a></li>
                                    <li className="dropdown__products--item"><a href="#" className="dropdown__products--link">Cintos</a></li>
                                    <li className="dropdown__products--item"><a href="#" className="dropdown__products--link">Óculos</a></li>
                                    <li className="dropdown__products--item"><a href="#" className="dropdown__products--link">Colares</a></li>
                                    <li className="dropdown__products--item"><a href="#" className="dropdown__products--link">Pulseiras</a></li>
                                    <li className="dropdown__products--item"><a href="#" className="dropdown__products--link">Anéis</a></li>
                                    <li className="dropdown__products--item"><a href="#" className="dropdown__products--link">Bijuterias</a></li>
                                    <li className="dropdown__products--item"><a href="#" className="dropdown__products--link">Relógios</a></li>
                                    <li className="dropdown__products--item"><a href="#" className="dropdown__products--link">Chapéus</a></li>
                                </ul>
                            </li>
                        </ul>                        
                    </li>
                
                    <li className="menu__item">
                        <a href="#" className="menu__link">Ofertas</a>
                    </li>

                    <li><a href="#"><img className="icon__search" src={lupa}/></a></li>

                    <li><a href=""><img className="icon__perfil" src={perfil}/></a></li>
                </ul>
            </div>
{/* 
            <div className="dropdown">
                <ul className="dropdown__sections">
                    <li><a className="dropdown__sections--link" href="#">Feminino</a>
                        <ul className="dropdown__list">
                            <li className="dropdown__products"><a href="#" className="dropdown__products">asdfsdf</a></li>
                            <li className="dropdown__products"><a href="#" className="dropdown__products">asdfsdf</a></li>
                            <li className="dropdown__products"><a href="#" className="dropdown__products">asdfsdf</a></li>
                            <li className="dropdown__products"><a href="#" className="dropdown__products">asdfsdf</a></li>
                            <li className="dropdown__products"><a href="#" className="dropdown__products">asdfsdf</a></li>
                        </ul>
                    </li>
                    <li><a className="dropdown__sections--link" href="#">Masculino</a> 
                        <ul className="dropdown__list">
                            <li className="dropdown__products"><a href="#" className="dropdown__products">asdfsdf</a></li>
                            <li className="dropdown__products"><a href="#" className="dropdown__products">asdfsdf</a></li>
                            <li className="dropdown__products"><a href="#" className="dropdown__products">asdfsdf</a></li>
                            <li className="dropdown__products"><a href="#" className="dropdown__products">asdfsdf</a></li>
                            <li className="dropdown__products"><a href="#" className="dropdown__products">asdfsdf</a></li>
                        </ul>
                    </li>    
                    <li><a className="dropdown__sections--link" href="#">Acessórios</a>
                        <ul className="dropdown__list">
                            <li className="dropdown__products"><a href="#" className="dropdown__products">asdfsdf</a></li>
                            <li className="dropdown__products"><a href="#" className="dropdown__products">asdfsdf</a></li>
                            <li className="dropdown__products"><a href="#" className="dropdown__products">asdfsdf</a></li>
                            <li className="dropdown__products"><a href="#" className="dropdown__products">asdfsdf</a></li>
                            <li className="dropdown__products"><a href="#" className="dropdown__products">asdfsdf</a></li>
                        </ul>
                    </li>
                </ul>
            </div>        */}
        </HeaderStyle>
    );
}

const HeaderStyle = styled.div`

    width: 100vw;
   
    
    & .cabecalho {
        display: flex;
        background-color: #000000;
    }

    & .menu__logo {
        display: inline;
        margin-left: 10px;
        padding-top: 15px;
        padding-bottom: 15px;
    }

    & .menu__navigation {
        display: flex;
        flex-grow: 1;
        justify-content: space-around;
        padding-top: 20px;
        text-align: center;   
    }

      
    & .menu__link {
        color: #FFFFFF;
        font-size: 17px;
        text-decoration: none;
    }

    & .menu__link:hover {
        text-decoration: underline;
    }

    & .dropbtn{
        display: inline-block;
        font-size: 17px;
        align-: center;
        color: #FFFFFF;
        text-decoration: none;
    }
    
    & .dropbtn:hover {
        text-decoration: underline;

    }

    & .dropdown__list {
        display: flex;
        flex-direction: column;
    }

    & .dropdown__sections {
        display: none;
        background-color: #BBB;
        justify-content: space-around;   
        text-align: center;
        position: absolute;
        z-index: 1;
        top: 65px;
        left: 0;
        padding: 10px 0;
        margin: 0 auto;
        width: 100vw;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        transform: rotateX(-90deg);
        transform-origin: top center;
        transition: all 3s;
    }

    & .menu__item--drop:hover .dropdown__sections {
        display: flex;
        transform: rotateX(0);
    }

    & .dropdown__sections--link {
        text-decoration: none;
        text-transform: uppercase;
        color: #000000;
        font-size: 16px;
        font-weight: bold;
    }

    & .dropdown__products--link {
        text-decoration: none;
        color: #000000;
        font-size: 12px;
    }



    
  

`;

export default Header;