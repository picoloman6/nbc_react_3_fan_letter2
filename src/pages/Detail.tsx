import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import DetailHeader from '../components/Detail/DetailHeader';
import DetailLetter from '../components/Detail/DetailLetter';
import DetailUpdateArea from '../components/Detail/DetailUpdateArea';
import DetailBtns from '../components/Detail/DetailBtns';
import { StErrMsg } from '../components/Home/MainForm.style';
import { StDetailFooter } from './Detail.style';

import { __deleteLetter, __updateLetter } from '../redux/letters';
import { useAppDispatch, useAppSelector } from '../redux/config';
import { ErrMsgTypes } from '../types/letters';
import { checkFormValue } from '../controllers/validation';
import { getCookie } from '../controllers/cookies';

const Detail = () => {
  const dipatch = useAppDispatch();
  const { state } = useLocation();
  const navigate = useNavigate();

  const [isUpdate, setIsUpdate] = useState<boolean>(false);
  const [newContent, setNewContent] = useState<string>(state?.content);
  const [errMsg, setErrMsg] = useState<ErrMsgTypes>({ type: '', msg: '' });

  const token = getCookie('access_token');
  const userInfo = useAppSelector((state) => state.user.userInfo);

  const changeUpdate = () => {
    setIsUpdate((prev) => !prev);
  };

  const onChangeNewContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewContent(e.target.value);
  };

  const onClickUpdate = async () => {
    const checkResult = checkFormValue(newContent, state.content);
    setErrMsg(checkResult);

    if (checkResult.type !== '') {
      return;
    }

    dipatch(__updateLetter({ id: state.id, content: newContent }));
    state.content = newContent;
    setIsUpdate(false);
  };

  const onClickDelete = async () => {
    dipatch(__deleteLetter(state.id));
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
        <DetailHeader name={state.userName} />
        {isUpdate ? (
          <DetailUpdateArea
            content={newContent}
            onChangeNewContent={onChangeNewContent}
          />
        ) : (
          <DetailLetter content={state.content} />
        )}
        {token && state.userId === userInfo.id && (
          <StDetailFooter>
            <DetailBtns
              isUpdate={isUpdate}
              changeUpdate={changeUpdate}
              onClickUpdate={onClickUpdate}
              onClickDelete={onClickDelete}
            />
            <StErrMsg>{errMsg.msg}</StErrMsg>
          </StDetailFooter>
        )}
      </>
    );
  }
};

export default Detail;
