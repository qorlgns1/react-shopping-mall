import styled from 'styled-components';

export interface LogoImgSize {
  size: { width: `${number}px`; height: `${number}px` };
}

const LogoImg = styled.img<LogoImgSize>`
  width: ${({ size }) => size.width};
  height: ${({ size }) => size.height};
  margin-top: 3px;

  @media screen and (max-width: 767px) {
    margin: 0 auto 5px;
    z-index: 12;
  }
`;

export { LogoImg };
