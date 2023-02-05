import React, { useEffect, useState } from 'react';
import { addBase, addTopping } from './pizzaSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { rootState } from '../redux/store';

export const Pizza: React.FC = () => {
    const {pizza} = useAppSelector((state:rootState) => state.pizza)
    const dispatch = useAppDispatch()

    const [pizzaText, setPizzaText] = useState<string>('')
    const [toppingText, setToppingText] = useState<string>('')


    const onPizzaTextChange = (e: React.FormEvent<HTMLInputElement>) =>{
        e.preventDefault()
        setPizzaText(e.currentTarget.value)
    }

    const onToppingTextChange = (e: React.FormEvent<HTMLInputElement>) =>{
        e.preventDefault()
        setToppingText(e.currentTarget.value)
    }
    
    console.log(pizza);
    return(
        <>
            <h1>Pizza: </h1>
            <input type="text" onChange = {(e) => onPizzaTextChange(e)}/>
            <input type="text" onChange = {(e) => onToppingTextChange(e)}/>

            <button onClick={()=>dispatch(addBase(pizzaText))}>ADD PIZZA</button>
            <button onClick={()=>dispatch(addTopping(toppingText))}>ADD TOPPING</button>
            
        </>
    )
}
