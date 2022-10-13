import styled from 'styled-components';
import SearchBar from '../../SearchBar';

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 22px 0;
  max-width: 1280px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 4px 5px -4px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 767px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const MainLogo = styled.img`
  width: 124px;
  height: 38px;
  margin-top: 3px;
`;

const CustomSearchBar = styled(SearchBar)`
  width: 400px;
  margin: 0 auto 0 30px;

  @media screen and (max-width: 767px) {
    margin: 0;
    padding: 0 10px;
    width: 100%;
  }
`;

const PageMoveButtons = styled.ul`
  display: flex;
  justify-content: flex-end;

  & > li {
    margin-right: 26px;
  }
`;

export { Wrapper, MainLogo, CustomSearchBar, PageMoveButtons };
