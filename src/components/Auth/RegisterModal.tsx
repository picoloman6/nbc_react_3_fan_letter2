import { StLoginSpan } from '../Home/Header.style';
import {
  StLoginModal,
  StModalTitle,
  StInputWapper,
  StBtnWrapper,
  StInputErrWrapper
} from './AuthPage.style';
import { StErrMsg } from '../Home/MainForm.style';

import useForm from '../../hooks/useForm';
import useError from '../../hooks/useError';
import { registerUserApi } from '../../apis/users';
import { checkRegFormValue } from '../../controllers/validation';

interface RegisterModalPropsTypes {
  changeIsLogin: () => void;
}

const RegisterModal = ({ changeIsLogin }: RegisterModalPropsTypes) => {
  const { value, handleChange, reset } = useForm({
    id: '',
    password: '',
    confirmPassword: '',
    nickname: ''
  });
  const { err, handleChangeErr } = useError();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { id, password, confirmPassword, nickname } = value;
    const checkValue = checkRegFormValue(value);

    if (nickname === undefined || confirmPassword === undefined) {
      return;
    }

    if (checkValue.type === '') {
      try {
        const data = await registerUserApi({
          id,
          password,
          nickname
        });

        if (data === 409) {
          handleChangeErr({ type: 'id', msg: '존재하는 아이디 입니다.' });
          return;
        }

        reset();
      } catch (e) {
        console.log(e);
      }
    }

    handleChangeErr(checkValue);
    changeIsLogin();
  };

  return (
    <StLoginModal isLogin='false' onSubmit={handleSubmit}>
      <StModalTitle>회원가입 페이지</StModalTitle>
      <StInputErrWrapper>
        <StInputWapper>
          <label htmlFor='register-form-id'>아이디</label>
          <input
            type='text'
            id='register-form-id'
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
          <label htmlFor='register-form-nickname'>닉네임</label>
          <input
            type='text'
            id='register-form-nickname'
            name='nickname'
            value={value.nickname}
            autoComplete='off'
            onChange={handleChange}
          />
        </StInputWapper>
        <StErrMsg>{err.type === 'nickname' && err.msg}</StErrMsg>
      </StInputErrWrapper>
      <StInputErrWrapper>
        <StInputWapper>
          <label htmlFor='register-form-password'>비밀번호</label>
          <input
            type='password'
            id='register-form-password'
            name='password'
            value={value.password}
            autoComplete='off'
            onChange={handleChange}
          />
        </StInputWapper>
        <StErrMsg>{err.type === 'password' && err.msg}</StErrMsg>
      </StInputErrWrapper>
      <StInputErrWrapper>
        <StInputWapper>
          <label htmlFor='register-form-confirm-password'>비밀번호 확인</label>
          <input
            type='password'
            id='register-form-confirm-password'
            name='confirmPassword'
            value={value.confirmPassword}
            autoComplete='off'
            onChange={handleChange}
          />
        </StInputWapper>
        <StErrMsg>{err.type === 'confirmPassword' && err.msg}</StErrMsg>
      </StInputErrWrapper>
      <StBtnWrapper>
        <button>회원가입</button>
      </StBtnWrapper>
      <StLoginSpan onClick={changeIsLogin}>로그인</StLoginSpan>
    </StLoginModal>
  );
};

export default RegisterModal;
