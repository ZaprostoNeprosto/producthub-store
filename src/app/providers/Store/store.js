import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = JSON.parse(localStorage.getItem('state')) || {
    cart: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const existingProduct = state.cart.find(
                (product) => product.id === action.payload.id,
            );
            if (existingProduct) {
                // immer makes this immutable
                existingProduct.quantity += 1;
            } else {
                // immer makes this immutable
                state.cart.push({ ...action.payload, quantity: 1 });
            }
            localStorage.setItem('state', JSON.stringify(state));
        },
        removeProduct: (state, action) => {
            const index = state.cart.findIndex(
                (product) => product.id === action.payload.id,
            );
            // immer makes this immutable
            state.cart.splice(index, 1);
            localStorage.setItem('state', JSON.stringify(state));
        },
    },
});

const store = configureStore({
    reducer: cartSlice.reducer,
});

const { addProduct, removeProduct } = cartSlice.actions;

const cartCountSelector = (state) => {
    return state.cart.reduce((total, product) => total + product.quantity, 0);
};

const cartValueSelector = (state) => {
    return state.cart.reduce((total, product) => total + product.price * product.quantity, 0);
};

export {
    store,
    addProduct,
    removeProduct,
    cartCountSelector,
    cartValueSelector,
};
