import { SignInUserInfo } from '../types/sign/signIn.type';
import { axiosInstance } from './index';

export const axiosLogin = async (loginInfo: SignInUserInfo) => {
  const { data } = await axiosInstance.post(`/accounts/login/`, loginInfo);
  return data;
};
