import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const setCookie = (key: string, value: string) => {
  cookies.set(key, value, {
    maxAge: 60 * 60
  });
};

export const getCookie = (key: string) => {
  return cookies.get(key);
};

export const removeCookie = (key: string) => {
  cookies.remove(key);
};
