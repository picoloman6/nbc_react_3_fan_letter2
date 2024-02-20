import axios from 'axios';

const { VITE_CLIENT_ENV, VITE_DEV_SERVER_URL, VITE_PRO_SERVER_URL } =
  import.meta.env;

const instance = axios.create({
  baseURL:
    VITE_CLIENT_ENV === 'development'
      ? VITE_DEV_SERVER_URL
      : VITE_PRO_SERVER_URL
});

export const getLettersApi = async () => {
  const res = await instance.get('/letters');
  console.log(res.data);
};
