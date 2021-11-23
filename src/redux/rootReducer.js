import { combineReducers } from "redux";
import { CHANGE_THEME, DECREMENT, DISABLE, ENABLE, INCREMENT } from "./types";

function counterReducer(state = 42, action) {
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        default:
            return state;
    }
}

function themeReducer(state = { value: "dark", disabled: false }, action) {
    switch (action.type) {
        case CHANGE_THEME:
            return action.payload;
        case DISABLE:
            return { ...state, disabled: true };
        case ENABLE:
            return { ...state, disabled: false };
        default:
            return state;
    }
}

export const rootReducer = combineReducers({
    counter: counterReducer,
    theme: themeReducer,
});
