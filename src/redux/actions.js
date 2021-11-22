import { INCREMENT, DECREMENT, CHANGE_THEME } from "./types";

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const changeTheme = newTheme => ({
    type: CHANGE_THEME,
    payload: newTheme,
});

export function asyncIncrement() {
    return function (dispatch) {
        setTimeout(() => dispatch({ type: INCREMENT }), 1000);
    };
}
