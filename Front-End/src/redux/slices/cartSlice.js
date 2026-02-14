import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = state.find(item => item.id === action.payload.id);
            if (item) {
                item.quantity++;
            } else {
                state.push({ ...action.payload, quantity: 1 });
            }
        },
        removeFromCart: (state, action) => {
            return state.filter(item => item.id !== action.payload);
        },
        incrementQuantity: (state, action) => {
            const item = state.find(item => item.id === action.payload);
            if (item) {
                item.quantity++;
            }
        },
        decrementQuantity: (state, action) => {
            const item = state.find(item => item.id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity--;
            }
        },
        clearCart: () => initialState
    }
});

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
