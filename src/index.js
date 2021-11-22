import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
// import { createStore } from "./createStore";
import { rootReducer } from "./redux/rootReducer";
import {
    increment,
    decrement,
    asyncIncrement,
    changeTheme,
} from "./redux/actions";
import "./styles.css";

const counter = document.getElementById("counter");
const addBtn = document.getElementById("add");
const subBtn = document.getElementById("sub");
const asyncBtn = document.getElementById("async");
const themeBtn = document.getElementById("theme");

const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

addBtn.onclick = () => store.dispatch(increment());
subBtn.onclick = () => store.dispatch(decrement());
asyncBtn.onclick = () => store.dispatch(asyncIncrement());
themeBtn.onclick = () => {
    const newTheme = document.body.classList.contains("light")
        ? "dark"
        : "light";
    store.dispatch(changeTheme(newTheme));
};

store.subscribe(() => {
    const state = store.getState();
    console.log(state);
    counter.innerHTML = state.counter;
    document.body.className = state.theme;
});

store.dispatch({ type: "init" });
