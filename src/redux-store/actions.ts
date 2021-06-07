export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export const createProduct = (product : any) => ({
    type: CREATE_PRODUCT,
    payload: { product }
});

export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const removeProduct = (product : any) => ({
    type: REMOVE_PRODUCT,
    payload: { product }
});

export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const updateProduct = (product : any) => ({
    type: UPDATE_PRODUCT,
    payload: { product }
});

export const LOAD_PRODUCTS_IN_PROGRESS = 'LOAD_PRODUCTS_IN_PROGRESS';
export const loadProductsInProgress = () => ({
    type: LOAD_PRODUCTS_IN_PROGRESS
});

export const LOAD_PRODUCTS_SUCCESS = 'LOAD_PRODUCTS_SUCCESS';
export const loadProductsSuccess = (products : any) => ({
    type: LOAD_PRODUCTS_SUCCESS,
    payload: { products }
});

export const LOAD_PRODUCTS_FAILURE = 'LOAD_PRODUCTS_FAILURE';
export const loadProductsFailure = () => ({
    type: LOAD_PRODUCTS_FAILURE
});
