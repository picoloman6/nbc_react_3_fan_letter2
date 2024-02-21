import { useNavigate } from 'react-router-dom';

import {
  StFanLetterWrapper,
  StFanLetterName,
  StLetterContentsWrapper
} from './FanLetter.style';
import { UserInfoImg } from '../MyPage/UserInfo.style';

import { convertDate } from '../../controllers/date';
import { LettersType } from '../../types/letters';
import { userDefaultImg } from '../../constants';

interface FanLetterPropsTypes {
  letter: LettersType;
}

const FanLetter = ({ letter }: FanLetterPropsTypes) => {
  const navigate = useNavigate();
  const { id, userName, userAvatar, content, createdAt } = letter;

  const handleClickDetail = () => {
    navigate(`/detail?id=${id}`, { state: letter });
  };

  return (
    <StFanLetterWrapper onClick={handleClickDetail}>
      <UserInfoImg src={userAvatar ? userAvatar : userDefaultImg} />
      <StLetterContentsWrapper>
        <StFanLetterName>{userName}</StFanLetterName>
        <span>{convertDate(createdAt)}</span>
        <span>
          {content.length > 35 ? `${content.slice(0, 35)}...` : content}
        </span>
      </StLetterContentsWrapper>
    </StFanLetterWrapper>
  );
};

export default FanLetter;
