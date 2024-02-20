import { StDetailLetterWrapper } from './DetailLetter.style';
import { StDetailTextArea } from './DetailUpdateArea.style';

interface DetailUpdateAreaPropsTypes {
  content: string;
  onChangeNewContent: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const DetailUpdateArea = ({
  content,
  onChangeNewContent
}: DetailUpdateAreaPropsTypes) => {
  return (
    <StDetailLetterWrapper>
      <StDetailTextArea value={content} onChange={onChangeNewContent} />
    </StDetailLetterWrapper>
  );
};

export default DetailUpdateArea;
