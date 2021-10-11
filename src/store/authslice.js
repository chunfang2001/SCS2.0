import { createSlice } from "@reduxjs/toolkit";

const init = {
    token:null,
    email:null,
    admin:false
}

const authslice = createSlice({
    name:'auth',
    initialState: init,
    reducers:{
        setToken(state,action){
            state.token = action.payload.token
            state.email = action.payload.email
        },
        removeToken(state){
            state.token = null
            state.email = null
        },
        setAdmin(state){
            state.admin = true
        },
        removeAdmin(state){
            state.admin = false
        }
    }
})

export default authslice
export const authSliceAction = authslice.actions