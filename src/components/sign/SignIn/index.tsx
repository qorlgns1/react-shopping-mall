import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { useMutation } from '@tanstack/react-query';

import { SignType } from '@@types/sign/sign.type';
import { axiosLogin } from '@apis/loginApi';
import { successToast } from '@utils/toast';
import { userLoginInfoAtom } from '../../../atoms';
import { SignInUserInfo } from '@@types/sign/signIn.type';
import S from './style';

const SignIn = () => {
  const history = useHistory();
  const [userLoginInfo, setUserLoginInfo] = useRecoilState(userLoginInfoAtom);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInUserInfo>();

  const [loginType, setLoginType] = useState<SignType>('BUYER');
  const [loginResult, setLoginResult] = useState(true);

  const { mutate: handleSignIn } = useMutation(
    (signInUserInfo: SignInUserInfo) => axiosLogin(signInUserInfo),
    {
      onSuccess: (response) => {
        successToast('환영합니다 :)');
        setUserLoginInfo(response);
        history.push('/');
      },
      onError: () => {
        setLoginResult(false);
      },
    },
  );

  const onSubmit = async ({ username, password }: SignInUserInfo) => {
    const loginInfo: SignInUserInfo = {
      username,
      password,
      login_type: loginType,
    };

    handleSignIn(loginInfo);
  };

  const loginErrorCheck = () => {
    if (
      (errors.username?.type === 'required' &&
        errors.password?.type === 'required') ||
      errors.username?.type
    ) {
      return <S.ErrorMessageBox>아이디를 입력해주세요.</S.ErrorMessageBox>;
    }

    if (errors.password?.type === 'required') {
      return <S.ErrorMessageBox>비밀번호를 입력해주세요.</S.ErrorMessageBox>;
    }
  };

  const selectLoginType = (loginType: SignType) => () => {
    setLoginType(loginType);
  };

  useEffect(() => {
    if (userLoginInfo) history.push('/');
  }, []);

  return (
    <>
      <S.StyledSignTypeSelectBox
        selectedType={loginType}
        handleSetSignType={selectLoginType}
        suffix='로그인'
      />
      <S.LoginForm onSubmit={handleSubmit(onSubmit)}>
        <S.LoginInput
          type='text'
          placeholder='아이디'
          {...register('username', { required: true })}
        />
        <S.LoginInput
          type='password'
          placeholder='비밀번호'
          {...register('password', { required: true })}
        />
        {loginErrorCheck()}
        {!loginResult && (
          <S.ErrorMessageBox>
            아이디 또는 비밀번호를 잘못 입력했습니다. <br />
            입력하신 내용을 다시 확인해주세요.
          </S.ErrorMessageBox>
        )}
        <S.LoginSubmitButton>로그인</S.LoginSubmitButton>
      </S.LoginForm>
      <S.LoginSubWrapper>
        <S.JoinLink to='#'>아이디 찾기</S.JoinLink>
        <S.JoinLink to='#'>비밀번호 찾기</S.JoinLink>
        <S.JoinLink to='/join'>회원가입</S.JoinLink>
      </S.LoginSubWrapper>
    </>
  );
};

export default SignIn;
