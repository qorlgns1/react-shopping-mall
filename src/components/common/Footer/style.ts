import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #f2f2f2;
  padding: 54px 0 63px;

  @media screen and (max-width: 767px) {
    padding: 27px 0 31px;
  }
`;

const Layout = styled.footer`
  margin: 0 auto;
  max-width: 1280px;
  padding: 0 10px;
`;

const WrapperCorpAndSocial = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;

  &::after {
    content: '';
    width: 100%;
    height: 1px;
    position: absolute;
    bottom: -22px;
    border-bottom: 1px solid #c4c4c4;
  }

  @media screen and (max-width: 767px) {
    align-items: center;
  }
`;

const ListCorp = styled.ul`
  padding-top: 12px;
  display: flex;

  @media screen and (max-width: 767px) {
    flex-wrap: wrap;
    max-width: 210px;
    justify-content: center;
  }
`;

const ItemCorp = styled.li`
  @media screen and (max-width: 767px) {
    margin-bottom: 5px;
    &:not(:nth-of-type(3n)) {
      &::after {
        content: '|';
        padding: 0 7px;
      }
    }
  }

  @media screen and (min-width: 768px) {
    & + &::before {
      content: '|';
      padding: 0 14px;
    }
  }
`;

const ListSocial = styled.ul`
  display: flex;
`;

const ItemSocial = styled.li`
  width: 32px;
  height: 32px;
  margin-left: 14px;
  & + &::before {
    padding-left: 14px;
  }
`;

const ListCompanyInfo = styled.dl`
  margin-top: 52px;
  display: flex;
  flex-direction: column;
  color: #767676;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-size: 14px;
  line-height: 24px;
`;

const ItemCompanyTitle = styled.dt`
  display: inline-block;
  margin-right: 5px;
`;

const ItemCompanyInfo = styled.dd`
  display: inline-block;
`;

export {
  Wrapper,
  Layout,
  WrapperCorpAndSocial,
  ListCorp,
  ItemCorp,
  ListSocial,
  ItemSocial,
  ListCompanyInfo,
  ItemCompanyTitle,
  ItemCompanyInfo,
};
