import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';
import { StGoHomeBtn, StModalWrapper } from './AuthPage.style';

import { getCookie } from '../../controllers/cookies';

const AuthPage = () => {
  const navigate = useNavigate();
  const [isLogin, setLogin] = useState<boolean>(true);

  const changeIsLogin = () => {
    setLogin(!isLogin);
  };

  const goHome = () => {
    navigate('/');
  };

  useEffect(() => {
    const token = getCookie('access_token');

    if (token) {
      alert('잘못된 접근입니다.');
      goHome();
      return;
    }
  }, []);

  return (
    <>
      <StModalWrapper>
        {isLogin ? (
          <LoginModal changeIsLogin={changeIsLogin} />
        ) : (
          <RegisterModal changeIsLogin={changeIsLogin} />
        )}
        <StGoHomeBtn onClick={goHome}>홈으로</StGoHomeBtn>
      </StModalWrapper>
    </>
  );
};

export default AuthPage;
