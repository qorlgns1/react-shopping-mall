import styled from 'styled-components';
import searchButtonImage from '../../assets/button/search.svg';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  padding: 11px 20px;
  width: 100%;
  border: 2px solid #21bf48;
  border-radius: 50px;
  color: #767676;
  font-family: 'Spoqa Han Sans Neo';
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
`;

const SearchButton = styled.button`
  width: 28px;
  height: 28px;
  background-image: url(${searchButtonImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-left: -44px;
`;

export { Wrapper, SearchInput, SearchButton };
