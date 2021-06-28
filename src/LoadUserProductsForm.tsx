import React, { useState } from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';
import { loadUserProducts } from './redux-store/thunks';

const LoadUserProductsForm = ({ startLoadingUserProducts } : any) => {
    const [username, setUsername] = useState('');

    return(
        <>
            <Header />
            <input
                type="text"
                placeholder="username"
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
            >
            </input>
            <button onClick={()=>startLoadingUserProducts(username)}>carregar</button>
        </>
    );
}

const mapStateToProps = (state : any) => ({
    userProducts: state.userProducts
})

const mapDispatchToProps = (dispatch : any) => ({
    startLoadingUserProducts: (username : string) => dispatch(loadUserProducts(username)),
})

export { LoadUserProductsForm };
export default connect(mapStateToProps, mapDispatchToProps)(LoadUserProductsForm);