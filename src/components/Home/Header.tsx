import { memo } from 'react';
import { useNavigate } from 'react-router-dom';

import SelectArea from './SelectArea.tsx';
import { StHeaderWrapper, StHeaderTitle, StLoginSpan } from './Header.style.ts';

import { MemberStateTypes } from '../../types/letters.ts';

interface HeaderPropsTypes extends MemberStateTypes {
  token: string;
}

const Header = memo(({ member, changeMember, token }: HeaderPropsTypes) => {
  const navigate = useNavigate();
  const handleClickLogin = () => {
    navigate('/auth');
  };

  return (
    <StHeaderWrapper>
      <StHeaderTitle>프로젝트다</StHeaderTitle>
      {!token && (
        <StLoginSpan onClick={handleClickLogin} marginTop='true'>
          로그인
        </StLoginSpan>
      )}
      <SelectArea member={member} changeMember={changeMember} />
    </StHeaderWrapper>
  );
});

export default Header;
