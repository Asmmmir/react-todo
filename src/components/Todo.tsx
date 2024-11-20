interface TodoProps {
    title: string,
    id: number,
    checked: boolean
    toggleTodo: (id: number) => void;
  }
  

const Todo:React.FC<TodoProps> = ({title,id,checked, toggleTodo}) => {
  
  const handleCheckTodo = () => {
    toggleTodo(id);
  }
  
    return (
    <div data-testid={`todo-${id}`} className="todo">
       <input onChange={handleCheckTodo} id={title} className="todo__checkbox" type="checkbox" checked={checked} />
       <label className={checked ? 'checked' : ''} htmlFor={title}>{title}</label>
    </div>
  )
}

export default Todo