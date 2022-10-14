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

export default function LoginPage() {
  const history = useHistory();
  const [isMemberLogin, setIsMemberLogin] = useRecoilState(isLogin);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [loginType, setLoginType] = useState('BUYER');

  const onSubmit = async (userInfo: any) => {
    const loginInfo = {
      username: userInfo.id,
      password: userInfo.pw,
      login_type: loginType,
    };

    const [response, requestResult] = await axiosLogin(loginInfo);
    console.log(requestResult);

    if (requestResult) {
      setIsMemberLogin(true);
      history.push('/');
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

  if (isMemberLogin) {
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
