import React from 'react';

const UsersListItem = ({ user, onRemovePressed, onUpdatePressed } : any) => {
    return(
        <div>
            <h2>{user.username}</h2>
            <h3>{user.email}</h3>
            <h4>{user.password}</h4>
            <h5>{user.products}</h5>
            <button
                onClick={() => onRemovePressed(user._id)}
            >
                remover usuário
            </button>
        </div>
    );
}

export default UsersListItem;