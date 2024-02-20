import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const setCookie = (key: string, value: string) => {
  cookies.set(key, value, {
    maxAge: 1000 * 60 * 20
  });
};

export const getCookie = (key: string) => {
  return cookies.get(key);
};
