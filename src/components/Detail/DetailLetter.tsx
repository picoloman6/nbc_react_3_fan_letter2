import { StDetailLetterWrapper, StDetailContent } from './DetailLetter.style';

interface DetailLetterPropsType {
  content: string;
}

const DetailLetter = ({ content }: DetailLetterPropsType) => {
  return (
    <StDetailLetterWrapper>
      <StDetailContent>{content}</StDetailContent>
    </StDetailLetterWrapper>
  );
};

export default DetailLetter;
