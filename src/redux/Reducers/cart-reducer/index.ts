import { createSlice } from '@reduxjs/toolkit'
import {CartItem} from "../../../shared/types/list-products-type";

export interface CartState {
    cart: CartItem[],
    count: number,
    total: number
}

const initialState: CartState = {
    cart: [],
    count: 0,
    total: 0
}

export const cartSlice = createSlice({
    name: 'cartReducer',
    initialState,
    reducers: {
        addCartAction: (state, action) => {
            const product = action.payload;
            const productInCart = { ...product };
            const productItem = state.cart.find(item => item.id === productInCart.id && item.color === productInCart.color && item.version === productInCart.version);
            if (productItem) {
                productItem.amount = productItem.amount + productInCart.amount;
                state.count = state.count + productInCart.amount;
                state.total = state.total + (productInCart.price * productInCart.amount);
            } else {
                state.cart.push(productInCart)
                state.count = state.count + productInCart.amount;
                state.total = state.total + (productInCart.price * productInCart.amount);
            }
        },

        deleteCartAction: (state, action) => {
            const product = action.payload;
            const productInCart = { ...product };
            state.cart = state.cart.filter(item => (item.id !== productInCart.id || item.color !== productInCart.color || item.version !== productInCart.version));
            state.count = state.count - productInCart.amount;
            state.total = state.total - (productInCart.price * productInCart.amount);
        },

        increaseAmountProduct: (state, action) => {
            const product = action.payload;
            const productInCart = { ...product };
            const productItem = state.cart.find(item => item.id === productInCart.id && item.color === productInCart.color && item.version === productInCart.version);
            if (productItem) {
                productItem.amount = productItem.amount + 1;
            }
            state.count = state.count + 1;
            state.total = state.total + productInCart.price;
        },

        decreaseAmountProduct: (state, action) => {
            const product = action.payload;
            const productInCart = { ...product };
            const productItem = state.cart.find(item => item.id === productInCart.id && item.color === productInCart.color && item.version === productInCart.version);
            if (productItem) {
                productItem.amount = productItem.amount - 1;
            }
            state.count = state.count - 1;
            state.total = state.total - productInCart.price;
        },
    },
})

export const { addCartAction, deleteCartAction, increaseAmountProduct, decreaseAmountProduct } = cartSlice.actions

export default cartSlice.reducer