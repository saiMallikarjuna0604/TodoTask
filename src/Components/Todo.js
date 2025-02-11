import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, isCompleted, deleteTodo } from '../reducer';
import './styles.css'

const TodoList = () => {

    const [text, setText] = useState('')
    const dispatch = useDispatch()
    const getTodoList = useSelector((state) => state?.listOfTodos)

   

    const handleChange = (e) => {
        setText(e.target.value)

    }

    const handleAddTodo = () => {

        if (text.trim() !== '') {
            const newTodo = { todo: text, id: Date.now(), completed: false };
            const updatedTodos = [...getTodoList, newTodo];
            dispatch(addTodo(updatedTodos));
            setText('');
        }

    };


    const handleComplete = (id) => {
        const updatedTodos = getTodoList?.map((todo) =>
            todo?.id === id
                ? { ...todo, completed: !todo.completed } 
                : todo
        );
        dispatch(isCompleted(updatedTodos));
    };


    const handleDelTodo = (id) => {

        const updatedTodos = getTodoList.filter((todo) => todo.id !== id);
        dispatch(deleteTodo(updatedTodos));
    };



    return (
        <div className="App">
            <div className="todo-input">
                <input
                    type="text"
                    name="todo"
                    onChange={handleChange}
                    value={text}
                    placeholder="Add a new task"
                />
                <button onClick={handleAddTodo}>Add Todo</button>
            </div>

            <div className="todo-list">
                {getTodoList?.length > 0 ? (
                    getTodoList?.map((todo) => (
                        <div
                            key={todo.id}
                            className={`todo-item ${todo?.completed ? 'completed' : ''}`}
                        >
                            <span onClick={() => handleComplete(todo.id)}>
                                {todo?.todo}
                            </span>
                            <button onClick={() => handleDelTodo(todo?.id)} className="delete-btn">
                                Delete
                            </button>
                        </div>
                    ))
                ) : (
                    <p>No Todos yet!</p>
                )}
            </div>
        </div>
    )
}
export default TodoList