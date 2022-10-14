import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  max-width: 550px;
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoginButtons = styled.ul`
  margin-top: 70px;
  display: flex;
  width: 100%;

  & > li {
    width: 50%;
  }

  & > li > button {
    width: 100%;
    border: 1px solid #c4c4c4;
    border-bottom: 0;
    border-radius: 10px 10px 0 0;
    text-align: center;
    height: 60px;
  }
`;

const CheckedLoginButton = styled.button`
  background: #f2f2f2;
  border-bottom: 1px solid #c4c4c4;
`;

const LoginForm = styled.form`
  padding: 35px;
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid #c4c4c4;
  border-top: 0;
`;

const LoginInput = styled.input`
  padding: 20px 0;
  border: 0;
  border-bottom: 1px solid #c4c4c4;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  box-sizing: border-box;

  &::placeholder {
    color: #c4c4c4;
  }
`;

const ErrorMessageBox = styled.p`
  margin: 26px 0 -10px;
  color: #eb5757;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
`;

const LoginSubmitButton = styled.button`
  background-color: #21bf48;
  border-radius: 5px;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
  padding: 19px 0;
  margin-top: 36px;
`;

const LoginSubWrapper = styled.div`
  display: flex;

  & > a ~ a {
    &::before {
      content: '|';
      display: inline-block;
      margin: 0 14px;
      color: #333333;
    }
  }
`;

const JoinLink = styled(Link)`
  color: #333333;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  margin-top: 30px;
  display: block;
  margin-left: auto;
`;

export {
  Wrapper,
  LoginButtons,
  CheckedLoginButton,
  LoginForm,
  LoginInput,
  ErrorMessageBox,
  LoginSubmitButton,
  LoginSubWrapper,
  JoinLink,
};
