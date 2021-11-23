import { INCREMENT, DECREMENT, CHANGE_THEME, DISABLE, ENABLE } from "./types";

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const changeTheme = newTheme => ({
    type: CHANGE_THEME,
    payload: newTheme,
});
export const enableButtons = () => ({ type: ENABLE });
export const disableButtons = () => ({ type: DISABLE });

export function asyncIncrement() {
    return function (dispatch) {
        dispatch(disableButtons());
        setTimeout(() => {
            dispatch({ type: INCREMENT });
            dispatch(enableButtons());
        }, 2000);
    };
}
