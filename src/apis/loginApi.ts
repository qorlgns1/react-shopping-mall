import { axiosInstance } from './index';

interface LoginInfoType {
  username: String;
  password: String;
  login_type: String;
}

export const axiosLogin = async (loginInfo: LoginInfoType) => {
  try {
    const { data } = await axiosInstance.post(`/accounts/login/`, loginInfo);
    return [data, true];
  } catch (error: any) {
    console.error('axiosLogin error', error);
    console.error(error?.response?.data);

    return [error?.response?.data, false];
  }
};
