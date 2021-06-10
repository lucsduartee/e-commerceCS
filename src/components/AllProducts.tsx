import styled from 'styled-components';
import CardMedium from './CardMedium';
import ProductItem1_img1 from '../img/produtos/feminino/bermudas-e-shorts/item1-img1.webp';
import ProductItem1_img2 from '../img/produtos/feminino/bermudas-e-shorts/item1-img2.webp';
import ProductItem2_img1 from '../img/produtos/feminino/bermudas-e-shorts/item2-img1.webp';
import ProductItem2_img2 from '../img/produtos/feminino/bermudas-e-shorts/item2-img2.webp';
import ProductItem3_img1 from '../img/produtos/feminino/bermudas-e-shorts/item3-img1.webp';
import ProductItem3_img2 from '../img/produtos/feminino/bermudas-e-shorts/item3-img2.webp';
import ProductItem4_img1 from '../img/produtos/feminino/blusas-e-camisetas/item1-img1.webp';
import ProductItem4_img2 from '../img/produtos/feminino/blusas-e-camisetas/item1-img2.webp';
import ProductItem5_img1 from '../img/produtos/feminino/blusas-e-camisetas/item2-img1.webp';
import ProductItem5_img2 from '../img/produtos/feminino/blusas-e-camisetas/item2-img2.webp';
import ProductItem6_img1 from '../img/produtos/feminino/blusas-e-camisetas/item3-img1.webp';
import ProductItem6_img2 from '../img/produtos/feminino/blusas-e-camisetas/item3-img2.webp';

function AllProducts(){
    return(
        <AllProductsStyle>
            <CardMedium image1={ProductItem1_img1} image2={ProductItem1_img2} description1="teste" description2="teste" preco="R$ 89.90" />
            <CardMedium image1={ProductItem2_img1} image2={ProductItem2_img2} description1="teste" description2="teste" preco="R$ 89.90" />
            <CardMedium image1={ProductItem3_img1} image2={ProductItem3_img2} description1="teste" description2="teste" preco="R$ 89.90" />
            <CardMedium image1={ProductItem4_img1} image2={ProductItem4_img2} description1="teste" description2="teste" preco="R$ 89.90" />
            <CardMedium image1={ProductItem5_img1} image2={ProductItem5_img2} description1="teste" description2="teste" preco="R$ 89.90" />
            <CardMedium image1={ProductItem6_img1} image2={ProductItem6_img2} description1="teste" description2="teste" preco="R$ 89.90" />
        </AllProductsStyle>
    );
}

export default AllProducts;

const AllProductsStyle = styled.div`
    display: grid;
    width: 80vw;
    margin-left: 10vw;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: .5rem;
`;