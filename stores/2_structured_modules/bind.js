import redux from 'redux';
import {reducers} from './reducers.js';

const {combineReducers, createStore} = redux;

const {todos, visibilityFilter} = reducers;

//bind
const reducer = combineReducers({todos, visibilityFilter});
const store = createStore(reducer);

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
        todos.filter((todo) => todo.completed).length,
        "todo",
        todos.filter((todo) => !todo.completed).length
    );
    console.log("--------------------------");
    console.log();
};
store.subscribe(onEvent);
const dispatch = store.dispatch;
export {dispatch};
