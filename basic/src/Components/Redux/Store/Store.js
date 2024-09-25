import { createStore } from "redux";
import { reducer } from "../ProductReducer/Reducer";
export const Store=createStore(reducer,{})