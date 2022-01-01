import React from 'react'
import styled from 'styled-components';
import { columnIt } from '../globalStyle';

const Li = styled.li`
    list-style: none;
    ${columnIt};
    width: 100%;
`

const Item = styled.div`
border: 1px solid white;
width: 100%;
height: 50px;
display: flex;
align-items: center;
justify-content: space-between;
padding: 5%;
`

const Span = styled.span``

const Input = styled.input`
    margin-right: 15px;
    border: none;
    border-radius: 2px;
`
const Button = styled.button`
        background: purple;
        color: white;
        border: 0;
        padding: 6px;
        border-radius: 5px;
        font-weight: 600;
        cursor: pointer;
`



const ToDoItem = ({id, title, completed}) => {
    return (
        <Li>
            <Item>
                <Span>
                    <Input 
                    type="checkbox" 
                    checked={completed}
                    />
                    {title}
                </Span>
                <Button>Delete</Button>
            </Item>
        </Li>
    )
}

export default ToDoItem
