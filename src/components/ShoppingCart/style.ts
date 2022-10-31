import styled from 'styled-components';

export const Wrapper = styled.section`
  margin: 0 auto;
  padding: 80px 10px;
  max-width: 1280px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  margin: 0 auto 52px;
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
`;

export const CartList = styled.ul`
  display: flex;
  flex-direction: column;

  li + li {
    margin-top: 10px;
  }
`;
