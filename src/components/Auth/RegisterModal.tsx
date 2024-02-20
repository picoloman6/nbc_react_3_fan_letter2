import { StLoginSpan } from '../Home/Header.style';
import { StLoginModal, StModalTitle, StInputWapper } from './AuthPage.style';

interface RegisterModalPropsTypes {
  changeIsLogin: () => void;
}

const RegisterModal = ({ changeIsLogin }: RegisterModalPropsTypes) => {
  return (
    <StLoginModal isLogin='false'>
      <StModalTitle>회원가입 페이지</StModalTitle>
      <StInputWapper>
        <label>아이디</label>
        <input type='text' />
      </StInputWapper>
      <StInputWapper>
        <label>닉네임</label>
        <input type='text' />
      </StInputWapper>
      <StInputWapper>
        <label>비밀번호</label>
        <input type='password' />
      </StInputWapper>
      <StInputWapper>
        <label>비밀번호 확인</label>
        <input type='password' />
      </StInputWapper>
      <button>회원가입</button>
      <StLoginSpan onClick={changeIsLogin}>로그인</StLoginSpan>
    </StLoginModal>
  );
};

export default RegisterModal;
