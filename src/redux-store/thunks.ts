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
        const response = await fetch('');
        const products = await response.json();

        dispatch(loadProductsSuccess(products));
    } catch(e){
        dispatch(loadProductsFailure());
        dispatch(displayAlert(e));
    }
}

export const displayAlert = (text : string) => () => {
    alert(text);
}

export const addProductRequest = (id : any, title : string, description : string, price : string, stockAmount : number) => async (dispatch : any) => {
    try{
        const body = JSON.stringify({ id, title, description, price });
        const response = await fetch('http://localhost:8080/products', {
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

export const removeProductRequest = (id : any) => async (dispatch : any) => {
    try{
        const response = await fetch(`/${id}`, {
            method: 'delete'
        });
        const removedProduct = await response.json();
        dispatch(removeProduct(removedProduct));
    } catch(e){
        dispatch(displayAlert(e));
    }
}

export const updateProductRequest = (id : any) => async (dispatch : any) => {
    try{
        const response = await fetch(`http://localhost:8080/products/${id}`, {
            method: 'post'
        });
        const updatedProduct = await response.json();
        dispatch(updateProduct(updatedProduct));
    } catch(e){
        dispatch(displayAlert(e));
    }
}
