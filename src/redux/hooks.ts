import { TypedUseSelectorHook } from "react-redux";
import { rootState, appDispatch } from "./store";
import { useSelector, useDispatch } from "react-redux";

export const useAppSelector: TypedUseSelectorHook<rootState> = useSelector
export const useAppDispatch = () => useDispatch<appDispatch>()