import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface IInitialState{
    pizza:{
        base:string,
        topping:string[]
    }
}

const initialState: IInitialState = {
    pizza: {
        base: '',
        topping: []
    }
}

const pizzaSlice = createSlice({
    name:'pizza',
    initialState,
    reducers:{
        addBase: (state, action:PayloadAction<string>) => {
            state.pizza = {...state.pizza, base:action.payload}
        },

        addTopping:(state, action:PayloadAction<string>) => {

        }

    }
})

export default pizzaSlice.reducer
export const {addBase} = pizzaSlice.actions
