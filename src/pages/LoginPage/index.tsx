import { useState } from 'react';
import {
  CheckedLoginButton,
  ErrorMessageBox,
  JoinLink,
  LoginButtons,
  LoginForm,
  LoginInput,
  LoginSubmitButton,
  LoginSubWrapper,
  Wrapper,
} from './style';
import MainLogo from '../../components/common/logo/MainLogo/index';
import { useForm } from 'react-hook-form';
import { axiosLogin } from '../../apis/loginApi';
import { Link, useHistory } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { isLogin } from '../../atoms';
import { successToast } from '../../utils/toast/index';

export default function LoginPage() {
  const history = useHistory();
  const [isMemberLoginInfo, setIsMemberLoginInfo] = useRecoilState(isLogin);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [loginType, setLoginType] = useState('BUYER');
  const [loginResult, setLoginResult] = useState(true);

  const onSubmit = async (userInfo: any) => {
    const loginInfo = {
      username: userInfo.id,
      password: userInfo.pw,
      login_type: loginType,
    };

    const [response, requestResult] = await axiosLogin(loginInfo);

    if (requestResult) {
      successToast('환영합니다 :)');
      setIsMemberLoginInfo(response);
      history.push('/');
    } else {
      setLoginResult(false);
    }
  };

  function loginErrorCheck() {
    if (
      (errors?.id?.type === 'required' && errors?.pw?.type === 'required') ||
      errors?.id?.type
    ) {
      return <ErrorMessageBox>아이디를 입력해주세요.</ErrorMessageBox>;
    }

    if (errors?.pw?.type === 'required') {
      return <ErrorMessageBox>비밀번호를 입력해주세요.</ErrorMessageBox>;
    }
  }

  if (isMemberLoginInfo) {
    history.push('/');
  }

  return (
    <Wrapper>
      <Link to='/'>
        <MainLogo size={{ width: '238px', height: '74px' }} />
      </Link>
      <LoginButtons>
        <li>
          {loginType === 'SELLER' ? (
            <CheckedLoginButton
              type='button'
              onClick={() => setLoginType('BUYER')}
            >
              구매회원 로그인
            </CheckedLoginButton>
          ) : (
            <button type='button' onClick={() => setLoginType('BUYER')}>
              구매회원 로그인
            </button>
          )}
        </li>
        <li>
          {loginType === 'BUYER' ? (
            <CheckedLoginButton
              type='button'
              onClick={() => setLoginType('SELLER')}
            >
              판매회원 로그인
            </CheckedLoginButton>
          ) : (
            <button type='button' onClick={() => setLoginType('SELLER')}>
              판매회원 로그인
            </button>
          )}
        </li>
      </LoginButtons>
      <LoginForm onSubmit={handleSubmit(onSubmit)}>
        <LoginInput
          type='text'
          placeholder='아이디'
          {...register('id', { required: true })}
        />

        <LoginInput
          type='password'
          placeholder='비밀번호'
          {...register('pw', { required: true })}
        />
        {loginErrorCheck()}
        {!loginResult && (
          <ErrorMessageBox>
            아이디 또는 비밀번호를 잘못 입력했습니다. <br />
            입력하신 내용을 다시 확인해주세요.
          </ErrorMessageBox>
        )}
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
