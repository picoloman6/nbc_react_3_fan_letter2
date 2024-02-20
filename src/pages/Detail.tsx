import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import DetailHeader from '../components/Detail/DetailHeader';
import DetailLetter from '../components/Detail/DetailLetter';
import DetailUpdateArea from '../components/Detail/DetailUpdateArea';
import DetailBtns from '../components/Detail/DetailBtns';

import { deleteFanLetter, updateFanLetter } from '../apis/fanLetters';
import { getLettersThunk } from '../store/fanLetters';
import { useThunkDispatch } from '../store';

import { ErrMsgTypes } from '../types';

import { StErrMsg } from '../components/Main/MainForm.style';
import { StDetailFooter } from './Detail.style';

import { checkFormValue } from '../controllers';

const Detail = () => {
  const dipatch = useThunkDispatch();
  const { state } = useLocation();
  const navigate = useNavigate();

  const [isUpdate, setIsUpdate] = useState<boolean>(false);
  const [newContent, setNewContent] = useState<string>(state.content);
  const [errMsg, setErrMsg] = useState<ErrMsgTypes>({ type: '', msg: '' });

  const changeUpdate = () => {
    setIsUpdate((prev) => !prev);
  };

  const onChangeNewContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewContent(e.target.value);
  };

  const onClickUpdate = async () => {
    const checkResult = checkFormValue(state.name, newContent, state.content);
    setErrMsg(checkResult);

    if (checkResult.type !== '') {
      return;
    }

    await updateFanLetter(state.id, newContent);
    dipatch(getLettersThunk());
    state.content = newContent;
    setIsUpdate(false);
  };

  const onClickDelete = async () => {
    await deleteFanLetter(state.id);
    dipatch(getLettersThunk());
    navigate(-1);
  };

  useEffect(() => {
    if (state === null) {
      alert('잘못된 경로로 접속했습니다.');
      navigate('/');
    }
    window.scrollTo(0, 0);
  }, [state, navigate]);

  if (state) {
    return (
      <>
        <DetailHeader name={state.name} />
        {isUpdate ? (
          <DetailUpdateArea
            content={newContent}
            onChangeNewContent={onChangeNewContent}
          />
        ) : (
          <DetailLetter content={state.content} />
        )}
        <StDetailFooter>
          <DetailBtns
            isUpdate={isUpdate}
            changeUpdate={changeUpdate}
            onClickUpdate={onClickUpdate}
            onClickDelete={onClickDelete}
          />
          <StErrMsg>{errMsg.msg}</StErrMsg>
        </StDetailFooter>
      </>
    );
  }
};

export default Detail;
