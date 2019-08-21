import React, { Fragment } from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import Button from "@material-ui/core/Button";

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }
`;

const Container = styled.div`
  height: 100vh;
  background-color: ${props => props.theme.backgroundColor};
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const BoldText = styled.h1`
  font-weight: 200;
  font-size: 104px;
  opacity: 0.3;
  margin: 16px;
`;

const Input = styled.input`
  width: 40vw;
  height: 40px;
  padding-left: 24px;
  border: none;
  border: solid 1px #ccc;
  border-radius: 10px;
`;

const LoginButton = styled(Button)`
  width: 42vw;
  height: 40px;
`;

const Login = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Container>
        <BoldText>todos</BoldText>
        <Input type="text" placeholder="이메일을 입력하세요" />
        <Input type="text" placeholder="패스워드를 입력하세요" style={{ marginTop: 16, marginBottom: 16 }} />
        <LoginButton variant="contained" color="primary" href="/launch">
          로그인
        </LoginButton>
      </Container>
    </Fragment>
  );
};

export default Login;
