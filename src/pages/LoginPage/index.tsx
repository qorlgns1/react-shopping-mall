import MainLogo from '../../components/common/logo/MainLogo/index';
import {
  JoinLink,
  LoginButtons,
  LoginForm,
  LoginInput,
  LoginSubmitButton,
  LoginSubWrapper,
  Wrapper,
} from './style';

export default function LoginPage() {
  return (
    <Wrapper>
      <MainLogo size={{ width: '238px', height: '74px' }} />
      <LoginButtons>
        <li>
          <button type='button'>구매회원 로그인</button>
        </li>
        <li>
          <button type='button'>판매회원 로그인</button>
        </li>
      </LoginButtons>
      <LoginForm>
        <LoginInput type='text' placeholder='아이디' />
        <LoginInput type='password' placeholder='비밀번호' />
        <LoginSubmitButton>로그인</LoginSubmitButton>
      </LoginForm>
      <LoginSubWrapper>
        <JoinLink to='#'>아이디 찾기</JoinLink>
        <JoinLink to='#'>비밀번호 찾기</JoinLink>
        <JoinLink to='/join'>회원가입</JoinLink>
      </LoginSubWrapper>
    </Wrapper>
  );
}
