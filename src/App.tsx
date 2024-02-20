import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
// import Detail from './pages/Detail';
import Login from './components/Login/LoginModal';

import NotFound from './pages/NotFound';

import { useAppDispatch } from './redux/config';
import { __getLetters } from './redux/letters';
import { MemberTypes } from './types/letters';
import './index.css';

function App() {
  const dispatch = useAppDispatch();
  const [member, setMember] = useState<MemberTypes>('카리나');

  const changeMember = (newMember: MemberTypes) => {
    setMember(newMember);
  };

  useEffect(() => {
    dispatch(__getLetters());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Home member={member} changeMember={changeMember} />}
        />
        {/* <Route path='/detail' element={<Detail />} /> */}
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
