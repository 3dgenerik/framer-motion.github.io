import React, { useEffect } from 'react';
import { addBase } from './pizzaSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { rootState } from '../redux/store';

export const Pizza: React.FC = () => {
    const {pizza} = useAppSelector((state:rootState) => state.pizza)
    const dispatch = useAppDispatch()

    useEffect(()=>{
        dispatch(addBase("Margarita"))
        dispatch(addBase("Quatro"))
    }, [])

    console.log(pizza);
    
    return(
        <>
            {/* <h1>{pizza}</h1> */}
        </>
    )
}
