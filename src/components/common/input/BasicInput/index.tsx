import { Label, Wrapper, Input } from './style';

export default function BasicInput({
  className,
  label,
  id,
  type = 'text',
}: any) {
  return (
    <Wrapper className={className}>
      {label && <Label htmlFor={id}>{label}</Label>}
      <Input type={type} id={id} />
    </Wrapper>
  );
}
