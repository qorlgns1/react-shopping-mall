import React, { forwardRef, useState } from 'react';
import styled from 'styled-components';

import BasicInput from '@components/common/input/BasicInput';

import iconCheckOn from '@assets/icon/icon-check-on.svg';
import iconCheckOff from '@assets/icon/icon-check-off.svg';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => boolean;
}

type InputRef = HTMLInputElement;

const ValidCheckInput = forwardRef<InputRef, Props>(
  ({ onChange, ...props }, ref) => {
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
  position: absolute;
  right: 0;
  bottom: 0;
  align-items: center;
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
