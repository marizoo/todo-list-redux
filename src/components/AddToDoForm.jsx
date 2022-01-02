import React, {useState} from 'react'
import styled from 'styled-components';
import { columnIt } from '../globalStyle';
import { useDispatch } from 'react-redux';
import { addTodoAsync } from '../redux/todoSlice'

const AddForm = styled.form`
${columnIt};
width: 90%;

input {
    height: 30px;
    background: transparent;
    border: 1px solid white;
    color: white;
    padding-left: 20px;
    border-radius: 10px;
    font-weight: 500;
    font-size: 16px;
}

button {
    padding: 3px;
    width: 25%;
    background: purple;
    color: white;
    border: 0;
    border-radius: 10px;
    font-weight: 500;
    font-size: 16px;
    margin: 15px 0;
    cursor: pointer;
}

`

const AddToDoForm = () => {
    const [value, setValue] = useState('')

    const dispatch = useDispatch();

    const onSubmit = (ev) => {
        ev.preventDefault();
        dispatch(
            addTodoAsync({
            title: value,
        }))
    }

    return (
        <AddForm onSubmit={onSubmit}>
            <input 
                type="text" 
                placeholder="Add todo..."
                value={value}
                onChange={(ev) => setValue(ev.target.value)}
            />
            <button type="submit">Submit</button> 
        </AddForm>
    )
}

export default AddToDoForm
