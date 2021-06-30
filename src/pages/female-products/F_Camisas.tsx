import ProductsByCategory from '../../components/ProductsByCategory';

function F_Camisas() {
    return(
        <div className="section__products">
            <ProductsByCategory category1="female" category2="camisas" />
        </div>
    );
}

export default F_Camisas;