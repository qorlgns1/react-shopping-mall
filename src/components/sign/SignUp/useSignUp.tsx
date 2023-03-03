import { ChangeEvent, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import {
  axiosCompanyRegistrationNumberCheck,
  axiosIdCheck,
  axiosJoin,
} from '../../../apis/joinApi';
import { joinPhoneNumberAtom } from '../../../atoms';
import { SignType } from '@@types/sign/sign.type';
import {
  BuyerForm,
  JoinFormType,
  SellerForm,
} from '../../../types/sign/signUp.type';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

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

export default function useSignUp() {
  const history = useHistory();
  const [joinInfo, setJoinInfo] = useState<JoinFormType>(defaultLoginForm);
  const joinPhoneNumber = useRecoilValue(joinPhoneNumberAtom);
  const {
    register,
    handleSubmit,
    watch,
    setError,
    clearErrors,
    setValue,
    control,

    formState: { errors },
  } = useForm<JoinFormType>();
  const termRef = useRef<HTMLInputElement>(null);

  const handleSetSignUpType = (signUpType: SignType) => () => {
    setJoinInfo((prev) => ({ ...prev, type: signUpType }));
  };

  const { mutate: idCheckMutation } = useMutation(axiosIdCheck, {
    onSuccess: (res) => {
      setJoinInfo((prev) => ({ ...prev, idValidCheck: true }));
      alert(res.Success);
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        if (error?.response?.data?.FAIL_Message) {
          setError('id', { message: error?.response?.data?.FAIL_Message });
        }
      }
    },
  });

  const { mutate: companyRegistrationNumberCheckMutation } = useMutation(
    axiosCompanyRegistrationNumberCheck,
    {
      onSuccess: (res) => {
        setJoinInfo((prev) => ({
          ...prev,
          companyRegistrationNumberValidCheck: true,
        }));
        alert(res.Success);
      },
      onError: (error) => {
        if (error instanceof AxiosError) {
          if (error?.response?.data?.FAIL_Message) {
            setError('id', { message: error?.response?.data?.FAIL_Message });
          }
        }
      },
    },
  );

  // id 유효성 검사하는 함수
  const idCheck = async () => {
    const id = watch('id');
    if (!id) {
      return;
    }

    idCheckMutation(id);
  };

  const stringCheckOfNumber = (str: string) => {
    return str === parseInt(str).toString();
  };

  // 사업자번호 유효성 검사하는 함수
  const handleCompanyRegistrationNumberCheck = async () => {
    const companyRegistrationNumber = watch('companyRegistrationNumber');

    if (!companyRegistrationNumber) {
      return;
    }

    if (stringCheckOfNumber(companyRegistrationNumber)) {
      setError('companyRegistrationNumber', {
        message: '사업자번호는 숫자만 입력가능합니다.',
      });
      return;
    } else {
      clearErrors('companyRegistrationNumber');
    }

    companyRegistrationNumberCheckMutation(companyRegistrationNumber);
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
    debugger;
    const regex = new RegExp(/^(?=.*[A-Za-z])[A-Za-z\d]{8,}$/);
    const pwValidCheck = regex.test(e.target.value);

    return pwValidCheck;
  };

  // 비밀번호와 비밀번호확인이 일치하는지 확인하는 함수
  const handlePwValidCheckSame = () => {
    const pw = watch('pw');
    const pwCheck = watch('pwCheck');

    if (pw === pwCheck) {
      setJoinInfo((prev) => ({ ...prev, pwSameCheck: true }));
      clearErrors('pw');
      clearErrors('pwCheck');
      return true;
    } else {
      setJoinInfo((prev) => ({ ...prev, pwSameCheck: false }));
      return false;
    }
  };

  const handleTermCheck = ($term: HTMLInputElement) => {
    return $term.checked;
  };

  // 회원가입하는 함수
  const handleJoin = async (formData: BuyerForm | SellerForm) => {
    const $term = termRef.current;
    if (!$term) {
      return;
    }

    if (handleTermCheck($term)) {
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

    const { id, pw, pwCheck, name } = formData;
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

  return {
    joinInfo,
    register,
    handleSubmit,
    errors,
    termRef,
    handleSetSignUpType,
    idCheck,
    handleCompanyRegistrationNumberCheck,
    handleIdChange,
    handleCompanyRegistrationNumberChange,
    handlePwValidCheck,
    handlePwValidCheckSame,
    handleJoin,
    setValue,
    watch,
    control,
  };
}
