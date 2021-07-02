import {
    loadProductsInProgress,
    loadProductsSuccess,
    loadProductsFailure,
    createProduct,
    removeProduct,
    updateProduct,
    loadUsersInProgress,
    loadUsersSuccess,
    loadUsersFailure,
    createUser,
    removeUser,
    updateUser,
    loadCurrentUserInProgress,
    loadCurrentUserSuccess,
    loadCurrentUserFailure,
    addProductToUser,
    updateProductAmount,
    removeProductFromUser
} from './actions';

export const loadProducts = () => async (dispatch : any, getState : any) => {
    try{
        dispatch(loadProductsInProgress());
        const response = await fetch('http://localhost:8080/api/products');
        const products = await response.json();

        dispatch(loadProductsSuccess(products));
    } catch(e : any){
        dispatch(loadProductsFailure());
        dispatch(displayAlert(e));
    }
}

export const displayAlert = (text : string) => () => {
    alert(text);
}

export const loadUsers = () => async (dispatch : any, getState : any) => {
    try{
        dispatch(loadUsersInProgress());
        const response = await fetch('http://localhost:8080/api/users');
        const users = await response.json();

        dispatch(loadUsersSuccess(users));
    } catch(e : any){
        dispatch(loadUsersFailure());
        dispatch(displayAlert(e));
    }
}

export const loadCurrentUser = (username : string) => async (dispatch : any, getState : any) => {
    try{
        if(username){
            dispatch(loadCurrentUserInProgress());
            const response = await fetch(`http://localhost:8080/api/users/${username}/products`);
            const products = await response.json();

            console.log(products);
            console.log('from thunks');

            dispatch(loadCurrentUserSuccess(products));
        }
    } catch(e : any){
        dispatch(loadCurrentUserFailure());
        dispatch(displayAlert(e));
    }
}

export const addProductRequest = (title : string, description : string, price : string, stockAmount : number, category1 : string, category2: string, image1 : string, image2 : string ) => async (dispatch : any) => {
    try{
        const body = JSON.stringify({ title, description, price, stockAmount, category1, category2, image1, image2 });
        const response = await fetch('http://localhost:8080/api/products', {
            headers: {
                'Content-type': 'application/json',
            },
            method: 'post',
            body
        })
        const product = await response.json();
        dispatch(createProduct(product));
        console.log(body);
        console.log(product);
    } catch(e : any){
        dispatch(displayAlert(e));
    }
}

export const removeProductRequest = (id : any) => async (dispatch : any) => {
    try{
        const response = await fetch(`http://localhost:8080/api/products/${id}`, {
            method: 'delete'
        });
        const removedProduct = await response.json();
        dispatch(removeProduct(removedProduct));
    } catch(e : any){
        dispatch(displayAlert(e));
    }
}

export const updateProductRequest = (id : any) => async (dispatch : any) => {
    try{
        const response = await fetch(`http://localhost:8080/api/products/${id}`, {
            method: 'patch'
        });
        const updatedProduct = await response.json();
        dispatch(updateProduct(updatedProduct));
    } catch(e : any){
        dispatch(displayAlert(e));
    }
}

export const addUserRequest = (username : string, email : string, password: string, products : any[]) => async (dispatch : any) => {
    try{
        const body = JSON.stringify({username, email, password, products});
        const response = await fetch('http://localhost:8080/api/users', {
            headers: {
                'Content-type': 'application/json',
            },
            method: 'post',
            body
        })
        const user = await response.json();
        dispatch(createUser(user));
        console.log(body);
        console.log(user);
    } catch(e : any){
        dispatch(displayAlert(e));
    }
}

export const removeUserRequest = (id : any) => async (dispatch : any) => {
    try{
        const response = await fetch(`http://localhost:8080/api/users/${id}`, {
            method: 'delete'
        });
        const removedUser = await response.json();
        dispatch(removeUser(removedUser));
    } catch(e : any){
        dispatch(displayAlert(e));
    }
}

export const updateUserRequest = (id : any) => async (dispatch : any) => {
    try{
        const response = await fetch(`http://localhost:8080/api/users/${id}`, {
            method: 'patch'
        });
        const updatedUser = await response.json();
        dispatch(updateUser(updatedUser));
    } catch(e : any){
        dispatch(displayAlert(e));
    }
}






export const addProductToUserRequest = (userId : any, productId : any) => async (dispatch : any) => {
    try{
        const response = await fetch(`http://localhost:8080/api/users/${userId}/products/${productId}`, {
            method: 'post'
        });
        const product = await response.json();
        const response2 = await fetch(`http://localhost:8080/api/users/${userId}`, {
            method: 'get'
        });
        const user = await response2.json();
        dispatch(addProductToUser(user, product))
    }catch(e : any){
        dispatch(displayAlert(e));
    }
}

export const updateProductAmountRequest = (userId : any, productId : any, amount : any) => async (dispatch : any) => {
    try{
        const response = await fetch(`http://localhost:8080/api/users/${userId}/products/${productId}/${amount}`, {
            method: 'put'
        });
        const product = await response.json();
        const response2 = await fetch(`http://localhost:8080/api/users/${userId}`, {
            method: 'get'
        });
        const user = await response2.json();

        console.log(user, product, amount, 'from thunks');

        dispatch(updateProductAmount(user, product, amount));
    }catch(e : any){
        dispatch(displayAlert(e));
    }
}

export const removeProductFromUserRequest = (userId : any, productId : any) => async (dispatch : any) => {
    try{
        const response = await fetch(`http://localhost:8080/api/users/${userId}/products/${productId}`, {
            method: 'delete'
        });
        const product = await response.json();

        const response2 = await fetch(`http://localhost:8080/api/users/${userId}`, {
            method: 'get'
        });
        const user = await response2.json();
        dispatch(removeProductFromUser(user, product))
    }catch(e : any){
        dispatch(displayAlert(e));
    }
}