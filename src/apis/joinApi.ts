import { axiosInstance } from './index';

export const axiosIdCheck = async (id: string) => {
  try {
    const { data } = await axiosInstance.post(
      `/accounts/signup/valid/username/`,
      {
        username: id,
      },
    );

    const successMessage = data?.Success;

    return [successMessage, true];
  } catch (error: any) {
    // console.error('axiosIdCheck error', error);
    // console.error(error?.response?.data);

    const { FAIL_Message } = error?.response?.data;

    return [FAIL_Message, false];
  }
};

export const axiosJoin = async (userInfo: object) => {
  try {
    const { data } = await axiosInstance.post(`/accounts/signup/`, {
      ...userInfo,
    });

    return [data, true];
  } catch (error: any) {
    const errorMessage = error?.response?.data;

    return [errorMessage, false];
  }
};
