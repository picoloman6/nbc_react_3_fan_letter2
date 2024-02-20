import { useState, useEffect, ReactElement } from 'react';
import { Cookies } from 'react-cookie';

import Header from '../components/Home/Header';
import MainForm from '../components/Home/MainForm';
import FanLetter from '../components/Home/FanLetter';

import { MemberTypes, ErrMsgTypes, ClickFormTypes } from '../types/letters';
import { StMainUl } from './Home.style';
import { checkFormValue } from '../controllers/validation';
import { RootState, useAppSelector } from '../redux/config';

interface MainPropsTypes {
  member: MemberTypes;
  changeMember: (newMember: MemberTypes) => void;
}

const Home = ({ member, changeMember }: MainPropsTypes) => {
  const data = useAppSelector((state: RootState) => state.letters);
  const cookies = new Cookies();

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
    console.log(cookies.get('access_token'));
  }, []);

  return (
    <>
      <Header member={member} changeMember={changeMember} />
      <MainForm member={member} errMsg={errMsg} onClickForm={onClickForm} />
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
