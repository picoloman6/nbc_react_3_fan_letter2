import { StLoginModal, StModalTitle, StInputWapper } from './AuthPage.style';
import { StLoginSpan } from '../Home/Header.style';

interface LoginModalPropsTypes {
  changeIsLogin: () => void;
}

const LoginModal = ({ changeIsLogin }: LoginModalPropsTypes) => {
  return (
    <StLoginModal isLogin='true'>
      <StModalTitle>로그인 페이지</StModalTitle>
      <StInputWapper>
        <label>아이디</label>
        <input type='text' />
      </StInputWapper>
      <StInputWapper>
        <label>비밀번호</label>
        <input type='password' />
      </StInputWapper>
      <button>로그인</button>
      <StLoginSpan onClick={changeIsLogin}>회원가입</StLoginSpan>
    </StLoginModal>
  );
};

export default LoginModal;
