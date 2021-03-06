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



export const CREATE_USER = 'CREATE_USER';
export const createUser= (user: any) => ({
    type: CREATE_USER,
    payload: { user }
});

export const REMOVE_USER = 'REMOVE_USER';
export const removeUser = (user: any) => ({
    type: REMOVE_USER,
    payload: { user }
});

export const UPDATE_USER = 'UPDATE_USER';
export const updateUser = (user: any) => ({
    type: UPDATE_USER,
    payload: { user }
});

export const LOAD_USERS_IN_PROGRESS = 'LOAD_USERS_IN_PROGRESS';
export const loadUsersInProgress = () => ({
    type: LOAD_USERS_IN_PROGRESS
});

export const LOAD_USERS_SUCCESS = 'LOAD_USERS_SUCCESS';
export const loadUsersSuccess = (users : any) => ({
    type: LOAD_USERS_SUCCESS,
    payload: { users }
});

export const LOAD_USERS_FAILURE = 'LOAD_USERS_FAILURE';
export const loadUsersFailure = () => ({
    type: LOAD_USERS_FAILURE
});






export const LOAD_CURRENT_USER_IN_PROGRESS = 'LOAD_CURRENT_USER_IN_PROGRESS';
export const loadCurrentUserInProgress = () => ({
    type: LOAD_CURRENT_USER_IN_PROGRESS
});

export const LOAD_CURRENT_USER_SUCCESS = 'LOAD_CURRENT_USER_SUCCESS';
export const loadCurrentUserSuccess = (products : any) => ({
    type: LOAD_CURRENT_USER_SUCCESS,
    payload: { products }
});

export const LOAD_CURRENT_USER_FAILURE = 'LOAD_CURRENT_USER_FAILURE';
export const loadCurrentUserFailure = () => ({
    type: LOAD_CURRENT_USER_FAILURE
});

export const ADD_PRODUCT_TO_USER = 'ADD_PRODUCT_TO_USER';
export const addProductToUser = (user : any, product : any) => ({
    type: ADD_PRODUCT_TO_USER,
    payload: { user, product }
})

export const UPDATE_PRODUCT_AMOUNT = 'UPDATE_PRODUCT_AMOUNT';
export const updateProductAmount = (user : any, product : any, amount : any) => ({
    type: UPDATE_PRODUCT_AMOUNT,
    payload: { user, product, amount }
})

export const REMOVE_PRODUCT_FROM_USER = 'REMOVE_PRODUCT_FROM_USER';
export const removeProductFromUser = (user : any, product : any) => ({
    type: REMOVE_PRODUCT_FROM_USER,
    payload: { user, product }
})