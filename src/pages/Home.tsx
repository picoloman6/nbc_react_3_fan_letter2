import { useState, useEffect, ReactElement } from 'react';

import Header from '../components/Home/Header';
import MainForm from '../components/Home/MainForm';
import FanLetter from '../components/Home/FanLetter';

import { MemberTypes, ErrMsgTypes, ClickFormTypes } from '../types/letters';
import { StMainUl } from './Home.style';
import { checkFormValue } from '../controllers/validation';
import { RootState, useAppDispatch, useAppSelector } from '../redux/config';
import { getCookie } from '../controllers/cookies';
import { __getUserInfo } from '../redux/users';

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

  const onClickForm: ClickFormTypes = async (e, name, content, setInput) => {
    e.preventDefault();

    const checkResult = checkFormValue(name, content);
    setErrMsg(checkResult);

    if (checkResult.type !== '') {
      return;
    }

    setInput({ name: '', content: '' });
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
