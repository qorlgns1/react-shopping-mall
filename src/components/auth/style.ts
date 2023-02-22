import styled, { css } from 'styled-components';
import { LoginType } from '../../types/login/login.type';

export const Wrapper = styled.section`
  margin-top: 70px;
  width: 100%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  border-top: 0;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const TypeSelectList = styled.ul<{ type: LoginType }>`
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

export const InputWrapper = styled.div`
  padding: 35px;
  margin-bottom: 34px;
  display: flex;
  flex-direction: column;
  border: 1px solid #c4c4c4;
  border-top: 0;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const TermsLabel = styled.label`
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

export const ImportantWord = styled.span`
  font-weight: bold;
  text-decoration: underline;
  margin-left: 4px;
`;

export const LoginSubmitButton = styled.button`
  margin: 36px 35px 0;
  padding: 19px 0;
  background-color: #21bf48;
  border-radius: 5px;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;

  &:disabled,
  &[disabled] {
    background-color: #c4c4c4;

    &:hover {
      cursor: not-allowed;
    }
  }
`;
