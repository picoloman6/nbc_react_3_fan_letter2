import { useEffect, ReactElement } from 'react';
import { v4 as uuid4 } from 'uuid';

import Header from '../components/Home/Header';
import MainForm from '../components/Home/MainForm';
import FanLetter from '../components/Home/FanLetter';
import { StMainUl } from './Home.style';

import { MemberTypes, ClickFormTypes } from '../types/letters';
import { checkFormValue } from '../controllers/validation';
import { getCookie } from '../controllers/cookies';
import { RootState, useAppDispatch, useAppSelector } from '../redux/config';
import { __postLetter } from '../redux/letters';
import { __getUserInfo } from '../redux/users';
import useError from '../hooks/useError';

interface MainPropsTypes {
  member: MemberTypes;
  changeMember: (newMember: MemberTypes) => void;
}

const Home = ({ member, changeMember }: MainPropsTypes) => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state: RootState) => state.letters);
  const userInfo = useAppSelector((state) => state.user.userInfo);
  const { err, handleChangeErr } = useError();
  const token = getCookie('access_token');

  const onClickForm: ClickFormTypes = async (e, content, setInput) => {
    e.preventDefault();

    const valueCheck = checkFormValue(content);
    handleChangeErr(valueCheck);

    if (valueCheck.type !== '') {
      return;
    }

    const newLetter = {
      id: uuid4(),
      member,
      content,
      userId: userInfo.id,
      userName: userInfo.nickname,
      userAvatar: userInfo.avatar,
      createdAt: new Date().getTime()
    };

    dispatch(__postLetter(newLetter));
    setInput('');
  };

  useEffect(() => {
    if (token && userInfo.id === '') {
      dispatch(__getUserInfo(token));
    }
  }, [dispatch, token, userInfo]);

  return (
    <>
      <Header
        member={member}
        changeMember={changeMember}
        token={token}
        userName={userInfo.nickname}
      />
      {token && (
        <MainForm member={member} errMsg={err} onClickForm={onClickForm} />
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
