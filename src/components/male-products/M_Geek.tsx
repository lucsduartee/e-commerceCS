import ProductsByCategory from '../ProductsByCategory';

function M_Geek() {
    return(
        <div className="section__products">
            <ProductsByCategory category1="male" category2="geek" />
        </div>
    );
}

export default M_Geek;