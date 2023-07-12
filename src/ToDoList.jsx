import { useState } from "react";
import { TodoItem } from "./ToDoItem";
export function ToDoList({todos , toggleTodo, deleteTodo}){
    return(
        <ul className="list">
        {todos.length === 0 && "No Todo"}
        {todos.map(todo => {
            return(
                <TodoItem 
                completed={todo.completed}
                id={todo.id}
                title={todo.title}
                key={todo.id}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
                />
            )
        })} 
    </ul>
    )
}