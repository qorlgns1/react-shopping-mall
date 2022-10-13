import styled from 'styled-components';

const Wrapper = styled.ul`
  margin: 0 auto;
  padding: 80px 0 180px;
  max-width: 1280px;
  display: flex;
  flex-wrap: wrap;
  gap: 70px;
  justify-content: space-evenly;

  @media screen and (max-width: 767px) {
    padding: 40px 0 90px;
    gap: 10px;
  }
`;

export { Wrapper };
