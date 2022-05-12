import { createSlice } from '@reduxjs/toolkit';

export const marketSlice = createSlice({
    name: 'market',
    initialState: {
        products: []
    }, 
    reducers: {
        addProduct: (state, action) => {
            state.products.push(action.payload);
        }
    }
})

export const { addProduct } = marketSlice.actions

export default marketSlice.reducer