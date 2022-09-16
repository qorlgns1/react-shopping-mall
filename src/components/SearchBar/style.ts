import styled from 'styled-components';
import searchButtonImage from '../../assets/button/search.svg';

const Wrapper = styled.div`
  position: relative;
`;

const SearchInput = styled.input`
  padding: 11px 20px;
  margin-left: 30px;
  width: 400px;
  height: 46px;
  border: 2px solid #21bf48;
  border-radius: 50px;
  color: #767676;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
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
  position: absolute;
  top: 9px;
  right: 22px;
`;

export { Wrapper, SearchInput, SearchButton };
