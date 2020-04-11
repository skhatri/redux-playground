const axios = require("axios").default;

async function saveItem(item) {
  const res = await axios
    .post("http://localhost:8080/todo/", JSON.stringify(item), {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => res.data)
    .then((payload) => payload.data);
  return res;
}

//action creators
function addTodo(item) {
  return {
    type: "ADD_TODO",
    data: saveItem(item),
  };
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

module.exports = {
  addTodo: addTodo,
  toggleTodo: toggleTodo,
  setVisibilityFilter: setVisibilityFilter,
  completeTodo: completeTodo,
};
