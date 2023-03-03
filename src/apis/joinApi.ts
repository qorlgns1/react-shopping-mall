import { BuyerSignUpInfo, SellerSignUpInfo } from '../types/sign/signUp.type';
import { axiosInstance } from './index';

export const axiosIdCheck = async (id: string) => {
  const { data } = await axiosInstance.post(
    `/accounts/signup/valid/username/`,
    {
      username: id,
    },
  );

  return data;
};

export const axiosCompanyRegistrationNumberCheck = async (
  companyRegistrationNumber: string,
) => {
  const { data } = await axiosInstance.post(
    `/accounts/signup/valid/company_registration_number/`,
    {
      company_registration_number: companyRegistrationNumber,
    },
  );

  const successMessage = data?.Success;
  return successMessage;
};

export const axiosJoin = async (userInfo: object, type?: string) => {
  try {
    const { data } = !type
      ? await axiosInstance.post(`/accounts/signup/`, {
          ...userInfo,
        })
      : await axiosInstance.post(`/accounts/signup_seller/`, {
          ...userInfo,
        });

    return [data, true];
  } catch (error: any) {
    const errorMessage = error?.response?.data;

    return [errorMessage, false];
  }
};

export const axiosBuyerSignUp = async (userInfo: BuyerSignUpInfo) => {
  return await axiosInstance.post(`/accounts/signup/`, userInfo);
};

export const axiosSellerSignUp = async (userInfo: SellerSignUpInfo) => {
  return await axiosInstance.post(`/accounts/signup/`, userInfo);
};
