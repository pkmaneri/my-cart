export const reducer = (state, action) => {
    if (action.type === "REMOVEITEM") {
        return {
            ...state,
            item: state.item.filter((curEle) => {
                return curEle.id !== action.payload;
            })
        }
    }
    if (action.type === "INCREMENT") {
        let updateCart = state.item.map((curEle) => {
            if (curEle.id === action.payload) {
                return { ...curEle, quantity: curEle.quantity + 1 }
            }
            return curEle;
        });
        return { ...state, item: updateCart }
    }
    if (action.type === "DECREMENT") {
        let updateCart = state.item.map((curEle) => {
            if (curEle.id === action.payload) {
                return { ...curEle, quantity: curEle.quantity - 1 }
            }
            return curEle;
        })
        return { ...state, item: updateCart }

    }
    if (action.type === "CLEARCART") {
        return {
            ...state, item: []
        }
    }
    return state

}