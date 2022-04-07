import { DECERMENT, INCERMENT } from "./actionTypes";

function increment(n) {
    return {
        type: INCERMENT,
        payload: n
    };
};

function decrement(n) {
    return {
        type: DECERMENT,
        payload: n
    };
}

export { increment, decrement };