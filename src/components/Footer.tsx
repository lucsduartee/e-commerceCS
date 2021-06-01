import styled from 'styled-components';
import facebook from '../img/facebook.svg'
import instagram from '../img/instagram.svg'


function Footer() {
  return(
    <FooterStyle> 
      <div className="icons">
        <img className="icons__facebook" src={facebook} />
        <img className="icons__instagram" src={instagram} />
      </div>
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