import { useNavigate } from 'react-router-dom';

import {
  StLoginModal,
  StModalTitle,
  StInputWapper,
  StInputErrWrapper,
  StFormInput
} from '../../pages/AuthPage.style';
import { StLoginSpan } from '../Home/Header.style';
import { StErrMsg } from '../Home/MainForm.style';

import { loginUserApi } from '../../apis/users';
import useForm from '../../hooks/useForm';
import useError from '../../hooks/useError';
import { checkRegFormValue } from '../../controllers/validation';
import { setCookie } from '../../controllers/cookies';

interface LoginModalPropsTypes {
  changeIsLogin: () => void;
}

const LoginModal = ({ changeIsLogin }: LoginModalPropsTypes) => {
  const navigate = useNavigate();

  const { value, handleChange } = useForm({ id: '', password: '' });
  const { err, handleChangeErr } = useError();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const checkValue = checkRegFormValue(value);

    if (checkValue.type === '') {
      const data = await loginUserApi(value);

      if (data === 401) {
        handleChangeErr({ type: 'id', msg: '아이디와 비밀번호를 확인하세요' });
        return;
      }

      setCookie('access_token', data);
      navigate('/');
    }

    handleChangeErr(checkValue);
  };

  return (
    <StLoginModal isLogin='true' onSubmit={handleSubmit}>
      <StModalTitle>로그인 페이지</StModalTitle>
      <StInputErrWrapper>
        <StInputWapper>
          <label htmlFor='login-form-id'>아이디</label>
          <StFormInput
            type='text'
            id='login-form-id'
            name='id'
            value={value.id}
            autoComplete='off'
            onChange={handleChange}
          />
        </StInputWapper>
        <StErrMsg>{err.type === 'id' && err.msg}</StErrMsg>
      </StInputErrWrapper>
      <StInputErrWrapper>
        <StInputWapper>
          <label htmlFor='login-form-password'>비밀번호</label>
          <StFormInput
            type='password'
            id='login-form-password'
            name='password'
            value={value.password}
            autoComplete='off'
            onChange={handleChange}
          />
        </StInputWapper>
        <StErrMsg>{err.type === 'password' && err.msg}</StErrMsg>
      </StInputErrWrapper>
      <button>로그인</button>
      <StLoginSpan onClick={changeIsLogin}>회원가입</StLoginSpan>
    </StLoginModal>
  );
};

export default LoginModal;
