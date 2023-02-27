import React from 'react';
import { FieldValues } from 'react-hook-form';
import styled from 'styled-components';

const Wrapper = styled.div`
  color: red;
  font-size: 16px;
`;

interface Props {
  errorType: FieldValues | undefined;
  children: React.ReactNode;
}

export default function ErrorMessageBox({ errorType, children }: Props) {
  return errorType ? (
    <Wrapper>
      <p>{children}</p>
    </Wrapper>
  ) : (
    <></>
  );
}
