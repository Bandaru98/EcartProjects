import {combineReducers} from 'redux'
import ProductReducer from '../Productreducer/ProductReducer'

export const reducer=combineReducers({productdata:ProductReducer})