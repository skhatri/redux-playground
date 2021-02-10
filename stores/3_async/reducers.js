//npm install redux

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
    console.log("received TODO ", action.type);
    switch (action.type) {
        case "ADD_TODO":
            return [...state, action.data];
            break;
        case "TOGGLE_TODO":
            return state.map((todo, index) => {
                if (index === action.index) {
                    let newStatus = todo.status === "DONE" ? "NEW" : "DONE";
                    return Object.assign({}, todo, {
                        status: newStatus,
                    });
                }
                return todo;
            });
        case "COMPLETE_TODO":
            return state.map((todo, index) => {
                if (index === action.index) {
                    console.log("completing", todo.text);
                    return Object.assign({}, todo, {
                        status: "DONE",
                    });
                }
                return todo;
            });
        default:
            return state;
    }
}

export {todos, visibilityFilter};
