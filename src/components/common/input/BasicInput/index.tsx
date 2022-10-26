import { UseFormRegister } from 'react-hook-form';
import { Label, Wrapper, Input } from './style';

interface Props {
  className?: string;
  label: string;
  type?: string;
  id: never | string;
  register: UseFormRegister<any>;
}

export default function BasicInput({
  className,
  label,
  id,
  type = 'text',
  register,
}: Props) {
  return (
    <Wrapper className={className}>
      {label && <Label htmlFor={id}>{label}</Label>}
      <Input
        type={type}
        id={id}
        {...register(id, {
          required: {
            value: true,
            message: `${label}(을)를 입력해주세요.`,
          },
        })}
      />
    </Wrapper>
  );
}
