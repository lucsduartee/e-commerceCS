import styled from 'styled-components';
import facebook from '../img/facebook.svg';
import instagram from '../img/instagram.svg';
import { Link } from 'react-router-dom';
import cart2 from '../img/cart2.svg';


function Footer() {
  return(
    <FooterStyle> 
      <div className="horizontal__line" />
      <div className="icons">
        <img className="icons__facebook" src={facebook} />
        <img className="icons__instagram" src={instagram} />
      </div>
      <Link className="shopping-cart__link" to="/"><img className="shopping-cart__icon" src={cart2} alt="" /></Link>
      <div className="footer__text">
        <p className="footer__text--item">IEEE Computer Society FEG UNESP</p>
        <p className="footer__text--item">Todos os direitos reservados</p>
      </div>
      
    </FooterStyle>
  );
};


export default Footer;

const FooterStyle = styled.div`
  width: 100vw;


  & .shopping-cart__icon {
    position: fixed;
    right: 10%;
    bottom: 5vh;
    width: 12vw;
    box-shadow: 5px 5px 20px rgba(230, 240, 240, 0.2);
    border-radius: 50%;
    z-index: 10;
   
  }

  & .horizontal__line {
    width: 100vw;
    border-bottom: 5px solid #000; 
    margin: 10px auto;
    
  }  

  @media screen and (max-width: 999px) {
    .horizontal__line {
      width: 90vw;
    }
    
  }

  & .icons {
    display: flex;
    align-items: center;
    justify-content: right;
    width: 90vw;
    margin: 5px auto;
  }

  & .icons__facebook, 
    .icons__instagram {
      width: 10vw;
      margin: 0 5px;
    }

  & .footer__text {
    color: #FFFFFF;
    width: 100vw;
    background: #000000;
    display:flex;
    flex-wrap: wrap;
    justify-content: space-around;
    font-size: calc(3px + ((6vw * 360) / 1000));
  }

  & .footer__text--item {
    margin: 5px;
  }




`;