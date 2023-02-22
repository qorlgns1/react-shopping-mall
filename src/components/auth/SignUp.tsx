import React, { ChangeEvent, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import {
  axiosCompanyRegistrationNumberCheck,
  axiosIdCheck,
  axiosJoin,
} from '../../apis/joinApi';
import { joinPhoneNumberAtom } from '../../atoms';
import BasicInput from '../common/input/BasicInput';
import ErrorMessageBox from '../common/input/ErrorMessageBox';
import PhoneInput from '../common/input/PhoneInput';
import PwCheckInput from '../common/input/PwCheckInput';
import ValidCheckInput from '../common/input/ValidCheckInput';
import {
  Form,
  ImportantWord,
  InputWrapper,
  LoginSubmitButton,
  TermsLabel,
  TypeSelectList,
  Wrapper,
} from './style';
import { LoginType } from '../../types/login/login.type';

interface BuyerForm {
  id: string;
  name: string;
  pw: string;
  pwCheck: string;
  phoneNumberMiddle?: string;
  phoneNumberLast?: string;
}

interface SellerForm extends BuyerForm {
  companyRegistrationNumber: string;
  storeName: string;
}

export interface JoinFormType {
  type: LoginType;
  id: string;
  idValidCheck: boolean;
  pw: string;
  pwCheck: string;
  pwSameCheck: boolean;
  name: string;
  phoneNumber: string;
  phoneNumberMiddle?: string;
  phoneNumberLast?: string;
  companyRegistrationNumber?: string;
  companyRegistrationNumberValidCheck?: boolean;
  storeName?: string;
}

const defaultLoginForm: JoinFormType = {
  type: 'BUYER',
  id: '',
  idValidCheck: false,
  pw: '',
  pwCheck: '',
  pwSameCheck: false,
  name: '',
  phoneNumber: '010',
  phoneNumberMiddle: '',
  phoneNumberLast: '',
  companyRegistrationNumber: '',
  companyRegistrationNumberValidCheck: false,
  storeName: '',
};

export default function SignUp() {
  const history = useHistory();
  const [joinInfo, setJoinInfo] = useState<JoinFormType>(defaultLoginForm);

  const joinPhoneNumber = useRecoilValue(joinPhoneNumberAtom);

  const {
    register,
    handleSubmit,
    watch,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<JoinFormType>();

  const termRef = useRef<HTMLInputElement>(null);

  // 구매회원가입 | 판매회원가입 타입 정하는 함수
  const handleSetSignUpType = (signUpType: LoginType) => () => {
    setJoinInfo((prev) => ({ ...prev, type: signUpType }));
  };

  // 아이디 유효성 검사하는 함수
  const idCheck = async () => {
    const id = watch('id');

    if (!id) {
      alert('id를 입력해주세요.');
      return;
    }

    try {
      const [resultMessage, result] = await axiosIdCheck(id);
      if (result) {
        setJoinInfo((prev) => ({ ...prev, idValidCheck: true }));
      }
      alert(resultMessage);
    } catch (err) {
      alert('아이디체크하면서 에러가 발생했습니다. 확인해주세요.');
    }
  };

  // 사업자번호 유효성 검사하는 함수
  const handleCompanyRegistrationNumberCheck = async () => {
    const companyRegistrationNumber = watch('companyRegistrationNumber');

    if (!companyRegistrationNumber) {
      alert('사업자번호를 입력해주세요.');
      return;
    }

    if (
      parseInt(companyRegistrationNumber).toString() !==
      companyRegistrationNumber.toString()
    ) {
      setError('companyRegistrationNumber', {
        type: 'custom',
        message: '사업자번호는 숫자만 입력가능합니다.',
      });
      return;
    } else {
      clearErrors('companyRegistrationNumber');
    }

    try {
      const [resultMessage, result] = await axiosCompanyRegistrationNumberCheck(
        companyRegistrationNumber,
      );
      if (result) {
        setJoinInfo((prev) => ({
          ...prev,
          companyRegistrationNumberValidCheck: true,
        }));
      }
      alert(resultMessage);
    } catch (err) {
      alert('사업자번호 체크하면서 에러가 발생했습니다. 확인해주세요.');
    }
  };

  // 아이디 입력시 유효성검사를 다시 하도록 idValidCheck를 false로 만들어주는 함수
  const handleIdChange = () => {
    setJoinInfo((prev) => ({ ...prev, idValidCheck: false }));
  };

  // 사업자번호 입력시 유효성검사를 다시 하도록 idValidCheck를 false로 만들어주는 함수
  const handleCompanyRegistrationNumberChange = () => {
    setJoinInfo((prev) => ({
      ...prev,
      companyRegistrationNumberValidCheck: false,
    }));
  };

  // 비밀번호 유효성 검사하는 함수
  const handlePwValidCheck = (e: ChangeEvent<HTMLInputElement>) => {
    const regex = new RegExp(/^(?=.*[A-Za-z])[A-Za-z\d]{8,}$/);
    const pwValidCheck = regex.test(e.target.value);

    return pwValidCheck;
  };

  // 비밀번호와 비밀번호확인이 일치하는지 확인하는 함수
  const handlePwValidCheckSame = () => {
    const pw: string = (document.getElementById('pw') as HTMLInputElement)
      .value;
    const pwCheck: string = (
      document.getElementById('pwCheck') as HTMLInputElement
    ).value;

    if (pw === pwCheck) {
      setJoinInfo((prev) => ({ ...prev, pwSameCheck: true }));
      return true;
    } else {
      setJoinInfo((prev) => ({ ...prev, pwSameCheck: false }));
      return false;
    }
  };

  // 회원가입하는 함수
  const handleJoin = async (formData: BuyerForm | SellerForm) => {
    const { id, pw, pwCheck, name } = formData;
    const $term = termRef.current;
    if ($term && !$term.checked) {
      alert('약관에 동의를 먼저 해주세요.');
      return;
    }

    if (joinPhoneNumber.join('').length < 10) {
      alert('휴대폰번호를 확인해주세요.');
      setError('phoneNumber', {
        type: 'custom',
        message: '휴대폰번호를 확인해주세요',
      });
      return;
    } else {
      clearErrors('phoneNumber');
    }

    interface UserInfo {
      username: string;
      password: string;
      password2: string;
      phone_number: string;
      name: string;
      company_registration_number?: string;
      store_name?: string;
    }

    let userInfo: UserInfo = {
      username: id,
      password: pw,
      password2: pwCheck,
      phone_number: joinPhoneNumber.join(''),
      name,
    };

    const joinTypeCheck = (
      joinInfoType: JoinFormType['type'],
      formData: BuyerForm | SellerForm,
    ): formData is SellerForm => {
      return joinInfoType === 'SELLER';
    };

    if (joinTypeCheck(joinInfo.type, formData)) {
      const { companyRegistrationNumber, storeName } = formData;

      userInfo = {
        ...userInfo,
        company_registration_number: companyRegistrationNumber,
        store_name: storeName,
      };
    }

    try {
      const [resultMessage, result] =
        joinInfo.type === 'BUYER'
          ? await axiosJoin(userInfo)
          : await axiosJoin(userInfo, 'SELLER');

      if (result) {
        history.push('/login');
      } else {
        alert(JSON.stringify(resultMessage));
      }
    } catch (err) {
      console.log('회원가입 에러', err);
    }
  };

  return (
    <Wrapper>
      <h2 className='ir'>회원가입</h2>
      <Form onSubmit={handleSubmit(handleJoin)}>
        <TypeSelectList type={joinInfo.type}>
          <li>
            <button onClick={handleSetSignUpType('BUYER')}>구매회원가입</button>
          </li>
          <li>
            <button onClick={handleSetSignUpType('SELLER')}>
              판매회원가입
            </button>
          </li>
        </TypeSelectList>
        <InputWrapper>
          <ValidCheckInput
            label='아이디'
            id='id'
            onClick={idCheck}
            onChange={handleIdChange}
            register={register}
          />
          {errors['id'] && (
            <ErrorMessageBox>{errors['id'].message}</ErrorMessageBox>
          )}
          <PwCheckInput
            label='비밀번호'
            type='password'
            id='pw'
            register={register}
            onChange={handlePwValidCheck}
            pattern={/^(?=.*[A-Za-z])[A-Za-z\d]{8,}$/}
          />
          {errors['pw'] && (
            <ErrorMessageBox>{errors['pw'].message}</ErrorMessageBox>
          )}
          <PwCheckInput
            label='비밀번호 확인'
            type='password'
            id='pwCheck'
            register={register}
            onChange={handlePwValidCheckSame}
            pattern={/^(?=.*[A-Za-z])[A-Za-z\d]{8,}$/}
          />
          {errors['pwCheck'] && (
            <ErrorMessageBox>{errors['pwCheck'].message}</ErrorMessageBox>
          )}
          <BasicInput label='이름' id='name' register={register} />
          {errors['name'] && (
            <ErrorMessageBox>{errors['name'].message}</ErrorMessageBox>
          )}
          <PhoneInput label='휴대폰번호' id='phoneNumber' register={register} />
          {errors['phoneNumberMiddle'] ? (
            <ErrorMessageBox>
              {errors['phoneNumberMiddle'].message}
            </ErrorMessageBox>
          ) : errors['phoneNumberLast'] ? (
            <ErrorMessageBox>
              {errors['phoneNumberLast'].message}
            </ErrorMessageBox>
          ) : null}
          {joinInfo.type === 'SELLER' && (
            <>
              <ValidCheckInput
                label='사업자 등록번호'
                id='companyRegistrationNumber'
                onClick={handleCompanyRegistrationNumberCheck}
                onChange={handleCompanyRegistrationNumberChange}
                register={register}
              />
              <ErrorMessageBox>
                {errors['companyRegistrationNumber'] &&
                  errors['companyRegistrationNumber'].message}
              </ErrorMessageBox>
              <BasicInput
                label='스토어이름'
                id='storeName'
                register={register}
              />
              {errors['storeName'] && (
                <ErrorMessageBox>{errors['storeName'].message}</ErrorMessageBox>
              )}
            </>
          )}
        </InputWrapper>
        <TermsLabel htmlFor='terms'>
          <input type='checkbox' id='terms' ref={termRef} />
          <span>
            호두샵의<ImportantWord>이용약관</ImportantWord> 및
            <ImportantWord>개인정보처리방침</ImportantWord>에 대한 내용을
            확인하였고 동의합니다.
          </span>
        </TermsLabel>
        <LoginSubmitButton>가입하기</LoginSubmitButton>
      </Form>
    </Wrapper>
  );
}
