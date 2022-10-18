import styled from 'styled-components';

const Wrapper = styled.ul`
  margin: 0 auto;
  padding: 80px 0;
  max-width: 1280px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 380px);
  grid-gap: 4rem;
  justify-content: space-evenly;

  @media screen and (max-width: 767px) {
    padding: 40px 0;
    grid-template-columns: repeat(auto-fill, 180px);
    grid-gap: 0.6rem;
  }
`;

export { Wrapper };
