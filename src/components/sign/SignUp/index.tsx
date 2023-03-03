import BasicInput from '../../common/input/BasicInput';
import ErrorMessageBox from '../../common/input/ErrorMessageBox';
import PhoneInput from '../../common/input/PhoneInput';
import SignTypeSelectBox from '../SignTypeSelectBox';
import TermCheckBox from './TermCheckBox';
import S from './style';
import useSignUp from './useSignUp';
import Button from '../../common/button/Button';
import ValidCheckInput from '../../common/input/ValidCheckInput';
import { DevTool } from '@hookform/devtools';

export default function SignUp() {
  const {
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
    control,
  } = useSignUp();

  return (
    <S.Wrapper>
      <h2 className='ir'>회원가입</h2>
      <S.Form onSubmit={handleSubmit(handleJoin)}>
        <SignTypeSelectBox
          selectedType={joinInfo.type}
          handleSetSignType={handleSetSignUpType}
          suffix='가입'
        />
        <S.InputWrapper>
          <S.ValidCheckInputWrapper>
            <BasicInput
              label='아이디'
              id='id'
              {...register('id', {
                onChange: handleIdChange,
                required: {
                  value: true,
                  message: `아이디를 입력해주세요.`,
                },
              })}
            />
            <Button size='MS' onClick={idCheck}>
              중복확인
            </Button>
          </S.ValidCheckInputWrapper>
          <ErrorMessageBox errorType={errors['id']}>
            {errors['id']?.message}
          </ErrorMessageBox>

          <ValidCheckInput
            label='비밀번호'
            type='password'
            id='pw'
            {...register('pw', {
              required: {
                value: true,
                message: `비밀번호를 입력해주세요.`,
              },
              pattern: {
                value: /^(?=.*[A-Za-z])[A-Za-z\d]{8,}$/,
                message: `비밀번호는 8자 이상, 영소문자를 포함해야 합니다.`,
              },
              // TODO: checked를 props로 받아서 유효성이 통과되었는지 확인하고 표시해줘야한다.
              onChange: handlePwValidCheck,
            })}
          />
          <ErrorMessageBox errorType={errors['pw']}>
            {errors['pw']?.message}
          </ErrorMessageBox>

          <ValidCheckInput
            label='비밀번호 확인'
            type='password'
            id='pwCheck'
            {...register('pwCheck', {
              required: {
                value: true,
                message: `비밀번호를 입력해주세요.`,
              },
              pattern: {
                value: /^(?=.*[A-Za-z])[A-Za-z\d]{8,}$/,
                message: `비밀번호는 8자 이상, 영소문자를 포함해야 합니다.`,
              },
              // TODO: checked를 props로 받아서 유효성이 통과되었는지 확인하고 표시해줘야한다.
              onChange: handlePwValidCheckSame,
            })}
          />
          <ErrorMessageBox errorType={errors['pwCheck']}>
            {errors['pwCheck']?.message}
          </ErrorMessageBox>

          <BasicInput
            label='이름'
            id='name'
            {...register('name', {
              required: {
                value: true,
                message: `이름을 입력해주세요.`,
              },
            })}
          />
          <ErrorMessageBox errorType={errors['name']}>
            {errors['name']?.message}
          </ErrorMessageBox>

          <PhoneInput label='휴대폰번호' id='phoneNumber' register={register} />
          {errors['phoneNumberMiddle'] ? (
            <ErrorMessageBox errorType={errors['phoneNumberMiddle']}>
              {errors['phoneNumberMiddle'].message}
            </ErrorMessageBox>
          ) : errors['phoneNumberLast'] ? (
            <ErrorMessageBox errorType={errors['phoneNumberLast']}>
              {errors['phoneNumberLast'].message}
            </ErrorMessageBox>
          ) : null}

          {joinInfo.type === 'SELLER' && (
            <>
              <S.ValidCheckInputWrapper>
                <BasicInput
                  label='사업자 등록번호'
                  id='companyRegistrationNumber'
                  {...register('companyRegistrationNumber', {
                    onChange: handleCompanyRegistrationNumberChange,
                    required: {
                      value: true,
                      message: `사업자 등록번호를 입력해주세요.`,
                    },
                  })}
                />
                <Button
                  type='button'
                  size='MS'
                  onClick={handleCompanyRegistrationNumberCheck}
                >
                  중복확인
                </Button>
              </S.ValidCheckInputWrapper>
              <ErrorMessageBox errorType={errors['companyRegistrationNumber']}>
                {errors['companyRegistrationNumber']?.message}
              </ErrorMessageBox>

              <BasicInput
                label='스토어 이름'
                id='storeName'
                {...register('storeName', {
                  required: {
                    value: true,
                    message: `스토어 이름을 입력해주세요.`,
                  },
                })}
              />
              <ErrorMessageBox errorType={errors['storeName']}>
                {errors['storeName']?.message}
              </ErrorMessageBox>
            </>
          )}
        </S.InputWrapper>
        <TermCheckBox termRef={termRef} />
        <S.LoginSubmitButton>가입하기</S.LoginSubmitButton>
      </S.Form>
      <DevTool control={control} />
    </S.Wrapper>
  );
}
