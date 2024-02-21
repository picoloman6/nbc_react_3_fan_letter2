import { memo } from 'react';
import { useNavigate } from 'react-router-dom';

import SelectArea from './SelectArea.tsx';
import {
  StHeaderWrapper,
  StHeaderTitle,
  StLoginSpan,
  StUserInfoSpan,
  StUserInfoWrapper
} from './Header.style.ts';

import { MemberStateTypes } from '../../types/letters.ts';
import { removeCookie } from '../../controllers/cookies.ts';

interface HeaderPropsTypes extends MemberStateTypes {
  token: string;
  userName: string;
}

const Header = memo(
  ({ member, changeMember, token, userName }: HeaderPropsTypes) => {
    const navigate = useNavigate();

    const handleClickGo = (path: string) => {
      navigate(path);
    };

    const handleClickLogout = () => {
      removeCookie('access_token');
      location.reload();
    };

    return (
      <StHeaderWrapper>
        <StHeaderTitle>프로젝트다</StHeaderTitle>
        {!token ? (
          <StLoginSpan onClick={() => handleClickGo('/auth')} marginTop='true'>
            로그인
          </StLoginSpan>
        ) : (
          <StUserInfoWrapper>
            <StUserInfoSpan onClick={() => handleClickGo('/mypage')}>
              {userName}
            </StUserInfoSpan>
            <StLoginSpan onClick={handleClickLogout} marginTop='true'>
              로그아웃
            </StLoginSpan>
          </StUserInfoWrapper>
        )}
        <SelectArea member={member} changeMember={changeMember} />
      </StHeaderWrapper>
    );
  }
);

export default Header;
