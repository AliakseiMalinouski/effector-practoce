import React from "react";
import { TodoType } from "../effector/store/todos";
import { useMemo } from "react";
import { Todo } from "./Todo";

type TodoListProps = {
    todos: TodoType[];
}

export const TodoList: React.FC<TodoListProps> = ({todos}) => {

    let todosMemo = useMemo(() => todos.map(({id, title, status}) => <Todo key={id} title={title} status={status}/>), [todos]);

    return <ul>{todosMemo}</ul>
}