import React from 'react'
import { useSelector } from 'react-redux'


const Todos = () => {

    const todos = useSelector(state => state.todos)
    console.log(todos)

    return (
        <>
        <div>Todos</div>
        {todos.map((todo) => (
            <div key={todo.id}> 
                <h1>{todo.text}</h1>
            </div>
        ))}
        </>
    )
}

export default Todos 