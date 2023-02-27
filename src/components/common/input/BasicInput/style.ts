import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 1rem;
  font-family: 'Spoqa Han Sans Neo';
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2rem;
  color: #767676;
`;

const Input = styled.input`
  padding-left: 1.6rem;
  width: 100%;
  height: 5.4rem;
  border: 0.1rem solid #c4c4c4;
  border-radius: 0.5rem;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2rem;

  &:focus {
    border: 1px solid #21bf48;
  }

  /* Chrome, Safari, Edge, Opera */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  &[type='number'] {
    -moz-appearance: textfield;
  }
`;

const InputStyle = {
  Wrapper,
  Label,
  Input,
};

export default InputStyle;
