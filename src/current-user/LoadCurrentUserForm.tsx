import React, { useState } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { loadCurrentUser } from '../redux-store/thunks';

const LoadCurrentUserForm = ({ startLoadingCurrentUser } : any) => {
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
            <button onClick={()=>startLoadingCurrentUser(username)}>carregar</button>
        </>
    );
}

const mapStateToProps = (state : any) => ({
    currentUser: state.currentUser
})

const mapDispatchToProps = (dispatch : any) => ({
    startLoadingCurrentUser: (username : string) => dispatch(loadCurrentUser(username)),
})

export { LoadCurrentUserForm };
export default connect(mapStateToProps, mapDispatchToProps)(LoadCurrentUserForm);