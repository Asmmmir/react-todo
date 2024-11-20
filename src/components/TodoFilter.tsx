import { useState } from "react"
import { Todo } from "./TodoList"

interface FilterProps {
    todo: Todo[]
    filterActiveTodo: () => void
    filterAllTodo: () => void
    filterCompletedTodo: () => void
    clearCompletedTodo: () => void
}


const TodoFilter: React.FC<FilterProps> = ({ todo, filterActiveTodo, filterAllTodo, filterCompletedTodo, clearCompletedTodo }) => {

    const [active, setActive] = useState('All')

    const handleFilterActive = () => {
        filterActiveTodo()
        setActive('active')
    }

    const handleCompleted = () => {
        filterCompletedTodo()
        setActive('completed')
    }

    const handleAllTodos = () => {
        filterAllTodo()
        setActive('all')
    }

    const handleClearCompleted = () => {
        clearCompletedTodo()
    }



    return (
        <div className='filter'>
            <div className="filter__amount">
                {todo.filter(todo => !todo.checked).length} items left
            </div>
            <div className='filter__actions'>
                <button className={active == 'all' ? 'active' : ''} onClick={handleAllTodos}>All</button>
                <button className={active == 'active' ? 'active' : ''} onClick={handleFilterActive}>Active</button>
                <button className={active == 'completed' ? 'active' : ''} onClick={handleCompleted}>Completed</button>
            </div>
            <div className='filter__actions'>
                <button onClick={handleClearCompleted}>Clear completed</button>
            </div>
        </div>
    )
}

export default TodoFilter