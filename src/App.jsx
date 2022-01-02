import React from 'react'
import styled from 'styled-components';
import AddToDoForm from './components/AddToDoForm';
import ToDoList from './components/ToDoList';
import TotalCompleteItems from './components/TotalCompleteItems';
import { columnIt } from './globalStyle';


const AppContainer = styled.div`
width: 100vw;
height: 100vh;
${columnIt};
align-items: center;
background: #1d1d1d;
color: white;
`

const Wrapper = styled.div`
  width: 400px;
  height: auto;
  border: 1px solid white;
  border-radius: 10px;
  ${columnIt};
  align-items: center;

  h1 {
    margin: 20px 0;
  }
`

const App = () => {
  return (
    <AppContainer>
        <Wrapper>
            <h1>Mz Todo List</h1>
            <AddToDoForm />
            <ToDoList />
            <TotalCompleteItems />
        </Wrapper>
    </AppContainer>
  )
}

export default App

// https://www.youtube.com/watch?v=fiesH6WU63I&t=1s
