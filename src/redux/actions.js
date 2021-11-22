import { INCREMENT, DECREMENT } from "./types";

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });

export function asyncIncrement() {
    return function (dispatch) {
        setTimeout(() => dispatch({ type: INCREMENT }), 1000);
    };
}
