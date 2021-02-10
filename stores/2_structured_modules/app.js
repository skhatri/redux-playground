import {shared} from './action_creators.js';
import {dispatch} from './bind.js';

const {
    addTodo,
    setVisibilityFilter,
    completeTodo,
    toggleTodo,
} = shared;

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
