import {bind} from "./bind.js";
const { dispatch } = bind;

import action_creators from "./action_creators.js";
const {
  addTodo,
  setVisibilityFilter,
  completeTodo,
  toggleTodo,
} = action_creators;

var createTodo = function (text, assignee) {
  return {
    description: text,
    status: "NEW",
    action_by: assignee,
    id: "",
  };
};

//run
dispatch(addTodo(createTodo("Watch Movies", "user1")));
dispatch(addTodo(createTodo("Read Book", "user2")));
dispatch(addTodo(createTodo("Go Walk", "user1")));

dispatch(setVisibilityFilter("SHOW_ALL"));
dispatch(completeTodo(1));
dispatch(toggleTodo(1));
dispatch(toggleTodo(1));
dispatch(completeTodo(2));
dispatch(completeTodo(0));
dispatch(setVisibilityFilter("SHOW_COMPLETED"));
