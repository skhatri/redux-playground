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

export const shared = {
  addTodo: addTodo,
  toggleTodo: toggleTodo,
  setVisibilityFilter: setVisibilityFilter,
  completeTodo: completeTodo,
};
