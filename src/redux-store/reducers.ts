import {
    CREATE_PRODUCT,
    REMOVE_PRODUCT,
    UPDATE_PRODUCT,
    LOAD_PRODUCTS_IN_PROGRESS,
    LOAD_PRODUCTS_SUCCESS,
    LOAD_PRODUCTS_FAILURE
} from './actions';

export const isLoading = (state = false, action : any) => {
    const { type } = action;

    switch(type){
        case LOAD_PRODUCTS_IN_PROGRESS: {
            return true;
        }
        case LOAD_PRODUCTS_SUCCESS: {
            return false;
        }
        case LOAD_PRODUCTS_FAILURE: {
            return false;
        }
        default: {
            return state;
        }
    }
}

export const products = (state = [], action : any) => {
    const { type, payload } = action;

    switch(type){
        case CREATE_PRODUCT: {
            const { product } = payload;
            return state.concat(product);
        }
        case REMOVE_PRODUCT: {
            const { product: productToRemove } = payload;
            return state.filter((product : any) => {
                return product._id !== productToRemove._id;
            })
        }
        case UPDATE_PRODUCT: {
            const { product: updatedProduct } = payload;
            return state.map((product: any) => {
                if(product._id === updatedProduct._id) {
                    return updatedProduct;
                }
                return product;
            })
        }
        case LOAD_PRODUCTS_SUCCESS: {
            const { products } = payload;
            return products;
        }
        default: {
            return state;
        }
    }
}