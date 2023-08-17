import TodoItem from "./TodoItem";
/* eslint-disable */
const TodoList = ({todoProps,handleChange,delTodo,setUpdate}) => {
    return (
        <ul>
        {todoProps.map(item => (
            <TodoItem key={item.id} itemProp={item} handleChange={handleChange} delTodo={delTodo} setUpdate={setUpdate}/>
        ))}
    </ul>
    );
};
export default TodoList;