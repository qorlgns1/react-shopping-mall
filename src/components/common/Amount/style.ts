import styled, { css } from 'styled-components';
import minusIcon from '../../../assets/icon/icon-minus-line.svg';

export const Wrapper = styled.div`
  display: flex;
  width: 150px;
  height: 50px;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
`;

interface Ibutton {
  icon: any;
}

export const Button = styled.button<Ibutton>`
  width: 50px;
  background-image: url(${(props) => props.icon});
  background-repeat: no-repeat;
  background-position: 50%;

  ${({ icon }) =>
    icon === minusIcon
      ? css`
          border-right: 1px solid #c4c4c4;
          height: 100%;
        `
      : css`
          border-left: 1px solid #c4c4c4;
          height: 100%;
        `}
`;

export const Display = styled.input`
  width: 50px;
  text-align: center;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  border: 0;
  padding: 0 10px;
`;
