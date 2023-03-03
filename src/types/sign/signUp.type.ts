import { SignType } from './sign.type';

export interface BuyerForm {
  id: string;
  name: string;
  pw: string;
  pwCheck: string;
  phoneNumberMiddle?: string;
  phoneNumberLast?: string;
}

export interface SellerForm extends BuyerForm {
  companyRegistrationNumber: string;
  storeName: string;
}

export interface JoinFormType {
  type: SignType;
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

export interface UserInfo {
  username: string;
  password: string;
  password2: string;
  phone_number: string;
  name: string;
  company_registration_number?: string;
  store_name?: string;
}

// 계정만들기 / 구매자 필요 api info
export interface BuyerSignUpInfo {
  username: String;
  name: String;
  password: String;
  password2: String;
  phone_number: String;
}

// 계정만들기 / 판매자 필요 api info
export interface SellerSignUpInfo extends BuyerSignUpInfo {
  company_registration_number: String;
  store_name: String;
}
