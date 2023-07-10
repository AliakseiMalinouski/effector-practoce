import { createStore, createEvent } from "effector";

export type TodoType = {
    id: number
    title: string,
    status: boolean
}

export type TodosType = {
    todos: TodoType[];
}

export const addNewTodo = createEvent<TodoType>();

export const $todos = createStore<TodosType>({
    todos: []
});

$todos.on(addNewTodo, (state, newTodo) => {
    let flag = false;
    state.todos.forEach(elem => {
        if(elem.id === newTodo.id) flag = true;
    });
    if(!flag) state.todos.push(newTodo);
});

