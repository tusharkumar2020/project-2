import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [], // Initialize items as an empty array
    },
    reducers: {
        addItem: (state, action) => {
            const product = action.payload;
            const existingItem = state.items.find((item) => item.name === product.name);
            if (existingItem) {
                existingItem.quantity += product.quantity;
            } else {
                state.items.push({ ...product, quantity: product.quantity || 1 });
            }
        },
        removeItem: (state, action) => {
        },
        updateQuantity: (state, action) => {


        },
    },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
