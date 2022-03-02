//imports
import { BUY_PIZZA } from './type';

//reducer
const initialState = {
    numOfPizzas: 10,
}

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case BUY_PIZZA:
            return {
                ...state,
                numOfPizzas: state.numOfPizzas - 1,
            };

        default: return state;
    }
}

export default reducer;