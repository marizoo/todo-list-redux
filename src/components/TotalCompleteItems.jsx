import React from 'react'
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Title = styled.h3`
align-self: start;
margin-left: 20px;
margin-top: 20px;
margin-bottom: 20px;
`

const TotalCompleteItems = () => {
    const completedTodos = useSelector((state) => 
    state.todos.filter( (todo) => todo.completed === true ));

    return (
        <Title>
            Total Complete Items : {completedTodos.length}
        </Title>
    )
}

export default TotalCompleteItems
