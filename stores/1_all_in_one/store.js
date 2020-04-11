//npm install redux
const redux = require("redux");
const { combineReducers, createStore } = redux;
//reducers
function visibilityFilter(state = "SHOW_ALL", action) {
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      return action.filter;
    default:
      return state;
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          text: action.text,
          completed: false,
        },
      ];
    case "TOGGLE_TODO":
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed,
          });
        }
        return todo;
      });
    case "COMPLETE_TODO":
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: true,
          });
        }
        return todo;
      });
    default:
      return state;
  }
}

//action creators
function addTodo(text) {
  return { type: "ADD_TODO", text };
}

function toggleTodo(index) {
  return { type: "TOGGLE_TODO", index };
}

function setVisibilityFilter(filter) {
  return { type: "SET_VISIBILITY_FILTER", filter };
}

function completeTodo(index) {
  return { type: "COMPLETE_TODO", index };
}

//bind
const reducer = combineReducers({ todos, visibilityFilter });
const store = createStore(reducer);

//listener
let onEvent = function () {
  console.log("store-event");
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
};
store.subscribe(onEvent);
//run
store.dispatch(addTodo("test1"));
store.dispatch(addTodo("test2"));
store.dispatch(addTodo("test3"));
store.dispatch(setVisibilityFilter("SHOW_ALL"));
store.dispatch(completeTodo(1));
store.dispatch(toggleTodo(1));
store.dispatch(toggleTodo(1));
store.dispatch(completeTodo(2));
store.dispatch(completeTodo(0));
store.dispatch(setVisibilityFilter("SHOW_COMPLETED"));

module.exports = {
  addTodo: addTodo,
  toggleTodo: toggleTodo,
  setVisibilityFilter: setVisibilityFilter,
  completeTodo: completeTodo,
};
