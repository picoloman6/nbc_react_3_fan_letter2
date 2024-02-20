import { StDetailBtnWrapper, StDetailBtn } from './DetailBtns.style';

interface DetailBtnsPropsTypes {
  isUpdate: boolean;
  changeUpdate: () => void;
  onClickUpdate: () => void;
  onClickDelete: () => void;
}

const DetailBtns = ({
  isUpdate,
  changeUpdate,
  onClickUpdate,
  onClickDelete
}: DetailBtnsPropsTypes) => {
  return (
    <StDetailBtnWrapper>
      {isUpdate ? (
        <>
          <StDetailBtn onClick={onClickUpdate}>확인</StDetailBtn>
          <StDetailBtn onClick={changeUpdate}>취소</StDetailBtn>
        </>
      ) : (
        <>
          <StDetailBtn onClick={changeUpdate}>수정</StDetailBtn>
          <StDetailBtn onClick={onClickDelete}>삭제</StDetailBtn>
        </>
      )}
    </StDetailBtnWrapper>
  );
};

export default DetailBtns;
