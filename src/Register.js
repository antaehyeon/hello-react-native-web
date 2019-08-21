import React, { Fragment } from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { Button, TextField } from "@material-ui/core";

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

const Input = styled(TextField)`
  width: 40vw;
  height: 40px;
`;

const ButtonContainer = styled.div`
  width: 42vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const CustomButton = styled(Button)`
  width: 40vw;
  height: 40px;
  top: 24px;
`;

const Register = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Container>
        <BoldText>register</BoldText>
        <Input required label="이메일" type="email" name="email" autoComplete="email" margin="normal" variant="outlined" />
        <Input required label="패스워드" type="password" autoComplete="current-password" margin="normal" variant="outlined" />
        <Input required label="닉네임" margin="normal" variant="outlined" />
        <CustomButton variant="contained" color="primary" href="/">
          회원가입하기
        </CustomButton>
      </Container>
    </Fragment>
  );
};

export default Register;
