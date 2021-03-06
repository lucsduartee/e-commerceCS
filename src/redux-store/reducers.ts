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
    LOAD_CURRENT_USER_IN_PROGRESS,
    LOAD_CURRENT_USER_SUCCESS,
    LOAD_CURRENT_USER_FAILURE,
    UPDATE_PRODUCT_AMOUNT
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

export const currentUserLoading = (state = false, action : any) => {
    const { type } = action;

    switch(type){
        case LOAD_CURRENT_USER_IN_PROGRESS: {
            return true;
        }
        case LOAD_CURRENT_USER_SUCCESS: {
            return false;
        }
        case LOAD_CURRENT_USER_FAILURE: {
            return false;
        }
        default: {
            return state;
        }
    }
}

export const currentUser = (state : any = {}, action : any) => {
    const { type, payload } = action;

    (Object as any).filter = function(obj : any, predicate : any) {
        let result : any = {}, key : any;

        for(key in obj) {
            if(obj.hasOwnProperty(key) && !predicate(obj[key])){
                result[key] = obj[key];
            }
        }
        return result;
    }

    switch(type){
        case LOAD_CURRENT_USER_SUCCESS: {
            const { products } = payload;
            return products;
        }
        case ADD_PRODUCT_TO_USER: {
            const { user, product : productAdded } = payload;
            const products = state.products;
            const updatedProducts = products.concat(() => productAdded)
            return {...state, products: updatedProducts}
        }
        case UPDATE_PRODUCT_AMOUNT: {
            const { user, product : updatedProduct, amount} = payload;
            const products = state.products;
            const filteredProducts = products.filter((product : any) => product._id !== updatedProduct._id);
            const updatedProducts = filteredProducts.concat(updatedProduct)
            return {...state, products: updatedProducts}
        }
        case REMOVE_PRODUCT_FROM_USER: {
            const { user, product : productToRemove } = payload;

            const products = state.products;
            const filteredProducts = products.filter((product : any) => {
                return product._id !== productToRemove._id;
            })

            // return state.products.filter((product : any) => {
            //     return product._id !== productToRemove._id;
            // })
            return {...state, products: filteredProducts};
        }
        default: {
            return state;
        }
    }
}