import { DECERMENT, INCERMENT } from '../actions/actionTypes';

let initialState = 0;

function counterReducer(state = 0, action) {
    switch (action.type) {
        case INCERMENT:
            return state + action.payload;
        case DECERMENT:
            return state - action.payload;
        default:
            return state
    }
};

export default counterReducer;