import { Checkbox, Input, InputWrapper, Label, Wrapper } from './style';

export default function PwCheckInput({
  className,
  label,
  id,
  type = 'text',
}: any) {
  return (
    <Wrapper className={className}>
      {label && <Label htmlFor={id}>{label}</Label>}
      <InputWrapper>
        <Input type={type} id={id} />
        <Checkbox type='checkbox' id={`${id}Checkbox`} />
        <label htmlFor={`${id}Checkbox`} />
      </InputWrapper>
    </Wrapper>
  );
}
