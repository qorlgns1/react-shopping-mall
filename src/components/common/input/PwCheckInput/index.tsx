import { useState } from 'react';
import { Checkbox, Input, InputWrapper, Label, Wrapper } from './style';
import { UseFormRegister } from 'react-hook-form';

interface Props {
  className?: string;
  label: string;
  type?: string;
  id: never | string;
  register: UseFormRegister<any>;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => boolean;
  pattern: RegExp;
}

export default function PwCheckInput({
  className,
  label,
  id,
  type = 'password',
  register,
  pattern,
  onChange,
}: Props) {
  const [checkboxChecked, setCheckboxChecked] = useState(false);

  const validCheck = (pwValidCheck: boolean) => {
    pwValidCheck ? setCheckboxChecked(true) : setCheckboxChecked(false);
  };

  return (
    <Wrapper className={className}>
      {label && <Label htmlFor={id}>{label}</Label>}
      <InputWrapper>
        <Input
          type={type}
          id={id}
          {...register(id, {
            pattern: {
              value: pattern,
              message: `${label}(은)는 8자 이상, 영소문자를 포함해야 합니다.`,
            },
            required: {
              value: true,
              message: `${label}(을)를 입력해주세요.`,
            },
          })}
          onChange={(e) => validCheck(onChange(e))}
        />
        <Checkbox
          type='checkbox'
          id={`${id}Checkbox`}
          checked={checkboxChecked}
          readOnly
        />
        <label htmlFor={`${id}Checkbox`} />
      </InputWrapper>
    </Wrapper>
  );
}
