import {
    CREATE_PRODUCT,
    REMOVE_PRODUCT,
    UPDATE_PRODUCT,
    LOAD_PRODUCTS_IN_PROGRESS,
    LOAD_PRODUCTS_SUCCESS,
    LOAD_PRODUCTS_FAILURE,
    CREATE_USER,
    REMOVE_USER,
    UPDATE_USER,
    LOAD_USERS_IN_PROGRESS,
    LOAD_USERS_SUCCESS,
    LOAD_USERS_FAILURE,
    ADD_PRODUCT_TO_USER,
    REMOVE_PRODUCT_FROM_USER,
    LOAD_USER_PRODUCTS_IN_PROGRESS,
    LOAD_USER_PRODUCTS_SUCCESS,
    LOAD_USER_PRODUCTS_FAILURE
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

export const usersLoading = (state = false, action : any) => {
    const { type } = action;

    switch(type){
        case LOAD_USERS_IN_PROGRESS: {
            return true;
        }
        case LOAD_USERS_SUCCESS: {
            return false;
        }
        case LOAD_USERS_FAILURE: {
            return false;
        }
        default: {
            return state;
        }
    }
}

export const products = (state : any = [], action : any) => {
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

export const users = (state : any = [], action : any) => {
    const { type, payload } = action;

    switch(type){
        case CREATE_USER: {
            const { user } = payload;
            return state.concat(user);
        }
        case REMOVE_USER: {
            const { user: userToRemove } = payload;
            return state.filter((user : any) => {
                return user._id !== userToRemove._id;
            })
        }
        case UPDATE_USER: {
            const { user: updatedUser } = payload;
            return state.map((user: any) => {
                if(user._id === updatedUser._id) {
                    return updatedUser;
                }
                return user;
            })
        }
        default: {
            return state;
        }
    }
}

export const userProductsLoading = (state = false, action : any) => {
    const { type } = action;

    switch(type){
        case LOAD_USER_PRODUCTS_IN_PROGRESS: {
            return true;
        }
        case LOAD_USER_PRODUCTS_SUCCESS: {
            return false;
        }
        case LOAD_USER_PRODUCTS_FAILURE: {
            return false;
        }
        default: {
            return state;
        }
    }
}

export const userProducts = (state : any = [], action : any) => {
    const { type, payload } = action;

    switch(type){
        case LOAD_USER_PRODUCTS_SUCCESS: {
            const { products } = payload;
            return products;
        }
        case ADD_PRODUCT_TO_USER: {
            const { user, product } = payload;
            return state
        }
        case REMOVE_PRODUCT_FROM_USER: {
            const { product : productToRemove } = payload;
            return state.filter((product : any) => {
                return product._id !== productToRemove._id;
            })
        }
        default: {
            return state;
        }
    }
}