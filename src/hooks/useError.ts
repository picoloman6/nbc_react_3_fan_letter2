import { useState } from 'react';
import { ErrMsgTypes } from '../types/letters';

const useError = () => {
  const [err, setErr] = useState<ErrMsgTypes>({ type: '', msg: '' });

  const handleChangeErr = (newErr: ErrMsgTypes) => {
    setErr(newErr);
  };

  return { err, handleChangeErr };
};

export default useError;
