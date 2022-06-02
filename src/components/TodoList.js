import React from "react";
import Todo from './Todo';


const TodoList = ({todos, setTodos, filteredTodos}) => {
    return(
        <div className="todo-container">
            <ul className="todo-list">
                { (filteredTodos) && 
                   filteredTodos.map(todo => 
                    <Todo todo={todo} setTodos={setTodos} todos={todos} todoText = {todo.text} key ={todo.id}/>
                    )}
            </ul>
        </div>
    );
}

export default TodoList;