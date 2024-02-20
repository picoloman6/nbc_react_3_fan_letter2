import { useState } from 'react';

import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';
import { StModalWrapper } from './AuthPage.style';

const AuthPage = () => {
  const [isLogin, setLogin] = useState<boolean>(true);

  const changeIsLogin = () => {
    setLogin(!isLogin);
  };

  return (
    <StModalWrapper>
      {isLogin ? (
        <LoginModal changeIsLogin={changeIsLogin} />
      ) : (
        <RegisterModal changeIsLogin={changeIsLogin} />
      )}
    </StModalWrapper>
  );
};

export default AuthPage;
