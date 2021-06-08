import {
    loadProductsInProgress,
    loadProductsSuccess,
    loadProductsFailure,
    createProduct,
    removeProduct,
    updateProduct
} from './actions';

export const loadProducts = () => async (dispatch : any, getState : any) => {
    try{
        dispatch(loadProductsInProgress());
        const response = await fetch('http://localhost:8080/api/products', {
            method: 'get'
        });
        const products = await response.json();
        console.log(products);
        console.log('from thunks');
        dispatch(loadProductsSuccess(products));
    } catch(e){
        dispatch(loadProductsFailure());
        dispatch(displayAlert(e));
    }
}

export const displayAlert = (text : string) => () => {
    alert(text);
}

export const addProductRequest = (title : string, description : string, price : string, stockAmount : number) => async (dispatch : any) => {
    try{
        const body = JSON.stringify({ title, description, price, stockAmount });
        const response = await fetch('http://localhost:8080/api/products', {
            headers: {
                'Content-type': 'application/json',
            },
            method: 'post',
            body
        })
        const product = await response.json();
        dispatch(createProduct(product));
    } catch(e){
        dispatch(displayAlert(e));
    }
}

export const removeProductRequest = (_id : any) => async (dispatch : any) => {
    try{
        const response = await fetch(`http://localhost:8080/api/products/${_id}`, {
            method: 'delete'
        });
        const removedProduct = await response.json();
        dispatch(removeProduct(removedProduct));
    } catch(e){
        dispatch(displayAlert(e));
    }
}

export const updateProductRequest = (_id : any) => async (dispatch : any) => {
    try{
        const response = await fetch(`http://localhost:8080/api/products/${_id}`, {
            method: 'patch'
        });
        const updatedProduct = await response.json();
        dispatch(updateProduct(updatedProduct));
    } catch(e){
        dispatch(displayAlert(e));
    }
}
