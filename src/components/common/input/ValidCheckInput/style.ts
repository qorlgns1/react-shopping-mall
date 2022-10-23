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

export const InputButtonWrapper = styled.div`
  display: flex;
  height: 54px;
`;

export const Input = styled.input`
  padding-left: 16px;
  flex-basis: 100%;
  margin-right: 12px;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
`;

export const Button = styled.button`
  width: 122px;
  background: #21bf48;
  border-radius: 5px;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
`;
