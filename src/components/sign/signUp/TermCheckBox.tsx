import React from 'react';
import styled from 'styled-components';
import ImportantWord from '../../common/text/ImportantWord';

type Props = {
  termRef: React.RefObject<HTMLInputElement>;
};

const TermCheckBox = ({ termRef }: Props) => {
  return (
    <TermsLabel htmlFor='terms'>
      <input type='checkbox' id='terms' ref={termRef} />
      <span>
        호두샵의
        <ImportantWord label='이용약관' /> 및
        <ImportantWord label='개인정보처리방침' />에 대한 내용을 확인하였고
        동의합니다.
      </span>
    </TermsLabel>
  );
};

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

export default TermCheckBox;
