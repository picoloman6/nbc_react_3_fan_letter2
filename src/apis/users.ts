import axios from 'axios';

import { UserInputType } from '../types/users';

const instance = axios.create({
  baseURL: 'https://moneyfulpublicpolicy.co.kr'
});

export const registerUserApi = async (newUser: UserInputType) => {
  const res = await instance.post('/register', newUser);
  console.log(res);
};

export const loginUserApi = async (id: string, password: string) => {
  const res = await instance.post('/login', { id, password });
  console.log(res);
};
