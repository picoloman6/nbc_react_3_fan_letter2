import { useState } from 'react';

import { RegisterValueTypes } from '../types/users';

const useForm = (state: RegisterValueTypes) => {
  const [value, setValue] = useState({ ...state });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValue((prev) => ({ ...prev, [name]: value }));
  };

  const reset = () => {
    setValue(state);
  };

  return { value, handleChange, reset };
};

export default useForm;
