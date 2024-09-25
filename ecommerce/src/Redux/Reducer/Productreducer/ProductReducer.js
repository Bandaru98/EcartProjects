const initialState = {
    cartdata: [],
}

export default (state = initialState, action) => {
    switch (action.type) {

        case 'ADD_TO_CART':
            const finditem = state.cartdata.find((item) => {
                return item.id === action.payload.id
            })
            if (finditem) {
                finditem.quantity = finditem.quantity + 1;
                return { ...state, cartdata: [...state.cartdata] }
            } else {
                action.payload.quantity = 1
                return {
                    ...state, cartdata: [...state.cartdata, action.payload]
                }
            }

        case 'REMOVE_FROM_CART':
            const removeitem = state.cartdata.filter((item) => {
                return item.id !== action.payload
            })

            return { ...state, cartdata: removeitem }

        case 'DECREMENT_QUANTITY':
            const decrementitem = state.cartdata.find((item) => {
                return item.id === action.payload
            })
            decrementitem.quantity = decrementitem.quantity > 1 ? decrementitem.quantity - 1 : 1
            return {
                ...state, cartdata: [...state.cartdata]
            }

        default:
            return state
    }
}
