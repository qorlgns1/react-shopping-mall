import styled, { css } from 'styled-components';
import { SignType } from '../../../types/sign/sign.type';
import Button from '../../common/button/Button';

const Wrapper = styled.section`
  margin-top: 70px;
  width: 100%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  border-top: 0;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const TypeSelectList = styled.ul<{ type: SignType }>`
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

  ${({ type }) =>
    type === 'BUYER' &&
    css`
      & > li:last-child {
        background: #f2f2f2;
        border-bottom: 1px solid #c4c4c4;
      }
    `}

  ${({ type }) =>
    type === 'SELLER' &&
    css`
      & > li:first-child {
        background: #f2f2f2;
        border-bottom: 1px solid #c4c4c4;
      }
    `}
`;

const InputWrapper = styled.div`
  padding: 35px;
  margin-bottom: 34px;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  border: 1px solid #c4c4c4;
  border-top: 0;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const TermsLabel = styled.label`
  margin: 0 35px;
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

const LoginSubmitButton = styled(Button)`
  margin: 36px 35px 0;
`;

const ValidCheckInputWrapper = styled.div`
  display: flex;
  gap: 1.2rem;

  // input Wrapper
  > div {
    flex: 1;
  }

  // valid check button
  > button {
    width: 12.2rem;
    margin-top: 30px;
  }
`;

const signUpStyle = {
  Wrapper,
  Form,
  TypeSelectList,
  InputWrapper,
  TermsLabel,
  LoginSubmitButton,
  ValidCheckInputWrapper,
};

export default signUpStyle;
