import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 10px;
  font-family: 'Spoqa Han Sans Neo';
  font-weight: 400;
  font-size: 1rem;
  line-height: 20px;
  color: #767676;
`;

export const EmailInputWrapper = styled.div`
  display: flex;

  input + div {
    margin: 0 11px;
    padding-top: 20px;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
  }

  &:first-child {
    &::after {
      content: '@';
      display: block;
    }
  }
`;

export const Input = styled.input`
  padding-left: 16px;
  width: 100%;
  height: 54px;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
`;
