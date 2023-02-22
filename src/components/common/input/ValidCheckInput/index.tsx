import { UseFormRegister } from 'react-hook-form';
import { Button, Input, InputButtonWrapper, Label, Wrapper } from './style';

interface Props {
  className?: string;
  label: string;
  id: string;
  type?: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  register: UseFormRegister<any>;
}

export default function ValidCheckInput({
  className,
  label,
  id,
  type = 'text',
  onClick,
  onChange,
  register,
}: Props) {
  return (
    <Wrapper className={className}>
      {label && <Label htmlFor={id}>{label}</Label>}
      <InputButtonWrapper>
        <Input
          type={type}
          id={id}
          {...register(id, {
            onChange,
            required: {
              value: true,
              message: `${label}(을)를 입력해주세요.`,
            },
          })}
        />
        <Button type='button' onClick={onClick}>
          중복확인
        </Button>
      </InputButtonWrapper>
    </Wrapper>
  );
}
