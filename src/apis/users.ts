import axios, { AxiosError } from 'axios';

import { RegisterValueTypes, UserInputType } from '../types/users';

const instance = axios.create({
  baseURL: 'https://moneyfulpublicpolicy.co.kr'
});

export const registerUserApi = async (newUser: UserInputType) => {
  try {
    const res = await instance.post('/register', newUser);

    return res.data;
  } catch (e) {
    const error = e as AxiosError;

    return error.response?.status;
  }
};

export const loginUserApi = async ({ id, password }: RegisterValueTypes) => {
  try {
    const res = await instance.post('/login', { id, password });

    return res.data.accessToken;
  } catch (e) {
    const error = e as AxiosError;

    return error.response?.status;
  }
};

export const getUserInfoApi = async (token: string) => {
  try {
    const res = await instance.get('/user', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    });

    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const updateUserInfoApi = async (token: string, formData: FormData) => {
  try {
    const res = await instance.patch('/profile', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`
      }
    });

    const data = res.data;
    delete data.message;
    delete data.success;

    return data;
  } catch (e) {
    console.log(e);
  }
};
