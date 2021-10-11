import { configureStore } from '@reduxjs/toolkit'
import authslice from './authslice'
import saleslice from './saleslice'

const store = configureStore({
    reducer:{
        auth:authslice.reducer,
        sale:saleslice.reducer
    }
})

export default store