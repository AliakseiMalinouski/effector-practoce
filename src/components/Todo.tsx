import React from "react";

interface TodoPropsI{
    title: string,
    status: boolean
}

export const Todo: React.FC<TodoPropsI> = ({title, status}) => {
    return (
        <li>
            <h3>{title}</h3>
            <input type="checkbox" checked={status}/>
        </li>
    )
}