import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addUserRequest } from '../redux-store/thunks';
import styled from 'styled-components';
import Header from '../components/Header';

const NewUserForm = ({ users, onCreatePressed } : any, { history } : any) => {
    const [inputUsername, setInputUsername] = useState('');
    const [inputEmail, setInputEmail] = useState('');
    const [inputPassword, setInputPassword] = useState('');

    return <NewuserFormStyle>
        <Header />
        <div className="content">
            <h1>Cadastro de Usuários</h1>
            <label> Nome de usuário
                <input
                    id="user"
                    className="user-field"
                    type="text"
                    value={inputUsername}
                    placeholder=""
                    onChange={(e => setInputUsername(e.target.value))}
                />
            </label>
            <label> Email
                <input
                    id="email"
                    className="email-field"
                    type="text"
                    value={inputEmail}
                    placeholder=""
                    onChange={(e => setInputEmail(e.target.value))}
                />
            </label>
            <label> Password
                <input
                    id="password"
                    className="password-field"
                    type="text"
                    value={inputPassword}
                    placeholder=""
                    onChange={(e => setInputPassword(e.target.value))}
                />
            </label>

            <button
                onClick={() => {
                    onCreatePressed(
                        inputUsername,
                        inputEmail,
                        inputPassword,
                        []
                    );
                    setInputUsername('');
                    setInputEmail('');
                    setInputPassword('');
                    window.alert("conta criada com sucesso");
                }}
            >
                Criar usuário
            </button>
        </div>    
    </NewuserFormStyle>;
}

const mapStateToProps = (state : any) => ({
    users: state.users
})

const mapDispatchToProps = (dispatch : any) => ({
    onCreatePressed: (username : string, email : string, password : string, products : any[]) => dispatch(addUserRequest(username, email, password, products))
})

export { NewUserForm };
export default connect(mapStateToProps, mapDispatchToProps)(NewUserForm);

const NewuserFormStyle = styled.div`

    .content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 60vw;
        min-width: 220px;
        max-width: 600px;
        height: 300px;
        margin: 10% auto 10% auto;
        padding: 15px;
        border: 2px solid #000;
        border-radius: 5px;
        box-shadow: 15px 15px 5px 5px rgba(0, 0, 0, 0.5);
    }

    h1 {
        text-align: center;
        font-size: 25px;
        font-weight: bold;
        margin-bottom: 10px;
    }

    .username-field,
    .email-field,
    .password-field,
    #user {
        display: block;
        width: 100%;
        padding: 5px 0;
        margin: 0 auto;
        border: 2px solid rgba(0, 0, 0, 0.3);
        border-radius: 2px;
    }  

    label {
        font-weight: bold;
    }

    button {
        background: #000;
        border: none;
        border-radius: 5px;
        box-shadow: 3px 3px 5px 1px rgba(0, 0, 0, 0.5);
        color: #FFF;
        font-weight: bold;
        padding: 3%;
    }


`;