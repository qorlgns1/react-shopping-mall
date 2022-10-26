import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  color: red;
  font-size: 16px;
  margin-bottom: 16px;
`;

interface Props {
  children: any;
}

export default function ErrorMessageBox({ children }: Props) {
  return (
    <Wrapper>
      <p>{children}</p>
    </Wrapper>
  );
}
