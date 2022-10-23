import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  max-width: 550px;
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  position: relative;
`;

export const LoginButtons = styled.ul`
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

export const CheckedLoginButton = styled.button`
  background: #f2f2f2;
  border-bottom: 1px solid #c4c4c4;
`;

export const LoginForm = styled.form`
  padding: 35px;
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid #c4c4c4;
  border-top: 0;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const LoginInput = styled.input`
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

export const ErrorMessageBox = styled.p`
  margin: 26px 0 -10px;
  color: #eb5757;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
`;

export const LoginSubmitButton = styled.button`
  background-color: #21bf48;
  border-radius: 5px;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
  padding: 19px 0;
  margin-top: 36px;
`;

export const LoginSubWrapper = styled.div`
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

export const JoinLink = styled(Link)`
  color: #333333;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  margin-top: 30px;
  display: block;
  margin-left: auto;
`;

export const TermsAndSubmitButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: -170px;
  left: 35px;
  width: calc(100% - 70px);
`;

export const ImportantWord = styled.span`
  font-weight: bold;
  text-decoration: underline;
  margin-left: 4px;
`;

export const TermsLabel = styled.label`
  font-family: 'Spoqa Han Sans Neo';
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #767676;
  display: flex;
  align-items: baseline;

  & > input {
    display: block;
    margin-right: 10px;
  }
`;
