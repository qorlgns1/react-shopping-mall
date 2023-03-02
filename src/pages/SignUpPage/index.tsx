import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import MainLogo from '../../components/common/logo/MainLogo';
import { Wrapper } from './style';

import SignUp from '@components/sign/SignUp';

const SignUpPage = () => {
  useEffect(() => {
    const titleElement = document.getElementsByTagName('title')[0];
    titleElement.innerHTML = `회원가입 | 호두마켓`;
  }, []);

  return (
    <Wrapper>
      <Link to='/'>
        <MainLogo size={{ width: '238px', height: '74px' }} />
      </Link>
      <SignUp />
    </Wrapper>
  );
};

export default SignUpPage;
