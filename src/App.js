import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList'

function App() {
  // State Stuff
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState("");
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  // Use Effect
  useEffect(()=>{
    getLocalTodos();
    }, []);

// Use Effect
  useEffect(()=>{
    filterHandler();
    saveLocalTodos();
    }, [todos, status]);


  //Functions
  const filterHandler = () => {
    switch(status){
      case "completed":
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default: 
      setFilteredTodos(todos)
      break;
      
    }
  }

  // save to Local
  const saveLocalTodos = () => {
      localStorage.setItem("todos", JSON.stringify(todos));
  }  
  
  const getLocalTodos = () => {
    if(localStorage.getItem("todos") === null){
      localStorage.setItem("todos", JSON.stringify([]));
    }else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  }
  return (
    <div className="App">
      <header>
        <h1>Jad's Todo List {inputText}</h1>
      </header>
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} status = {status} setStatus = {setStatus}/>
      <TodoList setTodos={setTodos} todos={todos} filteredTodos={filteredTodos} />
      <h3>{inputText}</h3>
    </div>
  );
}

export default App;
