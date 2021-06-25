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
