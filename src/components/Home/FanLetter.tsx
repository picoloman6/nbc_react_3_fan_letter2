import { useNavigate } from 'react-router-dom';

import { convertDate } from '../../controllers/date';
import { LettersType } from '../../types/letters';
import { StFanLetterWrapper, StFanLetterName } from './FanLetter.style';

interface FanLetterPropsTypes {
  letter: LettersType;
}

const FanLetter = ({ letter }: FanLetterPropsTypes) => {
  const navigate = useNavigate();
  const { id, userName, content, createdAt } = letter;

  const handleClickDetail = () => {
    navigate(`/detail?id=${id}`, { state: letter });
  };

  return (
    <StFanLetterWrapper onClick={handleClickDetail}>
      <StFanLetterName>{userName}</StFanLetterName>
      <span>{convertDate(createdAt)}</span>
      <span>
        {content.length > 35 ? `${content.slice(0, 35)}...` : content}
      </span>
    </StFanLetterWrapper>
  );
};

export default FanLetter;
