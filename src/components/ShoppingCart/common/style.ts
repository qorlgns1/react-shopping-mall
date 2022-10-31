import styled, { css } from 'styled-components';
import checkBoxIcon from '../../../assets/icon/checkbox/1/check-box.svg';
import checkFillBoxIcon from '../../../assets/icon/checkbox/1/check-box-fill.svg';

export const CheckBox = styled.div<{ skeleton?: boolean }>`
  width: 108px;
  text-align: start;

  & > input {
    display: none;
  }

  & > input + label {
    cursor: pointer;
    position: relative;
    padding-left: 30px;
  }

  & > input + label:before {
    content: '';
    box-sizing: border-box;
    display: inline-block;
    position: relative;
    width: 20px;
    height: 20px;
    border-radius: 50%;

    ${({ skeleton }) =>
      skeleton
        ? css`
            border: 2px solid #f2f2f2;
          `
        : css`
            background-image: url(${checkBoxIcon});
          `}
  }

  ${({ skeleton }) =>
    !skeleton &&
    css`
      & > input:checked + label:before {
        background-image: url(${checkFillBoxIcon});
      }
    `}
`;
