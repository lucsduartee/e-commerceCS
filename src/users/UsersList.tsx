import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import UsersListItem from './UsersListItem';
import Header from '../components/Header';
import NewUserForm from './NewUserForm';
import { loadUsers, removeUserRequest } from '../redux-store/thunks';

const UsersList = ({ users=[], onRemovePressed, usersLoading, startLoadingUsers } : any) => {
    useEffect(() => {
        startLoadingUsers();
    }, [startLoadingUsers]);

    const loadingMessage = <div>carregando usuários</div>;

    const content = (
        <div>
            <NewUserForm />
            {
                users.map((user : any) => 
                    <UsersListItem
                        user={user}
                        key={user._id}
                        onRemovePressed={onRemovePressed}
                    />
                )
            }
        </div>
    );

    return (
        <>
            <Header />
            {usersLoading ? loadingMessage : content}
        </>
    );
}

const mapStateToProps = (state : any) => ({
    usersLoading: state.usersLoading,
    users: state.users
})

const mapDispatchToProps = (dispatch : any) => ({
    startLoadingProducts: () => dispatch(loadUsers()),
    onRemovePressed: (id : string) => dispatch(removeUserRequest(id))
})

export { UsersList };
export default connect(mapStateToProps, mapDispatchToProps)(UsersList);