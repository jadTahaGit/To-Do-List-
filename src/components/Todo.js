import React from "react";
import '../App.css';

const Todo= ({todoText,todos,setTodos,todo}) =>{
    // Events
    const deleteHandler = () => {
        setTodos(todos.filter(el => el.id !== todo.id));
    };
    const completeHandler = () => {
        setTodos(todos.map( item => {
            if(item.id === todo.id){
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }));
    }
    

    return(
        <div className="todo container">
            <li className={`todo-item ${todo.completed ? "completed" : "" }`}>{todoText}</li>
            <button onClick={completeHandler} className="complete-btn" type="submit">
                <svg width="24" height="24" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>           
             </button>
            <button onClick={deleteHandler} className="trash-btn" type="submit">
                <svg width="24" height="24" viewBox="0 0 24 24"><path d="M3 6l3 18h12l3-18h-18zm19-4v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.316c0 .901.73 2 1.631 2h5.711z"/></svg>      
           </button>
        </div> 
    );
}

export default Todo;