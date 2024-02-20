import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from './redux/config';
import { __getLetters } from './redux/letters';

function App() {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.letters);

  useEffect(() => {
    dispatch(__getLetters());
  }, [dispatch]);

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <>
      <p>여기</p>
    </>
  );
}

export default App;
