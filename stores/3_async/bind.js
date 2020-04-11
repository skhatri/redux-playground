const redux = require("redux");
const { combineReducers, createStore, applyMiddleware } = redux;

const reducers = require("./reducers");
const { todos, visibilityFilter } = reducers;

const thunk = require("redux-thunk").default;
const reduxPromise = require("redux-promise-middleware").default;

//bind
const reducer = combineReducers({ todos, visibilityFilter });
const store = createStore(reducer, applyMiddleware(thunk, reduxPromise));

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

module.exports = {
  dispatch: store.dispatch,
};

console.log("waiting for 3 seconds");
setTimeout(function () {
  onEvent();
  console.log("done!");
}, 3000);
