import { useState, useEffect, ReactElement } from 'react';
import { v4 as uuid4 } from 'uuid';

import Header from '../components/Home/Header';
import MainForm from '../components/Home/MainForm';
import FanLetter from '../components/Home/FanLetter';
import { StMainUl } from './Home.style';

import { MemberTypes, ErrMsgTypes, ClickFormTypes } from '../types/letters';
import { checkFormValue } from '../controllers/validation';
import { getCookie } from '../controllers/cookies';
import { postLetterApi } from '../apis/letters';
import { RootState, useAppDispatch, useAppSelector } from '../redux/config';
import { __getUserInfo } from '../redux/users';
import { __getLetters } from '../redux/letters';

interface MainPropsTypes {
  member: MemberTypes;
  changeMember: (newMember: MemberTypes) => void;
}

const Home = ({ member, changeMember }: MainPropsTypes) => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state: RootState) => state.letters);
  const userInfo = useAppSelector((state) => state.user.userInfo);
  const token = getCookie('access_token');

  const [errMsg, setErrMsg] = useState<ErrMsgTypes>({ type: '', msg: '' });

  const onClickForm: ClickFormTypes = async (e, content, setInput) => {
    e.preventDefault();

    const valueCheck = checkFormValue(content);
    setErrMsg(valueCheck);

    if (valueCheck.type !== '') {
      return;
    }

    const newLetter = {
      id: uuid4(),
      member,
      content,
      userId: userInfo.id,
      userName: userInfo.nickname,
      createdAt: new Date().getTime()
    };

    await postLetterApi(newLetter);
    dispatch(__getLetters());
    setInput('');
  };

  useEffect(() => {
    if (token && userInfo.id === '') {
      dispatch(__getUserInfo(token));
    }
  }, [dispatch, token, userInfo]);

  return (
    <>
      <Header member={member} changeMember={changeMember} token={token} />
      {token && (
        <MainForm member={member} errMsg={errMsg} onClickForm={onClickForm} />
      )}
      <StMainUl>
        {!data.isLoading &&
          data.letters.reduce(
            (acc: ReactElement[], cur) =>
              cur.member === member
                ? [...acc, <FanLetter key={cur.id} letter={cur} />]
                : acc,
            []
          )}
      </StMainUl>
    </>
  );
};

export default Home;
