import React, { Fragment, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

// import { View, Text } from "react-native";
import _ from "lodash";

const GlobalStyle = createGlobalStyle`
    body {
        padding:0;
        margin:0;
    }
`;

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f5f5;
`;

const BoldText = styled.h1`
  font-weight: 200;
  font-size: 104px;
  opacity: 0.3;
  margin: 16px;
`;

const TodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  border: 1px solid #bdc3c7;
  box-shadow: 3px 3px 8px;
`;

const TodoInput = styled.input`
  height: 64px;
  font-size: 24px;
  font-weight: 100;
  padding-left: 16px;
`;

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #bdc3c7;
  height: 72px;
  font-size: 24px;
  font-weight: 100;
`;

const TodoItem = ({ item }) => <Item>{item}</Item>;

const addTodoListData = (todoData, todoList, setFunction) => {
  const _todoList = _.cloneDeep(todoList);
  _todoList.push(todoData);
  setFunction(_todoList);
};

const keyDownHandler = (param, addTodoList, clearFunction) => {
  const keyType = param.key;
  if (keyType === "Enter") {
    addTodoList();
    clearFunction();
  }
};

const inputHandler = (param, setFunction) => {
  const inputedText = param.target.value;
  setFunction(inputedText);
};

export default () => {
  const [currentInputText, setCurrentInputText] = useState("");
  const [todoList, setTodoList] = useState([]);

  return (
    <Fragment>
      <GlobalStyle />
      <Container>
        <BoldText>todos</BoldText>
        <TodoContainer>
          <TodoInput
            type="text"
            placeholder="여기에 할일을 입력하세요"
            value={currentInputText}
            onChange={e => inputHandler(e, setCurrentInputText)}
            onKeyDown={e => keyDownHandler(e, () => addTodoListData(currentInputText, todoList, setTodoList), () => setCurrentInputText(""))}
          />
          {todoList.map((item, idx) => {
            return <TodoItem key={idx} item={item} />;
          })}
        </TodoContainer>
      </Container>
    </Fragment>
  );
};
