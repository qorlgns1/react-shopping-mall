import {
  ItemCompanyInfo,
  ItemCompanyTitle,
  ItemCorp,
  ItemSocial,
  Layout,
  ListCompanyInfo,
  ListCorp,
  ListSocial,
  Wrapper,
  WrapperCorpAndSocial,
} from './style';
import iconFacebook from '../../../assets/icon/social/icon-facebook.svg';
import iconInsta from '../../../assets/icon/social/icon-insta.svg';
import iconYoutube from '../../../assets/icon/social/icon-youtube.svg';

export default function Footer() {
  return (
    <Wrapper>
      <Layout>
        <WrapperCorpAndSocial>
          <ListCorp>
            <ItemCorp>
              <a href='#'>호두샵 소개</a>
            </ItemCorp>
            <ItemCorp>
              <a href='#'>이용약관</a>
            </ItemCorp>
            <ItemCorp>
              <a href='#'>개인정보처리방침</a>
            </ItemCorp>
            <ItemCorp>
              <a href='#'>전자금융거래약관</a>
            </ItemCorp>
            <ItemCorp>
              <a href='#'>청소년보호정책</a>
            </ItemCorp>
            <ItemCorp>
              <a href='#'>제휴문의</a>
            </ItemCorp>
          </ListCorp>
          <ListSocial>
            <ItemSocial>
              <a href='#' target='_black'>
                <img src={iconInsta} alt='인스타그램 아이콘' />
              </a>
            </ItemSocial>
            <ItemSocial>
              <a href='#' target='_black'>
                <img src={iconFacebook} alt='페이스북 아이콘' />
              </a>
            </ItemSocial>
            <ItemSocial>
              <a href='#' target='_black'>
                <img src={iconYoutube} alt='유튜브 아이콘' />
              </a>
            </ItemSocial>
          </ListSocial>
        </WrapperCorpAndSocial>
        <ListCompanyInfo>
          <ItemCompanyTitle className='ir'>회사명</ItemCompanyTitle>
          <ItemCompanyInfo style={{ fontWeight: 700 }}>
            (주)KIHOON COMPANY
          </ItemCompanyInfo>
          <ItemCompanyTitle className='ir'>주소</ItemCompanyTitle>
          <ItemCompanyInfo>서울특별시 마포구 마포대로 26길 22</ItemCompanyInfo>
          <div>
            <ItemCompanyTitle children='연락처 :' />
            <ItemCompanyInfo children='010-2006-6576' />
          </div>
          <div>
            <ItemCompanyTitle children='대표 :' />
            <ItemCompanyInfo children='배기훈' />
          </div>
        </ListCompanyInfo>
      </Layout>
    </Wrapper>
  );
}
