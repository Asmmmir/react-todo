import React, { FormEvent, useState } from 'react';
import Todo from './Todo';
import TodoFilter from './TodoFilter';

export interface Todo {
    id: number;
    title: string;
    checked: boolean;
}

const TodoList: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [filteredTodos, setFilteredTodos] = useState<Todo[]>([]);
    const [newTodo, setNewTodo] = useState<string>('');

    const addNewTodo = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (newTodo.trim()) {
            const newTodos = [
                ...todos,
                {
                    id: Date.now(),
                    title: newTodo,
                    checked: false
                }
            ];
            setTodos(newTodos);
            setFilteredTodos(newTodos);
            setNewTodo('');
        }
    };

    const toggleTodo = (id: number) => {
        const newTodos = todos.map(todo =>
            todo.id === id ? { ...todo, checked: !todo.checked } : todo
        );
        setTodos(newTodos);
        setFilteredTodos(newTodos);
    };

    const filterActiveTodo = () => {
        setFilteredTodos(todos.filter(todo => !todo.checked));
    };

    const filterAllTodo = () => {
        setFilteredTodos(todos);
    };

    const filterCompletedTodo = () => {
        setFilteredTodos(todos.filter(todo => todo.checked));
    };

    const clearCompletedTodo = () => {
        const newTodos = todos.filter(todo => !todo.checked);
        setTodos(newTodos);
        setFilteredTodos(newTodos); 
    };

    return (
        <div className='todolist'>
            <h1 className='todolist__title'>todos</h1>
            <div className='todolist__wrapper'>
                <form className='todolist__form' onSubmit={addNewTodo} role='form'>
                    <i className='fa-solid fa-chevron-down'></i>
                    <input
                    onChange={e => setNewTodo(e.target.value)}
                    className='todolist__add'
                    placeholder='What needs to be done?'
                    value={newTodo}
                    />
                </form>
                {filteredTodos.map((todo) => (
                    <Todo
                        key={todo.id}
                        title={todo.title}
                        id={todo.id}
                        checked={todo.checked}
                        toggleTodo={toggleTodo}
                    />
                ))}
                <TodoFilter todo={todos} filterActiveTodo={filterActiveTodo} filterAllTodo={filterAllTodo} filterCompletedTodo={filterCompletedTodo} clearCompletedTodo={clearCompletedTodo} />
            </div>
        </div>
    );
};

export default TodoList;
