import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const userLoginInfoAtom = atom({
  key: 'userLoginInfo',
  default: null,
  effects_UNSTABLE: [persistAtom],
});

export const joinPhoneNumberAtom = atom({
  key: 'joinPhoneNumber',
  default: ['010', '', ''],
});

export const shoppingCartAtom = atom({
  key: 'shoppingCart',
  default: {},
  effects_UNSTABLE: [persistAtom],
});
