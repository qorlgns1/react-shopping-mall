import styled from 'styled-components';
import SearchBar from '../../SearchBar';

const Wrapper = styled.div`
  margin: 22px auto;
  display: flex;
  justify-content: space-between;
`;

const MainLogo = styled.img`
  width: 124px;
  height: 38px;
  margin-top: 3px;
`;

const CustomSearchBar = styled(SearchBar)`
  margin-left: -200px;
`;

const PageMoveButtons = styled.ul`
  display: flex;
  justify-content: flex-end;

  & > li {
    margin-right: 26px;
  }
`;

export { Wrapper, MainLogo, CustomSearchBar, PageMoveButtons };
