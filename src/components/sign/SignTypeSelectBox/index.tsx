import React from 'react';
import styled, { css } from 'styled-components';
import { SignType } from '../../../types/sign/sign.type';

type Props = {
  suffix: '가입' | '로그인';
  selectedType: SignType;
  handleSetSignType: (signType: SignType) => () => void;
  className?: string;
};

const SignTypeSelectBox = ({
  suffix,
  selectedType,
  handleSetSignType,
  className,
}: Props) => {
  return (
    <TypeSelectList type={selectedType} className={className}>
      <li>
        <button onClick={handleSetSignType('BUYER')}>구매회원 {suffix}</button>
      </li>
      <li>
        <button onClick={handleSetSignType('SELLER')}>판매회원 {suffix}</button>
      </li>
    </TypeSelectList>
  );
};

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
    border-radius: 1rem 1rem 0 0;
    text-align: center;
    height: 6rem;
    font-size: 1.8rem;
    font-weight: 500;
  }

  ${({ type }) => setUnSelectedButtonCss(type)}
`;

const unSelectedButtonCss = css`
  background: #f2f2f2;
  border-bottom: 1px solid #c4c4c4;
`;

const setUnSelectedButtonCss = (type: SignType) => {
  if (type === 'BUYER') {
    return css`
      & > li:last-child {
        ${unSelectedButtonCss}
      }
    `;
  }

  if (type === 'SELLER') {
    return css`
      & > li:first-child {
        ${unSelectedButtonCss}
      }
    `;
  }
};

export default SignTypeSelectBox;
