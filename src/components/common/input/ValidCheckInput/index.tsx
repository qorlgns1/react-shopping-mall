import styled from 'styled-components';
import { Button, Input, InputButtonWrapper, Label, Wrapper } from './style';

export default function ValidCheckInput({
  className,
  label,
  id,
  type = 'text',
  onClick,
}: any) {
  return (
    <Wrapper className={className}>
      {label && <Label htmlFor={id}>{label}</Label>}
      <InputButtonWrapper>
        <Input type={type} id={id} />
        <Button type='button' onClick={onClick}>
          중복확인
        </Button>
      </InputButtonWrapper>
    </Wrapper>
  );
}
