import { StLoginModal, StModalTitle, StInputWapper } from './LoginPagestyle';

const LoginModal = () => {
  return (
    <StLoginModal>
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
    </StLoginModal>
  );
};

export default LoginModal;
