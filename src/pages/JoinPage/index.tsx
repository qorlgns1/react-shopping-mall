import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MainLogo from '../../components/common/logo/MainLogo';
import ValidCheckInput from '../../components/common/input/ValidCheckInput';
import PwCheckInput from '../../components/common/input/PwCheckInput/index';
import BasicInput from '../../components/common/input/BasicInput';
import PhoneInput from '../../components/common/input/PhoneInput/index';
import EmailInput from '../../components/common/input/EmailInput';
import {
  CheckedLoginButton,
  ImportantWord,
  LoginButtons,
  LoginForm,
  LoginSubmitButton,
  TermsAndSubmitButtonWrapper,
  TermsLabel,
  Wrapper,
} from './style';

export default function JoinPage() {
  const [joinType, setJoinType] = useState('BUYER');

  return (
    <Wrapper>
      <Link to='/'>
        <MainLogo size={{ width: '238px', height: '74px' }} />
      </Link>
      <LoginButtons>
        <li>
          {joinType === 'SELLER' ? (
            <CheckedLoginButton
              type='button'
              onClick={() => setJoinType('BUYER')}
            >
              구매회원 로그인
            </CheckedLoginButton>
          ) : (
            <button type='button' onClick={() => setJoinType('BUYER')}>
              구매회원 로그인
            </button>
          )}
        </li>
        <li>
          {joinType === 'BUYER' ? (
            <CheckedLoginButton
              type='button'
              onClick={() => setJoinType('SELLER')}
            >
              판매회원 로그인
            </CheckedLoginButton>
          ) : (
            <button type='button' onClick={() => setJoinType('SELLER')}>
              판매회원 로그인
            </button>
          )}
        </li>
      </LoginButtons>
      <LoginForm>
        <ValidCheckInput label='아이디' id='id' />
        <PwCheckInput label='비밀번호' id='pw' />
        <PwCheckInput label='비밀번호' id='pwCheck' />
        <BasicInput label='이름' id='name' />
        <PhoneInput label='휴대폰번호' id='phoneNumber' />
        <EmailInput label='이메일' id='email' />
        <TermsAndSubmitButtonWrapper>
          <TermsLabel htmlFor='terms'>
            <input type='checkbox' id='terms' />
            <span>
              호두샵의<ImportantWord>이용약관</ImportantWord> 및
              <ImportantWord>개인정보처리방침</ImportantWord>에 대한 내용을
              확인하였고 동의합니다.
            </span>
          </TermsLabel>

          <LoginSubmitButton>가입하기</LoginSubmitButton>
        </TermsAndSubmitButtonWrapper>
        <ValidCheckInput label='사업자 등록번호' id='id' />
        <BasicInput label='스토어 이름' id='name' />
      </LoginForm>
    </Wrapper>
  );
}
