import {configureStore} from '@reduxjs/toolkit'
import pizzaReducer from '../features/pizzaSlice'

export const store = configureStore({
    reducer:{
        pizza: pizzaReducer
    }
})

export type rootState = ReturnType<typeof store.getState>
export type appDispatch = typeof store.dispatch