import { ACTION_TYPE }  from '../Type/Actiontype'

export const addToCart = (product) => {
    return {type:ACTION_TYPE.ADD_TO_CART,payload:product}
}
export const removeFromCart = (id) => {
    return {type:ACTION_TYPE.REMOVE_FROM_CART,payload:id}
}
export const decrementquantity = (id) => {
    return {type:ACTION_TYPE.DECREMENT_QUANTITY,payload:id}
}