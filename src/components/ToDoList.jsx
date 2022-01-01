import React from 'react'
import styled from 'styled-components'
import ToDoItem from './ToDoItem'

const UL =styled.ul`
    width: 90%;
`


const ToDoList = () => {

    const todos = [
        {id: 1, title: 'todo1', completed: false},
        {id: 2, title: 'todo2', completed: false},
        {id: 3, title: 'todo3', completed: true},
        {id: 4, title: 'todo4', completed: false},
        {id: 5, title: 'todo5', completed: false},
    ]

    return (
        <UL>
            {todos.map( (todo) => (
                <ToDoItem 
                    key={todo.id}
                    id={todo.id}
                    title={todo.title}
                    completed={todo.completed}
                />
            ) )}
        </UL>
    )
}

export default ToDoList
