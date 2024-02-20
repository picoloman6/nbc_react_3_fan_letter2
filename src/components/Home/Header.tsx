import { memo } from 'react';
import { useNavigate } from 'react-router-dom';

import SelectArea from './SelectArea.tsx';
import { MemberStateTypes } from '../../types/letters.ts';
import { StHeaderWrapper, StHeaderTitle, StLoginSpan } from './Header.style.ts';

const Header = memo(({ member, changeMember }: MemberStateTypes) => {
  const navigate = useNavigate();
  const handleClickLogin = () => {
    navigate('/auth');
  };

  return (
    <StHeaderWrapper>
      <StHeaderTitle>프로젝트다</StHeaderTitle>
      <StLoginSpan onClick={handleClickLogin} marginTop='true'>
        로그인
      </StLoginSpan>
      <SelectArea member={member} changeMember={changeMember} />
    </StHeaderWrapper>
  );
});

export default Header;
