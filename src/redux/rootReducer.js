import { combineReducers } from "redux";
import { CHANGE_THEME, DECREMENT, INCREMENT } from "./types";

function counterReducer(state = 0, action) {
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        default:
            return state;
    }
}

function themeReducer(state = { value: "light" }, action) {
    switch (action.type) {
        case CHANGE_THEME:
            return { ...state, value: "dark" };
        default:
            return state;
    }
}

export const rootReducer = combineReducers({
    counter: counterReducer,
    theme: themeReducer,
});
