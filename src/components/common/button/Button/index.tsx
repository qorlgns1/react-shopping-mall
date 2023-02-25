import React from 'react';
import styled, { css } from 'styled-components';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'S' | 'MS' | 'M' | 'L';
  variant?: 'primary' | 'white' | 'dark';
  Icon?: React.FC<React.SVGProps<SVGSVGElement>>; //svg
  iconReverse?: boolean;
}

const Button = ({
  children,
  size = 'M',
  variant = 'primary',
  Icon,
  ...props
}: ButtonProps) => {
  return (
    <BasicButton variant={variant} size={size} {...props}>
      {Icon && <Icon />}
      {children}
    </BasicButton>
  );
};

const BasicButton = styled.button<ButtonProps>`
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;

  border: ${({ variant = 'primary' }) => ButtonVariantMap[variant].border};
  color: ${({ variant = 'primary' }) => ButtonVariantMap[variant].color};
  background-color: ${({ variant = 'primary' }) =>
    ButtonVariantMap[variant].backgroundColor};
  font-family: 'Spoqa Han Sans Neo';
  font-size: ${({ size = 'M' }) => ButtonSizeMap[size].fontSize};
  font-weight: ${({ size = 'M' }) => ButtonSizeMap[size].fontWeight};
  width: ${({ size = 'M' }) => ButtonSizeMap[size].width};
  height: ${({ size = 'M' }) => ButtonSizeMap[size].height};

  & > svg {
    width: ${({ size = 'M' }) => ButtonSizeMap[size].iconSize};
    height: ${({ size = 'M' }) => ButtonSizeMap[size].iconSize};

    margin-top: -0.2rem;
  }

  ${({ iconReverse }) => iconReverse && iconReverseCss}
  ${(props) => props?.disabled && disableCss}
`;

const iconReverseCss = css`
  flex-direction: row-reverse;
`;

// width는 필요에 따라 컴포넌트를 상속받아서 다르게 사용
const ButtonSizeMap = {
  S: {
    fontSize: '1.6rem',
    fontWeight: 500,
    width: '8rem',
    height: '4rem',
    iconSize: '1.6rem',
  },
  MS: {
    fontSize: '1.6rem',
    fontWeight: 500,
    width: '16.6rem',
    height: '5.4rem',
    iconSize: '1.6rem',
  },
  M: {
    fontSize: '1.8rem',
    fontWeight: 700,
    width: '48rem',
    height: '6rem',
    iconSize: '1.8rem',
  },
  L: {
    fontSize: '2.4rem',
    fontWeight: 700,
    width: '22rem',
    height: '6.8rem',
    iconSize: '2.4rem',
  },
};

const ButtonVariantMap = {
  primary: {
    color: 'white',
    backgroundColor: '#21bf48',
    border: 'none',
  },
  white: {
    color: '#767676',
    backgroundColor: 'white',
    border: '1px solid #C4C4C4',
  },
  dark: {
    color: 'white',
    backgroundColor: '#767676',
    border: 'none',
  },
};

const disableCss = css`
  :disabled {
    cursor: not-allowed;
    color: white;
    background-color: #c4c4c4;
  }
`;

export default Button;
