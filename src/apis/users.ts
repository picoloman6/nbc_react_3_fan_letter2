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
    return res.data;
  } catch (e) {
    const error = e as AxiosError;
    return error.response?.status;
  }
};
