import { createSlice } from "@reduxjs/toolkit";

const init = {
    item : [],
    total:0
}
const saleslice = createSlice({
    name:'sale',
    initialState: init,
    reducers:{
        replaceProduct(state,action){
            state.item = action.payload.product
        }
    }
})

export default saleslice
export const saleSliceAction = saleslice.actions