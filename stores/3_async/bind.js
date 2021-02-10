import {combineReducers, createStore, applyMiddleware} from "redux";
import {todos, visibilityFilter} from "./reducers.js";

//bind
const reducer = combineReducers({todos, visibilityFilter});
const middleware = applyMiddleware();
const store = createStore(reducer, middleware);

//listener
let onEvent = function () {
    console.log("---received-store-event---");
    let visibilityState = store.getState()["visibilityFilter"];
    console.log("visibility state", visibilityState);
    let todos = store.getState()["todos"];

    console.log(
        "number of todos",
        todos.length,
        "completed",
        todos.filter((todo) => todo.status === "DONE").length,
        "todo",
        todos.filter((todo) => todo.status !== "DONE").length
    );
    todos.forEach((todo) => console.log(todo));
    console.log("--------------------------");
    console.log();
};
store.subscribe(onEvent);
const bind = {
    dispatch: store.dispatch,
};
export {bind};

console.log("waiting for 3 seconds");
setTimeout(function () {
    onEvent();
    console.log("done!");
}, 3000);
