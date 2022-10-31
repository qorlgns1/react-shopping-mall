import { toast } from 'react-toastify';

export const successToast = (message: string) => {
  toast.success(message, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
  });
};
