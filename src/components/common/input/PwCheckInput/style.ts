import styled from 'styled-components';
import iconCheckOn from '../../../../assets/icon/icon-check-on.svg';
import iconCheckOff from '../../../../assets/icon/icon-check-off.svg';

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

export const InputWrapper = styled.div`
  position: relative;
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

export const Checkbox = styled.input`
  position: absolute;
  right: 0;
  bottom: 0;
  align-items: center;
  display: none;

  & + label {
    position: absolute;
    top: 50%;
    right: 13px;
    transform: translateY(-50%);
    width: 28px;
    height: 28px;
    cursor: pointer;

    background-image: url(${iconCheckOff});
  }

  &:checked + label {
    background-image: url(${iconCheckOn});
  }
`;
