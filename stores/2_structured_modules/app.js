const bind = require("./bind.js");
const { dispatch } = bind;

const action_creators = require("./action_creators");
const {
  addTodo,
  setVisibilityFilter,
  completeTodo,
  toggleTodo,
} = action_creators;

//run
dispatch(addTodo("test1"));
dispatch(addTodo("test2"));
dispatch(addTodo("test3"));
dispatch(setVisibilityFilter("SHOW_ALL"));
dispatch(completeTodo(1));
dispatch(toggleTodo(1));
dispatch(toggleTodo(1));
dispatch(completeTodo(2));
dispatch(completeTodo(0));
dispatch(setVisibilityFilter("SHOW_COMPLETED"));
