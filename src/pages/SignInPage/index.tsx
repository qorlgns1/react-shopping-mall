import { Link } from 'react-router-dom';

import MainLogo from '@components/common/logo/MainLogo/index';
import SignIn from '@components/sign/SignIn';

import styled from 'styled-components';

const SignInPage = () => {
  return (
    <Wrapper>
      <Link to='/'>
        <MainLogo size={{ width: '238px', height: '74px' }} />
      </Link>
      <SignIn />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 55rem;
  margin: 10rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1rem;
  position: relative;
`;

export default SignInPage;
