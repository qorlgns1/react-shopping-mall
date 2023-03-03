import styled from 'styled-components';
import { Link } from 'react-router-dom';

import SignTypeSelectBox from '@components/sign/SignTypeSelectBox';
import Button from '@components/common/button/Button';
import BasicInput from '@components/common/input/BasicInput';

const StyledSignTypeSelectBox = styled(SignTypeSelectBox)`
  margin-top: 70px;
`;

const LoginForm = styled.form`
  padding: 3.5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid #c4c4c4;
  border-top: 0;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
`;

const LoginInput = styled(BasicInput)`
  border-bottom: 1px solid #c4c4c4;
  > input {
    border: 0;

    :focus {
      border: 0;
    }
  }

  & + & {
    margin-top: 0.6rem;
  }
`;

const ErrorMessageBox = styled.p`
  margin: 2.6rem 0 -1rem;
  color: #eb5757;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 2rem;
`;

const LoginSubmitButton = styled(Button)`
  margin-top: 3.6rem;
`;

const LoginSubWrapper = styled.div`
  display: flex;

  & > a ~ a {
    &::before {
      content: '|';
      display: inline-block;
      margin: 0 1.4rem;
      color: #333333;
    }
  }
`;

const JoinLink = styled(Link)`
  color: #333333;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 2rem;
  margin: 3rem 0 0 auto;
  margin-top: 3rem;
  display: block;
`;

const signInStyle = {
  StyledSignTypeSelectBox,
  LoginForm,
  LoginInput,
  ErrorMessageBox,
  LoginSubmitButton,
  LoginSubWrapper,
  JoinLink,
};

export default signInStyle;
