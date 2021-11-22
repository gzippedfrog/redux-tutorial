import { INCREMENT, DECREMENT, CHANGE_THEME } from "./types";

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const changeTheme = () => ({ type: CHANGE_THEME });

export function asyncIncrement() {
    return function (dispatch) {
        setTimeout(() => dispatch({ type: INCREMENT }), 1000);
    };
}
