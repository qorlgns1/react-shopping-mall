import { FC, forwardRef } from 'react';
import S from './style';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

type InputRef = HTMLInputElement;

// 참고: https://www.daleseo.com/react-forward-ref/
const BasicInput = forwardRef<InputRef, Props>(
  ({ className, label, id, ...props }, ref) => {
    return (
      <S.Wrapper className={className}>
        {label && <S.Label htmlFor={id}>{label}</S.Label>}
        <S.Input id={id} {...props} ref={ref} />
      </S.Wrapper>
    );
  },
);

export default BasicInput;
