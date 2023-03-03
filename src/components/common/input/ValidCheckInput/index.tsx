import React, { forwardRef, useState } from 'react';
import styled from 'styled-components';

import BasicInput from '@components/common/input/BasicInput';

import iconCheckOn from '@assets/icon/icon-check-on.svg';
import iconCheckOff from '@assets/icon/icon-check-off.svg';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => any;
}

type InputRef = HTMLInputElement;

const ValidCheckInput = forwardRef<InputRef, Props>(
  ({ onChange, ...props }, ref) => {
    // TODO: checked를 props로 받아서 유효성이 통과되었는지 확인하고 표시해줘야한다.
    const [checkboxChecked, setCheckboxChecked] = useState(false);

    return (
      <Wrapper>
        <BasicInput
          {...props}
          ref={ref}
          onChange={(e) => setCheckboxChecked(onChange(e))}
        />
        <CheckBoxWrapper>
          <CheckBox
            type='checkbox'
            id={`${props.id}Checkbox`}
            checked={checkboxChecked}
            readOnly
          />
          <CheckBoxLabel htmlFor={`${props.id}Checkbox`} />
        </CheckBoxWrapper>
      </Wrapper>
    );
  },
);

const Wrapper = styled.div`
  position: relative;
`;

const CheckBoxWrapper = styled.div``;

const CheckBox = styled.input`
  display: none;

  &:checked + label {
    background-image: url(${iconCheckOn});
  }
`;

const CheckBoxLabel = styled.label`
  position: absolute;
  bottom: 1.4rem;
  right: 1.3rem;
  width: 2.8rem;
  height: 2.8rem;
  cursor: pointer;

  background-image: url(${iconCheckOff});
`;

export default ValidCheckInput;
