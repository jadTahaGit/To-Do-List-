import React from "react";

const Form = ({inputText,setInputText, todos, setTodos, status, setStatus})=>{
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, {text: inputText, completed: false, id: Math.random()*1000}
        ]);
        setInputText("");
    }
    const statusHandler = (e) => {
        setStatus(e.target.value);
    }
    return(
        <form>
            <div className="input-box">
                <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
                
                <button onClick = {submitTodoHandler} className="todo-btn" type="submit">
                    <svg viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/></svg>
                </button>
            </div>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo classic">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>       
    )
}

export default Form;