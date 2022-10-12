import styled from 'styled-components';

const Wrapper = styled.div`
  height: 298px;
  background-color: #f2f2f2;
  padding: 54px 0 63px;
  min-width: 630px;
`;

const Layout = styled.footer`
  margin: 0 auto;
  max-width: 1280px;
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
`;

const ListCorp = styled.ul`
  padding-top: 12px;
  display: flex;
`;

const ItemCorp = styled.li`
  & + &::before {
    content: '|';
    padding: 0 14px;
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
