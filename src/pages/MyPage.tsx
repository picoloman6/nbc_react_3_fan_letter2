import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import UserInfo from '../components/MyPage/UserInfo';
import EditInfo from '../components/MyPage/EditInfo';
import {
  StGoHomeBtn,
  StLoginModal,
  StModalTitle,
  StModalWrapper
} from './AuthPage.style';

import { useAppSelector } from '../redux/config';

const MyPage = () => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const navigate = useNavigate();
  const userInfo = useAppSelector((state) => state.user.userInfo);

  const handleClickGoHome = () => {
    navigate('/');
  };

  const handleChangeIsEdit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEdit(!isEdit);
  };

  useEffect(() => {
    if (userInfo.id === '') {
      alert('잘못된 경로입니다.');
      navigate('/');
    }
  }, [navigate, userInfo]);

  return (
    <StModalWrapper>
      <StLoginModal isLogin='true'>
        <StModalTitle>마이 페이지</StModalTitle>
        {isEdit ? (
          <EditInfo
            userInfo={userInfo}
            handleChangeIsEdit={handleChangeIsEdit}
          />
        ) : (
          <UserInfo
            userInfo={userInfo}
            handleChangeIsEdit={handleChangeIsEdit}
          />
        )}
      </StLoginModal>
      <StGoHomeBtn onClick={handleClickGoHome}>홈으로</StGoHomeBtn>
    </StModalWrapper>
  );
};

export default MyPage;
